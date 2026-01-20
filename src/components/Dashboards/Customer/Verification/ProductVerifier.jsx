import React from 'react';
import { format } from 'date-fns';
import SupplyChainTimeline from './SupplyChainTimeline';
import FeedbackSystem from './FeedbackSystem';
import './ProductVerifier.css';

// Helper component for the verification status badge
const TrustBadge = ({ status }) => {
    const statusInfo = {
        verified: { icon: '✅', text: 'Verified', className: 'verified' },
        pending: { icon: '⚠️', text: 'Pending', className: 'pending' },
        failed: { icon: '❌', text: 'Alert', className: 'failed' },
    };
    const { icon, text, className } = statusInfo[status] || statusInfo.pending;

    return (
        <div className={`trust-badge ${className}`}>
            <span>{icon}</span> {text}
        </div>
    );
};


const ProductVerifier = ({ product, onAddReview }) => {
  if (!product) return null;

  const { productData, supplyChain, blockchain, verificationStatus } = product;
  const isExpired = new Date(productData.dates.expiry) < new Date();

  return (
    <div className="product-verifier">
      {/* SECTION 1: PRODUCT HEADER (This part was missing) */}
      <div className="verifier-header widget">
        <img src={productData.images[0]} alt={productData.name} className="product-image" />
        <div className="header-info">
          <h1>{productData.name}</h1>
          <p className="product-variety">{productData.variety} - Batch #{productData.batchNumber}</p>
          <TrustBadge status={verificationStatus} />
          {isExpired && <div className="expiry-warning">Warning: Product may be past its expiration date.</div>}
        </div>
      </div>

      {/* SECTION 2: PRODUCT DETAILS GRID (This part was missing) */}
      <div className="verifier-details">
        <div className="details-left">
          <div className="widget">
              <h3>Product Details</h3>
              <ul>
                  <li><strong>Harvested:</strong> {format(new Date(productData.dates.harvested), 'PPP')}</li>
                  <li><strong>Packaged:</strong> {format(new Date(productData.dates.packaged), 'PPP')}</li>
                  <li><strong>Expires On:</strong> {format(new Date(productData.dates.expiry), 'PPP')}</li>
              </ul>
          </div>
           <div className="widget">
              <h3>Farm Origin</h3>
              <div className="farmer-info">
                <img src={productData.farmer.photo} alt={productData.farmer.name} className="farmer-photo" />
                <div>
                  <strong>{productData.location.farm}</strong>
                  <p>Operated by {productData.farmer.name}</p>
                  <p>{productData.location.address}</p>
                </div>
              </div>
          </div>
          <div className="widget">
              <h3>Blockchain Verification</h3>
              <p>This product's journey is secured on the blockchain.</p>
              <div className="blockchain-hash">
                <strong>Hash:</strong> <span>{blockchain.hash.substring(0, 30)}...</span>
              </div>
              <p>Block Verified ✅</p>
          </div>
        </div>
        <div className="details-right">
            <div className="widget">
                <h3>Supply Chain Journey</h3>
                <SupplyChainTimeline stages={supplyChain} />
            </div>
        </div>
      </div>
      
      {/* SECTION 3: FEEDBACK SYSTEM (This was the only part showing) */}
      <FeedbackSystem 
        productId={product.productId}
        onSubmitFeedback={onAddReview}
      />
    </div>
  );
};

export default ProductVerifier;