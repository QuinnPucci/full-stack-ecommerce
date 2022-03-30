import { React, useState } from "react";
import ProductList from "../components/ProductList";
import CategoryBar from "../components/CategoryBar";

// For product card to work

import ProductItem from "../components/ProductItem";

// setting some framework

const Home = () => {

  const [currentCategory, setCategory] = useState("");

  return (
    <div className="container">
      <CategoryBar setCategory={setCategory} />
      <ProductList currentCategory={currentCategory} />
      <h2>A sample single product card</h2>
      <ProductItem _id={"62437bc6757a22258bb53ae4"} />
    </div>
  );
};

export default Home;