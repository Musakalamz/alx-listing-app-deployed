import type { NextApiRequest, NextApiResponse } from 'next';
import type { Property } from '@/interfaces';

const PROPERTIES = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Lagos, Nigeria",
    price: 350,
    imageUrl: "/assets/List 1.jpg",
    description: "Luxury beachfront villa with private pool and sea view.",
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["WiFi", "Pool", "Kitchen", "Parking", "Air Conditioning", "Ocean View"],
  },
  {
    id: 2,
    title: "Downtown Apartment",
    location: "Abuja, Nigeria",
    price: 120,
    imageUrl: "/assets/List 2.jpg",
    description: "Stylish apartment in the heart of the city.",
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["WiFi", "Kitchen", "Parking", "Gym", "Security", "City View"],
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Jos, Nigeria",
    price: 90,
    imageUrl: "/assets/List 3.jpg",
    description: "Perfect cabin retreat surrounded by nature.",
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["WiFi", "Kitchen", "Parking", "Garden", "Mountain View"],
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const numericId = Number(Array.isArray(id) ? id[0] : id);

  const property = PROPERTIES.find((p) => p.id === numericId);

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  // Add CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return res.status(200).json(property);
}
