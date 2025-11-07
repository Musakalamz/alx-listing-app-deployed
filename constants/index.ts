// constants/index.ts

import { PropertyProps } from "../interfaces";

/**
 * Centralized constants for reusability across the project.
 * Store API URLs, configuration values, and static UI strings here.
 */

// Example API endpoints
export const API_BASE_URL = "https://api.alx-listing-app.com";
export const LISTINGS_ENDPOINT = `${API_BASE_URL}/listings`;

// UI Strings
export const APP_NAME = "ALX Listing App";
export const DEFAULT_BUTTON_TEXT = "Click Me";
export const PLACEHOLDER_IMAGE = "/assets/placeholder.jpg";

// Configurations
export const ITEMS_PER_PAGE = 10;

// Filter Options for Property Categories
export const FILTER_OPTIONS = [
  "Pool",
  "Free Parking",
  "Luxury Villa",
  "Beachfront",
  "Ocean View",
  "Private Pool",
  "Self Checkin",
  "Chef Service",
  "Mountain View",
  "City Center",
  "Pet Friendly",
  "Wifi",
  "Kitchen",
  "Air Conditioning",
];

// Hero Section Background Images - Responsive
export const HERO_BACKGROUND_IMAGE = "/assets/Image 1.jpg"; // Desktop version
export const HERO_BACKGROUND_IMAGE_MOBILE = "/assets/Image 1 mobile.jpg"; // Mobile version

