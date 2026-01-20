import React, { useState } from 'react';
import { format } from 'date-fns';
import CropForm from './CropForm';
import QRModal from '../../Shared/QRModal';
import './ProductManagement.css';

const ProductManagement = ({ products, addProduct, deleteProduct }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewQr = (product) => {
    setSelectedProduct(product);
    setIsQrModalOpen(true);
  };

  const handleEdit = (product) => {
    alert(`Editing "${product.name}". This would open the form pre-filled with its data.`);
  };

  return (
    <div className="product-management">
      <div className="pm-header">
        <h1>Product Management Center</h1>
        <button onClick={() => setIsModalOpen(true)} className="add-product-btn">
          + Add New Product
        </button>
      </div>

      <div className="product-grid-details">
        {products.map((product) => (
          <div key={product.id} className="product-card-details">
            <div className="card-header">
              <img src={product.image} alt={product.name} className="product-card-img" />
              <div className="card-title">
                <h3>{product.name}</h3>
                <span className="crop-type-badge">{product.cropType}</span>
              </div>
            </div>
            <div className="card-body">
              <p><strong><i className="fas fa-calendar-alt"></i> Harvested:</strong> {format(new Date(product.harvestedDate), 'MMM d, yyyy')}</p>
              <p><strong><i className="fas fa-hourglass-end"></i> Expires:</strong> {format(new Date(product.expiryDate), 'MMM d, yyyy')}</p>
              <p><strong><i className="fas fa-seedling"></i> Fertilizer:</strong> {product.fertilizer}</p>
              <p><strong><i className="fas fa-map-marker-alt"></i> Location:</strong> {product.location}</p>
              <p className="description"><strong>Description:</strong> {product.description}</p>
            </div>
            <div className="card-footer">
              <button onClick={() => handleEdit(product)} className="btn-edit">Edit</button>
              <button onClick={() => deleteProduct(product.id)} className="btn-delete">Delete</button>
              <button onClick={() => handleViewQr(product)} className="btn-view-qr">View QR</button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <CropForm
          onClose={() => setIsModalOpen(false)}
          addProduct={addProduct}
        />
      )}

      {isQrModalOpen && (
        <QRModal
          product={selectedProduct}
          onClose={() => setIsQrModalOpen(false)}
        />
      )}
    </div>
  );
};

export default ProductManagement;