import React, { useEffect, useRef, useState } from 'react';
import { Html5Qrcode } from 'html5-qrcode';
import './QRScanner.css';

const QRScanner = ({ onScanSuccess }) => {
  const [isScanning, setIsScanning] = useState(false);
  const scannerRef = useRef(null); 
  const fileInputRef = useRef(null);

  // This wrapper function adds a log before passing the result to the parent
  const handleSuccess = (decodedText) => {
    console.log("SUCCESS: QR Code detected by library:", decodedText);
    onScanSuccess(decodedText);
  };

  const handleError = (errorMessage) => {
    // This function is for scanner errors, not a failed detection.
  };

  useEffect(() => {
    console.log("DEBUG: QRScanner component has mounted.");
    scannerRef.current = new Html5Qrcode('qr-reader');
    
    return () => {
      if (scannerRef.current && scannerRef.current.isScanning) {
        scannerRef.current.stop().catch(error => {
          console.error("DEBUG: Failed to stop scanner on unmount.", error);
        });
      }
    };
  }, []);

  const handleStartScan = () => {
    console.log("DEBUG: 'Start Camera' button clicked.");
    const config = { 
      fps: 10, 
      qrbox: { width: 250, height: 250 },
    };
    
    scannerRef.current.start(
      { facingMode: "environment" },
      config,
      handleSuccess,
      handleError
    ).then(() => {
      console.log("DEBUG: Camera started successfully.");
      setIsScanning(true);
    }).catch(err => {
      console.error("DEBUG: Unable to start camera.", err);
      alert("Could not start camera. Please grant camera permissions in your browser settings.");
    });
  };

  const handleStopScan = () => {
    console.log("DEBUG: 'Stop Camera' button clicked.");
    scannerRef.current.stop().then(() => {
      console.log("DEBUG: Camera stopped successfully.");
      setIsScanning(false);
    }).catch(err => {
      console.error("DEBUG: Failed to stop camera.", err);
    });
  };

  const handleFileScan = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    console.log("DEBUG: File selected for scanning:", file.name);
    scannerRef.current.scanFile(file, true)
    .then(handleSuccess)
    .catch(err => {
      console.error("DEBUG: Error scanning file.", err);
      alert(`Error scanning file. Please ensure the image contains a clear QR code.`);
    });
  };

  return (
    <div className="qr-scanner-wrapper">
      <div id="qr-reader" className={isScanning ? 'scanning-active' : ''}></div>
      <div className="scanner-controls">
        <button onClick={handleStartScan} disabled={isScanning} className="btn-start">
          Start Camera
        </button>
        <button onClick={handleStopScan} disabled={!isScanning} className="btn-stop">
          Stop Camera
        </button>
        <input 
          type="file" 
          ref={fileInputRef} 
          onChange={handleFileScan} 
          accept="image/*" 
          style={{ display: 'none' }} 
        />
        <button 
          onClick={() => fileInputRef.current.click()} 
          disabled={isScanning}
          className="btn-upload"
        >
          Upload QR
        </button>
      </div>
    </div>
  );
};

export default QRScanner;