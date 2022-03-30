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
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from "./components/Cart";
import CartPage from "./pages/CartPage";
import Product from './pages/Product';
import Profile from './pages/Profile';

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
                <Route exact path="/profile/:username?" component={Profile} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App() {
  const [count, setCount] = React.useState(1);
  
  return (
    <div style={{ display: "block", padding: 30 }}>
      <div>
        <Badge color="secondary" badgeContent={count}>
          <ShoppingCartIcon />{" "}
        </Badge>
        <ButtonGroup>
          <Button class='add-to-cart-btn'
            onClick={() => {
              setCount(Math.max(count - 1, 0));
            }}
          >
            {" "}
            <RemoveIcon fontSize="medium" />
          </Button>
          <Button
            onClick={() => {
              setount(count + 1);
            }}
          >
            {" "}
            <AddIcon fontSize="medium" />
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}
}
