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

<<<<<<< HEAD
// ------- For JWT stuff -------

=======
>>>>>>> 366f55e0eaf3b248dbcbe4cf02d9bde9f808d656
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});
<<<<<<< HEAD

=======
>>>>>>> 366f55e0eaf3b248dbcbe4cf02d9bde9f808d656

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
