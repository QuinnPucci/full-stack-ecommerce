// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
    }
    type Auth {
        token: ID!
        user: User
    }
    type Product {
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }
    type Query {
        findUsers: [User]
        findUser(username: String!): User
        categories: [Category]
        products:(category: ID, name: String): [Product]
        product(_id: ID!): Product
        user: User
        order(_id: ID!): Order
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addOrder(products: [ID]!) Order
        updateproduct(_id: ID!, quantity: Int!): Product 
    }
    `;

// export the typeDefs
module.exports = typeDefs;