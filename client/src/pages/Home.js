import { React, useState } from "react";
import ProductList from "../components/ProductList";
import Cart from '../components/Cart';

// setting some framework

const Home = () => {
  const [currentCategory, setCategory] = useState("");
  return (
    <div className="container">
      <ProductList currentCategory={currentCategory} />
    </div>
  );
};

export default Home;