// Property Listings Sample Data
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: {
      state: "Seminyak",
      city: "Bali",
      country: "Indonesia",
    },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/List 1.jpg",
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: {
      state: "Aspen",
      city: "Colorado",
      country: "USA",
    },
    rating: 4.7,
    category: ["Mountain View", "Luxury Villa", "Free Parking"],
    price: 2800,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/List 2.jpg",
    discount: "15",
  },
  {
    name: "Downtown Modern Loft",
    address: {
      state: "Manhattan",
      city: "New York",
      country: "USA",
    },
    rating: 4.6,
    category: ["City Center", "Wifi", "Air Conditioning"],
    price: 1800,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/List 3.jpg",
    discount: "",
  },
  {
    name: "Beachfront Paradise",
    address: {
      state: "Malibu",
      city: "California",
      country: "USA",
    },
    rating: 4.95,
    category: ["Beachfront", "Ocean View", "Private Pool"],
    price: 4500,
    offers: {
      bed: "5",
      shower: "4",
      occupants: "8-10",
    },
    image: "/assets/List 4.jpg",
    discount: "20",
  },
  {
    name: "Cozy Countryside Cottage",
    address: {
      state: "Tuscany",
      city: "Florence",
      country: "Italy",
    },
    rating: 4.8,
    category: ["Pet Friendly", "Kitchen", "Free Parking"],
    price: 1200,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-3",
    },
    image: "/assets/List 6.jpg",
    discount: "",
  },
  {
    name: "Urban Penthouse Suite",
    address: {
      state: "London",
      city: "Westminster",
      country: "UK",
    },
    rating: 4.75,
    category: ["City Center", "Luxury Villa", "Air Conditioning"],
    price: 3500,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-6",
    },
    image: "/assets/List 7.jpg",
    discount: "10",
  },
  {
    name: "Tropical Island Resort",
    address: {
      state: "Phuket",
      city: "Patong",
      country: "Thailand",
    },
    rating: 4.92,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 2200,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/List 8.jpg",
    discount: "25",
  },
  {
    name: "Alpine Ski Lodge",
    address: {
      state: "Zermatt",
      city: "Valais",
      country: "Switzerland",
    },
    rating: 4.85,
    category: ["Mountain View", "Self Checkin", "Kitchen"],
    price: 3800,
    offers: {
      bed: "6",
      shower: "4",
      occupants: "10-12",
    },
    image: "/assets/List 9.jpg",
    discount: "",
  },
  {
    name: "Historic City Apartment",
    address: {
      state: "Prague",
      city: "Old Town",
      country: "Czech Republic",
    },
    rating: 4.65,
    category: ["City Center", "Wifi", "Self Checkin"],
    price: 950,
    offers: {
      bed: "1",
      shower: "1",
      occupants: "1-2",
    },
    image: "/assets/List 10.jpg",
    discount: "",
  },
  {
    name: "Desert Oasis Villa",
    address: {
      state: "Dubai",
      city: "Palm Jumeirah",
      country: "UAE",
    },
    rating: 4.88,
    category: ["Luxury Villa", "Private Pool", "Air Conditioning"],
    price: 5200,
    offers: {
      bed: "7",
      shower: "6",
      occupants: "12-14",
    },
    image: "/assets/List 11.jpg",
    discount: "30",
  },
  {
    name: "Lakeside Cabin Retreat",
    address: {
      state: "Ontario",
      city: "Muskoka",
      country: "Canada",
    },
    rating: 4.72,
    category: ["Pet Friendly", "Kitchen", "Free Parking"],
    price: 1600,
    offers: {
      bed: "3",
      shower: "2",
      occupants: "4-6",
    },
    image: "/assets/List 12.jpg",
    discount: "",
  },
  {
    name: "Rainforest Eco Lodge",
    address: {
      state: "Queensland",
      city: "Cairns",
      country: "Australia",
    },
    rating: 4.9,
    category: ["Mountain View", "Self Checkin", "Pet Friendly"],
    price: 1900,
    offers: {
      bed: "2",
      shower: "2",
      occupants: "2-4",
    },
    image: "/assets/List 13.jpg",
    discount: "12",
  },
  {
    name: "Mediterranean Villa",
    address: {
      state: "Santorini",
      city: "Oia",
      country: "Greece",
    },
    rating: 4.96,
    category: ["Ocean View", "Private Pool", "Luxury Villa"],
    price: 4200,
    offers: {
      bed: "4",
      shower: "4",
      occupants: "6-8",
    },
    image: "/assets/List 14.jpg",
    discount: "18",
  },
  {
    name: "Safari Lodge Experience",
    address: {
      state: "Kruger",
      city: "Mpumalanga",
      country: "South Africa",
    },
    rating: 4.83,
    category: ["Self Checkin", "Chef Service", "Free Parking"],
    price: 2600,
    offers: {
      bed: "4",
      shower: "3",
      occupants: "6-8",
    },
    image: "/assets/List 15.jpg",
    discount: "",
  },
  {
    name: "Northern Lights Cabin",
    address: {
      state: "Lapland",
      city: "Rovaniemi",
      country: "Finland",
    },
    rating: 4.91,
    category: ["Mountain View", "Kitchen", "Self Checkin"],
    price: 2100,
    offers: {
      bed: "2",
      shower: "1",
      occupants: "2-4",
    },
    image: "/assets/List 16.jpg",
    discount: "22",
  },
  {
    name: "Vineyard Estate Manor",
    address: {
      state: "Bordeaux",
      city: "Gironde",
      country: "France",
    },
    rating: 4.87,
    category: ["Luxury Villa", "Chef Service", "Free Parking"],
    price: 3900,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/image 11.jpg",
    discount: "",
  },
  {
    name: "Cliffside Ocean Retreat",
    address: {
      state: "Big Sur",
      city: "California",
      country: "USA",
    },
    rating: 4.94,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 5800,
    offers: {
      bed: "6",
      shower: "5",
      occupants: "10-12",
    },
    image: "/assets/image 12.jpg",
    discount: "35",
  },
  {
    name: "Island Paradise Villa",
    address: {
      state: "Mahe",
      city: "Victoria",
      country: "Seychelles",
    },
    rating: 4.98,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 6500,
    offers: {
      bed: "5",
      shower: "5",
      occupants: "8-10",
    },
    image: "/assets/image 17.jpg",
    discount: "60",
  },
  {
    name: "Clifftop Retreat",
    address: {
      state: "Cape Town",
      city: "Western Cape",
      country: "South Africa",
    },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: {
      bed: "3",
      shower: "3",
      occupants: "4-5",
    },
    image: "/assets/image 18.jpg",
    discount: "",
  },
];
