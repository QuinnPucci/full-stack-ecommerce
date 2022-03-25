// Import Mongoose models
const { User } = require('../models');

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
        deleteUser: async (parent, { _id }, context) => {
            if (context.user) {
                const user = await User.deleteOne({ "_id" : _id });
                console.log("user removed");
                return;
            }
            throw new AuthenticationError("You need to be logged in to do this!");
        }
    } 
};

module.exports = resolvers;