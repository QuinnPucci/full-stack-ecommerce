import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


import Header from "./components/Header";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: '/graphql',
});

// ------- For JWT stuff -------

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});


const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <div className="flex-column justify-flex-start">
        <Header />
        <div className="container">
          <p className="main-info">Hi.</p>
        </div>
        <Footer />
      </div>
    </div>
    </ApolloProvider>
  );
}

export default App;
