export const mockProducts = [
  {
    verificationId: "verify-123",
    productId: "prod-tmt-456",
    qrValue: "farmchainx-prod-d5e8b0c9", // Correct QR value
    scanTimestamp: "2025-09-17T19:30:00Z",
    customerLocation: { lat: 37.7749, lng: -122.4194 },
    verificationStatus: "verified",
    productData: {
      name: "Organic Roma Tomatoes",
      variety: "Roma",
      batchNumber: "BATCH-2025-TMT-001",
      images: [
        "src/assets/Organic Roma Tomatoes.png",
        "https://images.unsplash.com/photo-1561138241-de3261ad5f22?auto=format&fit=crop&q=80&w=400",
      ],
      dates: {
        planted: "2025-06-01",
        harvested: "2025-08-15",
        packaged: "2025-08-16",
        expiry: "2025-09-25"
      },
      location: {
        farm: "Green Valley Organic Farm",
        address: "123 Farm Road, Nashik, Maharashtra",
      },
      farmer: {
        id: "user-farmer-1",
        name: "John Smith",
        photo: "https://i.pravatar.cc/150?u=farmer@demo.com",
        certifications: ["USDA Organic", "Non-GMO"],
      },
      nutritionalInfo: {
        calories: 18,
        vitamins: ["Vitamin C", "Vitamin K"],
        minerals: ["Potassium", "Folate"],
        allergens: []
      },
    },
    supplyChain: [
      {
        stage: "Farm Origin",
        location: "Green Valley Farm",
        date: "2025-06-01",
        responsible: "John Smith",
        qualityCheck: { status: "passed", score: 95 },
        photos: ["https://images.unsplash.com/photo-1491841550275-5b462bf9f505?auto=format&fit=crop&q=80&w=400"],
      },
      {
        stage: "Harvest",
        location: "Green Valley Farm",
        date: "2025-08-15",
        responsible: "Harvest Team",
        qualityCheck: { status: "passed", score: 98 },
        photos: ["https://images.unsplash.com/photo-1620188463122-6a38b919183d?auto=format&fit=crop&q=80&w=400"],
      },
      {
        stage: "Distribution",
        location: "FreshLink Warehouse",
        date: "2025-08-17",
        responsible: "Sarah Chen (Dealer)",
        qualityCheck: { status: "passed", score: 97 },
        photos: ["https://images.unsplash.com/photo-1587049352851-4a2e7c45e42e?auto=format&fit=crop&q=80&w=400"],
      },
       {
        stage: "Retail",
        location: "The Organic Market",
        date: "2025-08-18",
        responsible: "Michael Brown (Retailer)",
        qualityCheck: { status: "passed", score: 99 },
        photos: ["https://images.unsplash.com/photo-1583258292688-d0213dc5a3a8?auto=format&fit=crop&q=80&w=400"],
      }
    ],
    blockchain: {
      hash: "0x123abc456def7890abcdef1234567890abcdef1234567890abcdef1234567890",
      blockNumber: 12345,
      timestamp: "2025-08-16T14:30:00Z",
      verified: true
    },
  }
];