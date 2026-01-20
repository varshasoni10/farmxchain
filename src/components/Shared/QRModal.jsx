import React from 'react';
import QRCode from 'react-qr-code';
import './QRModal.css';

const QRModal = ({ product, onClose }) => {
  if (!product) return null;

  const downloadQRCode = () => {
    const svg = document.getElementById("QRCode");
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `${product.name}-QRCode.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="qr-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>QR Code for {product.name}</h2>
        <div className="qr-code-container">
          <QRCode id="QRCode" value={product.qrCodeValue} size={256} />
        </div>
        <p className="qr-value-text">Value: {product.qrCodeValue}</p>
        <div className="qr-modal-actions">
           <button onClick={downloadQRCode} className="btn-download">Download PNG</button>
           <button onClick={onClose} className="btn-close">Close</button>
        </div>
      </div>
    </div>
  );
};

export default QRModal;