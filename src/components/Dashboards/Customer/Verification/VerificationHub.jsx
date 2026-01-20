// src/components/Verification/VerificationHub.jsx
import { useState } from "react";
import { verifyCrop } from "../../services/cropApi";

export default function VerificationHub() {
  const [cropId, setCropId] = useState("");
  const [data, setData] = useState(null);

  const handleVerify = async () => {
    const res = await verifyCrop(cropId);
    setData(res);
  };

  return (
    <div>
      <h2>Verify Crop (Blockchain)</h2>

      <input
        placeholder="Enter Crop ID"
        value={cropId}
        onChange={(e) => setCropId(e.target.value)}
      />
      <button onClick={handleVerify}>Verify</button>

      {data && (
        <div className="card">
          <p><b>Origin (Farmer ID):</b> {data.farmerId}</p>
          <p><b>Harvest Date:</b> {data.harvestDate}</p>
          <p><b>Quality:</b> {data.qualityCertificate}</p>
          <p><b>Blockchain Hash:</b> {data.blockchainHash}</p>
        </div>
      )}
    </div>
  );
}

