// Import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }
    type AuthToken {
        token: ID!
        user: User
    }
    type Query {
        findUsers: [User]
        findUser(username: String!): User
    }
    type Mutation {
        login(email: String!, password: String!): AuthToken
        addUser(username: String!, email: String!, password: String!): AuthToken
        deleteUser(_id: ID!): User
    }
    `;

// export the typeDefs
module.exports = typeDefs;