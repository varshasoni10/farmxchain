import { v4 as uuidv4 } from 'uuid';

export const mockFarmerProducts = [
  {
    id: uuidv4(),
    name: 'Organic Roma Tomatoes', // CHANGED from 'Heirloom Tomatoes'
    cropType: 'Tomato',
    plantedDate: '2025-05-15',
    harvestedDate: '2025-08-20',
    expiryDate: '2025-09-05',
    description: 'Juicy and flavorful Organic Roma tomatoes, grown with organic practices.', // Updated description
    location: 'Field A1',
    fertilizer: 'Organic Compost',
    image: 'src/assets/Organic Roma Tomatoes.png',
    qrCodeValue: `farmchainx-prod-d5e8b0c9` // Example static QR value
  },
  {
    id: uuidv4(),
    name: 'Sweet Corn',
    cropType: 'Corn',
    plantedDate: '2025-06-01',
    harvestedDate: '2025-09-10',
    expiryDate: '2025-09-25',
    description: 'Non-GMO sweet corn, perfect for grilling and boiling.',
    location: 'Field B3',
    fertilizer: 'Nitrogen-Rich Blend',
    image: 'src/assets/Sweet Corn.png',
    qrCodeValue: `farmchainx-prod-a1b2c3d4`
  },
  {
    id: uuidv4(),
    name: 'Romaine Lettuce',
    cropType: 'Lettuce',
    plantedDate: '2025-07-20',
    harvestedDate: '2025-09-01',
    expiryDate: '2025-09-12',
    description: 'Crisp and fresh Romaine lettuce heads.',
    location: 'Greenhouse 2',
    fertilizer: 'Hydroponic Nutrients',
    image: 'src/assets/Romaine Lettuce.png',
    qrCodeValue: `farmchainx-prod-e5f6g7h8`
  },
    {
    id: uuidv4(),
    name: 'Red Bell Peppers',
    cropType: 'Pepper',
    plantedDate: '2025-06-10',
    harvestedDate: '2025-09-05',
    expiryDate: '2025-09-20',
    description: 'Sweet and crunchy red bell peppers.',
    location: 'Field C2',
    fertilizer: 'Organic Compost',
    image: 'src/assets/Red Bell Peppers.png',
    qrCodeValue: `farmchainx-prod-i9j0k1l2`
  },
];