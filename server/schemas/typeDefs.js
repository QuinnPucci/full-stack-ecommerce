// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
        billingFirstName: String
        billingLastName: String
        shippingAddress: String
        shippingCity: String
        shippingProvince: String
        shippingPostalCode: String
    }
    type AuthToken {
        token: ID!
        user: User
    }
    type Query {
        findUsers: [User]
        findUser(_id: ID!): User
    }
    type Mutation {
        login(email: String!, password: String!): AuthToken
        addUser(username: String!, email: String!, password: String!): AuthToken
        deleteUser: User
        updateUser(email: String, billingFirstName: String, 
            billingLastName: String,
            shippingAddress: String,
            shippingCity: String,
            shippingProvince: String,
            shippingPostalCode: String): User
    }
    `;

// export the typeDefs
module.exports = typeDefs;