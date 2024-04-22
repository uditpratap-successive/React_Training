// 6.Create a list of items (e.g., products, articles) in your application.
// Implement dynamic routing to display details for each item when clicked.
// Create a route parameter that represents the item's ID in the URL (e.g., "/products/:id").
// Fetch item details based on the route parameter and display them on the detail page.
// Add a "Go Back" button on the detail page to return to the list

// App.js
import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import ProductsList from './ProductsList';
import ProductDetails from './ProductDetails';
import Home from './Home';

const App = () => {
  return (
    
      <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
          <Route  path="/products" element={<ProductsList/>} />
          <Route path="/products/:id" element={<ProductDetails/>} />
      
        </Routes>
       
      </div>

  );
};

export default App;


