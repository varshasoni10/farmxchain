import React, { useState, useMemo } from 'react';
import { format } from 'date-fns';
import './FarmerHome.css';

const FarmerHome = ({ products }) => {
  const [filterType, setFilterType] = useState('all');

  const cropTypes = useMemo(() => {
    const types = new Set(products.map(p => p.cropType));
    return ['all', ...Array.from(types)];
  }, [products]);

  const filteredProducts = products.filter(product =>
    filterType === 'all' || product.cropType === filterType
  );

  return (
    <div className="farmer-home">
      <h1>Dashboard</h1>
      <div className="stats-grid">
        <div className="stat-card">
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>
        <div className="stat-card">
          <h2>{cropTypes.length - 1}</h2>
          <p>Crop Varieties</p>
        </div>
        <div className="stat-card">
          <h2>3</h2>
          <p>Open Orders</p>
        </div>
      </div>

      <div className="product-filter-section widget">
        <h2>My Products Overview</h2>
        <div className="filter-controls">
          <label htmlFor="cropTypeFilter">Filter by Crop Type:</label>
          <select
            id="cropTypeFilter"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {cropTypes.map(type => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="product-grid-overview">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-card-overview">
              <img src={product.image} alt={product.name} className="product-overview-img" />
              <div className="product-overview-info">
                <h4>{product.name}</h4>
                <p><strong>Expires:</strong> {format(new Date(product.expiryDate), 'PP')}</p>
                <p><strong>Location:</strong> {product.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FarmerHome;