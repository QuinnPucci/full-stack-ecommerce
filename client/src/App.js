import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="flex-column justify-flex-start">
        <Header />
      </div>
      <p className="main-info">Hi.</p>
      <Footer />
    </div>
  );
}

export default App;
