// NOTE: In a real application, passwords would be hashed and not stored in plain text.
// This is for demonstration purposes only.

export const mockUsers = [
  {
    id: "user-farmer-1",
    email: "farmer@demo.com",
    password: "password123",
    role: "farmer",
    name: "John Smith",
    avatar: "https://i.pravatar.cc/150?u=farmer@demo.com",
    isVerified: true,
    createdAt: "2024-01-15T10:00:00Z",
    lastLogin: "2025-09-12T08:30:00Z",
    profileData: {
      farmName: "Green Valley Organic Farm",
      location: {
        address: "123 Farm Road, Salinas, CA 93901",
        coordinates: { lat: 36.6777, lng: -121.6555 },
        region: "Central California"
      },
      certifications: ["USDA Organic", "Non-GMO Project", "Fair Trade"],
      cropTypes: ["Tomatoes", "Lettuce", "Carrots", "Broccoli"],
      farmSize: "150 acres",
      yearsInBusiness: 12,
    },
  },
  {
    id: "user-dealer-1",
    email: "dealer@demo.com",
    password: "password123",
    role: "dealer",
    name: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=dealer@demo.com",
    isVerified: true,
    createdAt: "2024-02-20T11:00:00Z",
    lastLogin: "2025-09-12T09:00:00Z",
    profileData: {
      companyName: "FreshLink Distributors",
      warehouseLocation: "456 Distribution Way, Fresno, CA 93725",
      specialties: ["Organic Produce", "Root Vegetables"],
      partnerFarms: 35,
    },
  },
  {
    id: "user-retailer-1",
    email: "retailer@demo.com",
    password: "password123",
    role: "retailer",
    name: "Michael Brown",
    avatar: "https://i.pravatar.cc/150?u=retailer@demo.com",
    isVerified: true,
    createdAt: "2024-03-10T09:30:00Z",
    lastLogin: "2025-09-12T09:15:00Z",
    profileData: {
      storeName: "The Organic Market",
      storeAddress: "789 Market St, San Francisco, CA 94102",
      storeType: "Specialty Grocery",
      customerBase: "Urban Health-Conscious",
    },
  },
  {
    id: "user-customer-1",
    email: "customer@demo.com",
    password: "password123",
    role: "customer",
    name: "Emily White",
    avatar: "https://i.pravatar.cc/150?u=customer@demo.com",
    isVerified: true,
    createdAt: "2024-05-01T15:00:00Z",
    lastLogin: "2025-09-12T09:20:00Z",
    profileData: {
      address: "101 City View Apt, San Francisco, CA 94103",
      preferences: ["Organic", "Local Produce", "Vegan"],
      loyaltyPoints: 1250,
    },
  },
  {
    id: "user-admin-1",
    email: "admin@demo.com",
    password: "password123",
    role: "admin",
    name: "Admin User",
    avatar: "https://i.pravatar.cc/150?u=admin@demo.com",
    isVerified: true,
    createdAt: "2024-01-01T00:00:00Z",
    lastLogin: "2025-09-12T09:25:00Z",
    profileData: {
      permissions: ["Full Access"],
      department: "Platform Operations",
    },
  }
];