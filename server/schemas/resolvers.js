// Import Mongoose models
const { User, Product, Order, Category } = require('../models');

// For handling login autheticatin errors
const { AuthenticationError } = require('apollo-server-express');

// Import the Authentication Token generator function
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // Get all users
        findUsers: async () => {
            return User.find().sort({ createdAt: -1 });
        },
        // Get a user by ID
        findUser: async (parent, arg) => {
            return User.findById( arg._id )
                .select('-__v -password')
        },
        categories: async () => {
            return await Category.find()
        },
        products: async (parent, { category, name }) => {
            const params = {}
      
            if (category) {
              params.category = category;
            }
      
            if (name) {
              params.name = {
                $regex: name
              };
            }
      
            return await Product.find(params).populate('category');
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate('category');
        },
        orders: async () => {
            return Order.find().sort({ createdAt: -1 });
        },
        order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.products',
                populate: 'category'
              });
      
              return user.orders.id(_id);
            }
      
            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        // creates a new user in the database with whatever is passed in as the args.
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            // If user is not found
            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }
            // We got isCorrectPassword() from the User model
            const correctPw = await user.isCorrectPassword(password);
            // If password doesnt match
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        // Used to close your own account after you've logged in
        deleteUser: async (parent, args, context) => {
            if (context.user) {
                const user = await User.deleteOne({ "_id" : context.user._id });
                return;
            }
            throw new AuthenticationError("You need to be logged in to do this!");
        },
        // Update any field except for _id and password
        updateUser: async (parent, args, context) => {
            if (context.user) {
                console.log(args);
                const user = await User.findByIdAndUpdate(
                    // Find by logged in user's ID
                    {"_id" : context.user._id}, 
                    // Update the fields
                    args
                );
                const userUpdated = await User.findById(context.user._id);
                return userUpdated;
            }
            throw new AuthenticationError("You need to be logged in to do this!");
        },
        addOrder: async (parent, { products }, context) => {
            //console.log(context);
            //console.log("Products", products);
            if (context.user) {
                const order = await Order.create({ products });
                //console.log("Order", order);
                await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } })
                const gotOrder = Order.findOne({_id: order._id}).populate('products');
      
                return gotOrder;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        addProduct: async (parent, args) => {
            const product = await Product.create(args);
            return product;
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
    }
};

module.exports = resolvers;