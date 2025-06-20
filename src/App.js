import "./App.css";
import React from "react";
import './index.css';
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/ProductList/Product";


function App() {
  return (
    <>
      <Header/>
      <Hero/>
      <Product/>
      
    </>
  );
}

export default App;
