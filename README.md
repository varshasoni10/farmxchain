# FarmChainX - Complete Agricultural Traceability System

This is a complete frontend-only React + Vite application for the FarmChainX agricultural traceability system. It features 5 role-based dashboards, a complete authentication system with protected routes, and an integrated Product Verification Portal within the Customer Dashboard for QR code scanning and supply chain visualization.

The entire application runs client-side using React Context for state management and `localStorage` for data persistence.

## 🌟 Key Features

-   **5 Role-Based Dashboards**: Unique, themed dashboards for Farmer, Dealer, Retailer, Customer, and Admin.
-   **Protected Routes**: Secure authentication and authorization system ensuring users can only access their designated dashboards.
-   **Product Verification Portal**: An integrated hub for customers to scan QR codes using their device camera and view a product's entire farm-to-table journey. 
-   **QR Code Lifecycle**: Farmers can generate unique QR codes for product batches, which are then used for verification.
-   **Interactive Analytics**: Dashboards feature interactive charts from `recharts` to visualize data.
-   **Comprehensive Mock Data**: A rich, interconnected dataset simulates realistic interactions between all roles in the supply chain.
-   **Responsive & Themed UI**: The application is fully responsive and features a unique color theme for each user role.

## 🛠️ Technical Stack

-   **Framework**: React 18+ & Vite
-   **Routing**: React Router DOM v6
-   **State Management**: React Context API
-   **Charts/Analytics**: `recharts`
-   **QR Code Generation**: `react-qr-code`
-   **QR Code Scanning**: `html5-qrcode`

## 🚀 Getting Started

Follow these steps to get the application running on your local machine.

### 1. Create Project Structure

First, create the complete folder and file structure as outlined in the provided code.

### 2. Populate Files

Copy the code from each section below into its corresponding file.

### 3. Install Dependencies

Install the required node modules using npm. Make sure you are in the project's root directory.

```bash
npm install
```

### 4. Run the Development Server

Start the Vite development server. The application will be available at `http://localhost:5173` by default.

```bash
npm run dev
```

The application is now running! You can log in with one of the pre-configured demo accounts to explore the different role-based dashboards.

## 🔑 Demo Accounts

Use these accounts to test the different roles.
**Password for all accounts:** `password123`

-   **Farmer**: `farmer@demo.com`
-   **Dealer**: `dealer@demo.com`
-   **Retailer**: `retailer@demo.com`
-   **Customer**: `customer@demo.com`
-   **Admin**: `admin@demo.com`

---