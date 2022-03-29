import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="flex-column justify-flex-start">
        <Header />
        <div className="container">
          <p className="main-info">Hi.</p>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
