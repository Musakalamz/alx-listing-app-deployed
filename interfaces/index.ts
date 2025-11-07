// interfaces/index.ts

/**
 * Defines the props for the reusable Card component.
 * Extend this interface as the project grows.
 */
export interface CardProps {
  id: string; // Unique identifier for the card (property id)
  title: string; // Property title (e.g., "Cozy Apartment in Lagos")
  description: string; // Short description of the property
  imageUrl: string; // URL for the property image
  price?: number; // Optional price per night
  location?: string; // Optional location (e.g., "Lagos, Nigeria")
}

/**
 * Defines the props for the reusable Button component.
 * Extend this interface to handle variants, sizes, etc.
 */
export interface ButtonProps {
  label: string; // Text shown on the button
  onClick?: () => void; // Optional click handler
  type?: "button" | "submit" | "reset"; // Button type
  disabled?: boolean; // Disable state
}

/**
 * Defines the structure for property data
 */
export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  amenities?: string[];
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}

/**
 * Defines the props for the Pill component used in filters
 */
export interface PillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  variant?: "default" | "active";
}
