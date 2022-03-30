// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID!
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
        _id: ID!
        userID: ID!
        purchaseDate: String
        products: [Product]
    }
    type Product {
        _id: ID!
        name: String!
        description: String
        image: String
        price: Float
        quantity: Int
        category: Category
    }
    input ProductInput {
        _id: ID
        name: String
        description: String
        image: String
        price: Float
        quantity: Int
        category: CategoryInput
    }
    input CategoryInput {
        _id: ID
        name: String
    }
    type Query {
        findUsers: [User]
        findUser(_id: ID!): User
        categories: [Category]
        products(_id: ID, category: ID, name: String): [Product]
        product(_id: ID, name: String): Product
        findOrder(_id: ID!): Order
        order(_id: ID!): Order
        orders: [Order]
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(billingFirstName: String!, billingLastName: String!, username: String!, email: String!, password: String!): Auth
        deleteUser: User
        updateUser(
            email: String, 
            billingFirstName: String, 
            billingLastName: String,
            shippingAddress: String,
            shippingCity: String,
            shippingProvince: String,
            shippingPostalCode: String,
            password: String): User
        addProduct(name: String!
            description: String
            image: String
            price: Float
            quantity: Int
            category: String): Product
        removeProduct(_id: ID!): Product
        addOrder(products: [ProductInput]!): Order
        updateProduct(_id: ID!, quantity: Int!): Product
    }
    `;

// export the typeDefs
module.exports = typeDefs;