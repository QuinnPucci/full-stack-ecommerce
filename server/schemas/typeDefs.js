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
    type Auth {
        token: ID!
        user: User
    }
    type Category {
        _id: ID
        name: String
    }
    type Order {
        _id: ID
        purchaseDate: String
        products: [Product]
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
        order(_id: ID!): Order
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
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