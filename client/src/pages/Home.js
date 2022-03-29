import React from "react";
import ProductList from "../components/ProductList";

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
