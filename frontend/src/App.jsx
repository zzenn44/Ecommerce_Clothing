import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'; // Import Navigate for redirection
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track user authentication

  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
      <Navbar />
      <Searchbar />
      <Routes>
        {/* Redirect user to Home if logged in, otherwise show Login */}
        <Route
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />

        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* Pass `setIsAuthenticated` to Login to update auth state */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;