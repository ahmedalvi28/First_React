import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Product />
              <TopSelling />
              <DressStyle />
              <HappyCustomer />
            </>
          }
        />

        <Route
          path="/TopSelling"
          element={
            <>
              <TopSelling />
            </>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
