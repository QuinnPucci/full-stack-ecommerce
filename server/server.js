const path = require('path');

const express = require('express');
// Import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// Import authentication middleware
//const { authMiddleware } = require('./utils/auth');

// Import our typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const startServer = async() => {
  // Create a new Apollo server and pass in our schema data
  const server = new ApolloServer ({
    typeDefs,
    resolvers,
    //context: authMiddleware
  });

  // Start the Apollo server
  await server.start();

  // Integrate our Apollo server with the Express application as middleware
  server.applyMiddleware({ app });

  // Log where we can go to test our GQL API
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

// Initialize the Apollo server
startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve up static assets
//check to see if the Node environment is in production. 
//If it is, we instruct the Express.js server to serve any files in the React application's build directory in the client folder. 
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
}

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});