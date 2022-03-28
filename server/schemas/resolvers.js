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
        // Get a user by username
        findUser: async (parent, { username }) => {
            return User.findOne({ username })
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
        addOrder: async (parent, { products }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ products });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
      
            throw new AuthenticationError('Not logged in');
        },
        updateProduct: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Product.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
        },
    }
};

module.exports = resolvers;