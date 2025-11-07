# ALX Listing App - Airbnb Clone

A modern, responsive property listing application built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Property Listings**: Browse and search through available properties
- **Property Details**: Detailed view with images, amenities, and descriptions
- **Booking System**: Complete booking flow with form validation
- **Responsive Design**: Mobile-first approach for all devices
- **Modern UI/UX**: Clean and intuitive interface

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Icons**: Lucide React
- **Deployment**: Vercel (Recommended)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/alx-listing-app-deployed.git
cd alx-listing-app-deployed
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.local.example .env.local
```

4. Update environment variables in `.env.local`:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_API_BASE_URL`: Your production API URL
6. Click "Deploy"

### Environment Variables

Make sure to set these environment variables in your deployment platform:

- `NEXT_PUBLIC_API_BASE_URL`: Your API base URL (required)

## 📁 Project Structure

```
alx-listing-app-deployed/
├── components/          # Reusable UI components
│   ├── booking/       # Booking-related components
│   ├── common/        # Common UI components
│   ├── layout/        # Layout components
│   └── property/      # Property-related components
├── interfaces/        # TypeScript interfaces
├── pages/             # Next.js pages
│   ├── api/          # API routes
│   ├── booking/      # Booking pages
│   └── property/     # Property pages
├── public/           # Static assets
├── styles/           # Global styles
└── constants/        # Application constants
```

## 🔗 API Endpoints

- `GET /api/properties` - Get all properties
- `GET /api/properties/[id]` - Get specific property
- `POST /api/bookings` - Create new booking

## 🎨 Features Implemented

### Property Listings
- Grid layout with responsive design
- Property cards with images, titles, locations, and prices
- "View Details" and "Book Now" buttons

### Property Details Page
- Detailed property information
- Image gallery
- Amenities list
- Booking button
- Reviews section

### Booking System
- Multi-step booking form
- Guest information collection
- Payment information (mock)
- Booking confirmation
- Order summary

### Responsive Design
- Mobile-first approach
- Tablet and desktop optimizations
- Touch-friendly interface

## 🚀 Live Demo

[Add your deployed URL here]

## 📝 License

This project is licensed under the MIT License.

## 🐛 Bug Reports

If you find any bugs, please create an issue in the GitHub repository.

## 💡 Future Enhancements

- User authentication
- Real payment integration
- Property search and filters
- User reviews and ratings
- Property owner dashboard
- Real-time booking availability
- Map integration
- Multi-language support# 🏡 ALX Listing App 00

**Milestone 2: Responsive Property Listing Page**  
_Project: ProDev Frontend – Week 4_

---

## 📖 Project Overview

This project involves building a **responsive property listing page** using **Next.js, TypeScript, and Tailwind CSS**.  
The application displays a collection of luxury properties with filtering capabilities, a hero section, and proper layout organization.  
The design follows **responsive web principles** and maintains a clean, user-friendly interface across all devices.

---

## 🎯 Learning Objectives

By completing this project, you will:

- Implement **responsive web design** with Tailwind CSS.
- Build **reusable React/Next.js components** (Header, Footer, Layout).
- Use **TypeScript interfaces** for type safety.
- Structure a Next.js application with **logical folder hierarchy**.
- Render **dynamic property data** from arrays.
- Implement **filter functionality** for listings.
- Apply **component composition best practices**.
- Break down UI mockups into **scalable, maintainable code**.

---

## 🛠️ Tech Stack

- **Framework:** Next.js (React-based)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Data Management:** Typed arrays & interfaces
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

```bash
alx-listing-app-00/
├── components/
│   └── layout/
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── Layout.tsx
├── constants/
│   └── index.ts          # Sample property listing data
├── interfaces/
│   └── index.ts          # PropertyProps interface
├── pages/
│   ├── _app.tsx          # Root wrapper with Layout
│   └── index.tsx         # Homepage with Hero, Filters, Listings
├── public/
├── styles/
│   └── globals.css
└── README.md


```

---

## 🚀 Features

- **Hero Section**  
  Eye-catching banner with tagline:  
  _“Find your favorite place here! The best prices for over 2 million properties worldwide.”_

- **Filter Section**  
  Interactive filter pills for quick property searches.

- **Property Listings**  
  Grid-based responsive cards with:

  - Property name
  - Location
  - Rating
  - Price
  - Amenities/Offers
  - Image & discount info

- **Reusable Components**
  - `Header`: Navigation, logo, search, sign-in/sign-up
  - `Footer`: Quick links, credits
  - `Layout`: Wrapper for consistent structure

---

## 📌 Requirements Met

- ✅ **Responsive Layouts** (mobile → tablet → desktop)
- ✅ **Functional Filters & Listings**
- ✅ **Typed Property Data Interface**
- ✅ **Reusable Layout Components**
- ✅ **Semantic HTML & Accessibility Standards**

---

## ⚙️ Getting Started

### 1. Clone Repo

```bash
git clone https://github.com/<your-username>/alx-listing-app-00.git
cd alx-listing-app-00
```
