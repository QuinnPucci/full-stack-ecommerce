import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
<<<<<<< HEAD
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
=======
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";
import Product from './pages/Product';
>>>>>>> c6efb23016e7be13087457d414d4d7d5b1e24d10

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
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
<<<<<<< HEAD
      <Router>
        <div className="App">
          <div className="flex-column justify-flex-start">
            <Header />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
              </Switch>
            </div>
          </div>
=======
      <Router> 
    <div className="App">
      <div className="flex-column justify-flex-start">
        <Header />
        <div className="container">
        <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/cart" component={CartPage} />
              <Route exact path="/products/:id" component={Product} />
            </Switch>
>>>>>>> c6efb23016e7be13087457d414d4d7d5b1e24d10
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
