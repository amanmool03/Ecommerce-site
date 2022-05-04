import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Order from "./pages/Order";
import Users from "./pages/Users";
import { UserEdit } from "./pages/UserEdit";
import ProductList from "./pages/ProductList";
import { ProductEdit } from "./pages/ProductEdit";
import OrderList from "./pages/OrderList";

export default function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page/:pageNumber" element={<Home />} />
            <Route
              path="/search/:keyword/page/:pageNumber"
              element={<Home />}
            />
            <Route path="/shipping" element={<Shipping />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/placeorder" element={<PlaceOrder />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/admin/orderlist" element={<OrderList />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/:id" element={<Cart />} />
            <Route path="/admin/userlist" element={<Users />} />
            <Route path="/admin/user/:id/edit" element={<UserEdit />} />
            <Route path="/admin/productlist" element={<ProductList />} />
            <Route
              path="/admin/productlist/:pageNumber"
              element={<ProductList />}
            />
            <Route path="/admin/product/:id/edit" element={<ProductEdit />} />
            <Route path="/search/:keyword" element={<Home />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}
