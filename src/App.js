import "./App.css";
import React from "react";
import "./index.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Product from "./components/ProductList/Product";
import TopSelling from "./components/TopSelling/TopSelling";
import DressStyle from "./components/DressStyle/DressStyle";
import HappyCustomer from "./components/HappyCustomers/HappyCustomer";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Product />
      <TopSelling />
      <DressStyle />
      <HappyCustomer />
      <Footer />
    </>
  );
}

export default App;
