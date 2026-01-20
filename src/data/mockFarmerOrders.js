export const mockFarmerOrders = [
  {
    orderId: 'ORD-2025-09-A4B1',
    customerName: 'FreshLink Distributors',
    customerType: 'Dealer',
    orderDate: '2025-09-14',
    items: [
      { productName: 'Heirloom Tomatoes', quantity: 50, pricePerUnit: 200 }, // Price in INR
      { productName: 'Sweet Corn', quantity: 100, pricePerUnit: 65 },       // Price in INR
    ],
    totalAmount: 16500.00, // Total in INR
    status: 'Pending', 
    paymentStatus: 'Pending',
  },
  {
    orderId: 'ORD-2025-09-C3D2',
    customerName: 'The Organic Market',
    customerType: 'Retailer',
    orderDate: '2025-09-12',
    items: [
      { productName: 'Romaine Lettuce', quantity: 75, pricePerUnit: 100 }, // Price in INR
    ],
    totalAmount: 7500.00, // Total in INR
    status: 'Shipped',
    paymentStatus: 'Paid',
  },
  {
    orderId: 'ORD-2025-09-E5F6',
    customerName: 'FreshLink Distributors',
    customerType: 'Dealer',
    orderDate: '2025-09-10',
    items: [
      { productName: 'Red Bell Peppers', quantity: 80, pricePerUnit: 120 }, // Price in INR
    ],
    totalAmount: 9600.00, // Total in INR
    status: 'Delivered',
    paymentStatus: 'Paid',
  },
  {
    orderId: 'ORD-2025-08-G7H8',
    customerName: 'Grocer Direct',
    customerType: 'Retailer',
    orderDate: '2025-08-28',
    items: [
      { productName: 'Heirloom Tomatoes', quantity: 30, pricePerUnit: 200 }, // Price in INR
    ],
    totalAmount: 6000.00, // Total in INR
    status: 'Processing',
    paymentStatus: 'Paid',
  },
    {
    orderId: 'ORD-2025-08-I9J0',
    customerName: 'The Organic Market',
    customerType: 'Retailer',
    orderDate: '2025-08-25',
    items: [
      { productName: 'Sweet Corn', quantity: 120, pricePerUnit: 65 }, // Price in INR
    ],
    totalAmount: 7800.00, // Total in INR
    status: 'Cancelled',
    paymentStatus: 'Refunded',
  },
];