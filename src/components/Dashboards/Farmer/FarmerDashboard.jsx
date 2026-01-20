import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '../../Shared/DashboardLayout';
import FarmerHome from './FarmerHome';
import ProductManagement from './ProductManagement';
import SalesOrders from './SalesOrders';
import FarmAnalytics from './FarmAnalytics';
import { mockFarmerProducts } from '../../../data/mockFarmerProducts';

const FarmerDashboard = () => {
  // Central state for the farmer's products
  const [products, setProducts] = useState(mockFarmerProducts);

  /**
   * Adds a new product to the beginning of the products array.
   * This function is passed down to the ProductManagement and CropForm components.
   */
  const addProduct = (newProduct) => {
    setProducts(prevProducts => [newProduct, ...prevProducts]);
  };
  
  /**
   * Deletes a product based on its ID after a confirmation.
   * This function is passed down to the ProductManagement component.
   */
  const deleteProduct = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
    }
  };

  return (
    <DashboardLayout>
      <Routes>
        {/* The main dashboard/home page */}
        <Route index element={<FarmerHome products={products} />} />
        
        {/* The product management page */}
        <Route 
          path="products" 
          element={
            <ProductManagement 
              products={products} 
              addProduct={addProduct}
              deleteProduct={deleteProduct}
            />
          } 
        />
        
        {/* The sales and orders page */}
        <Route path="orders" element={<SalesOrders />} /> 
        
        {/* The farm analytics page */}
        <Route path="analytics" element={<FarmAnalytics />} />

      </Routes>
    </DashboardLayout>
  );
};

export default FarmerDashboard;