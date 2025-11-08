export interface Property {
  id: number;
  title: string;
  location: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const PROPERTIES: Property[] = [
  {
    id: 1,
    title: "Cozy Downtown Apartment",
    location: "New York, NY",
    price: 120,
    imageUrl: "/images/properties/apt-1.jpg",
    description: "A cozy apartment in the heart of the city.",
  },
  {
    id: 2,
    title: "Beachfront Condo",
    location: "Miami, FL",
    price: 200,
    imageUrl: "/images/properties/condo-2.jpg",
    description: "Wake up to ocean views in this modern condo.",
  },
  {
    id: 3,
    title: "Mountain Cabin Retreat",
    location: "Aspen, CO",
    price: 180,
    imageUrl: "/images/properties/cabin-3.jpg",
    description: "Rustic cabin with stunning mountain views.",
  },
];