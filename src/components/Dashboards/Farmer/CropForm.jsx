import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './CropForm.css';

const CropForm = ({ onClose, addProduct }) => {
  const [formData, setFormData] = useState({
    name: '',
    cropType: '',
    plantedDate: '',
    harvestedDate: '',
    expiryDate: '',
    description: '',
    location: '',
    fertilizer: '', // Added fertilizer field
  });
  const [imagePreview, setImagePreview] = useState('');
  const [error, setError] = useState('');

  /**
   * Handles changes for all text-based input fields.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  /**
   * Handles the image file upload.
   * Converts the selected image to a Base64 data URL for persistent display.
   */
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a new FileReader instance
      const reader = new FileReader();
      
      // Define what happens once the reader has loaded the file
      reader.onload = () => {
        // The result is the Base64 Data URL, which we save to state
        setImagePreview(reader.result); 
      };
      
      // Tell the reader to read the file as a Data URL
      reader.readAsDataURL(file);
    }
  };

  /**
   * Validates the form and submits the new product data.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic validation to ensure no fields are empty
    for (const key in formData) {
      if (!formData[key]) {
        // Create a user-friendly field name (e.g., "cropType" -> "crop type")
        const fieldName = key.replace(/([A-Z])/g, ' $1').toLowerCase();
        setError(`Please fill out the ${fieldName} field.`);
        return;
      }
    }
    if (!imagePreview) {
      setError('Please upload a product image.');
      return;
    }
    setError('');

    // Construct the new product object with a unique ID
    const newProduct = {
      id: uuidv4(),
      ...formData,
      image: imagePreview, // The Base64 data URL
      qrCodeValue: `farmchainx-prod-${uuidv4()}` // Generate a unique QR value
    };

    addProduct(newProduct); // Pass the new product to the parent component
    onClose(); // Close the modal on success
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <form onSubmit={handleSubmit} noValidate>
          <h2>Add New Crop / Product</h2>
          <div className="form-grid">
            {/* Left Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Product Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Crop Type</label>
                <input type="text" name="cropType" value={formData.cropType} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Fertilizer Used</label>
                <input type="text" name="fertilizer" value={formData.fertilizer} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Product Location (e.g., Field A1)</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Planted Date</label>
                <input type="date" name="plantedDate" value={formData.plantedDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Harvested Date</label>
                <input type="date" name="harvestedDate" value={formData.harvestedDate} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Expiry Date</label>
                <input type="date" name="expiryDate" value={formData.expiryDate} onChange={handleChange} required />
              </div>
            </div>
            {/* Right Column */}
            <div className="form-column">
              <div className="form-group">
                <label>Description</label>
                <textarea name="description" rows="5" value={formData.description} onChange={handleChange} required></textarea>
              </div>
              <div className="form-group">
                <label>Product Image</label>
                <input type="file" accept="image/*" onChange={handleImageChange} required />
              </div>
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Product Preview" />
                </div>
              )}
            </div>
          </div>

          {/* Error Message Display */}
          {error && <p className="error-message">{error}</p>}
          
          {/* Action Buttons */}
          <div className="form-actions">
            <button type="button" onClick={onClose} className="btn-cancel">Cancel</button>
            <button type="submit" className="btn-submit">Save Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CropForm;