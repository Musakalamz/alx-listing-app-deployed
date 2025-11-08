import type { NextApiRequest, NextApiResponse } from "next";
const PROPERTIES = [
  {
    id: 1,
    title: "Modern Beachfront Villa",
    location: "Lagos, Nigeria",
    price: 350,
    imageUrl: "/assets/List 1.jpg",
    description: "Luxury beachfront villa with private pool and sea view.",
  },
  {
    id: 2,
    title: "Downtown Apartment",
    location: "Abuja, Nigeria",
    price: 120,
    imageUrl: "/assets/List 2.jpg",
    description: "Stylish apartment in the heart of the city.",
  },
  {
    id: 3,
    title: "Cozy Mountain Cabin",
    location: "Jos, Nigeria",
    price: 90,
    imageUrl: "/assets/List 3.jpg",
    description: "Perfect cabin retreat surrounded by nature.",
  },
  { id: 4, title: "City Loft", location: "Port Harcourt, Nigeria", price: 150, imageUrl: "/assets/List 4.jpg", description: "Bright loft with skyline views." },
  { id: 5, title: "Lake House", location: "Lokoja, Nigeria", price: 220, imageUrl: "/assets/List 16.jpg", description: "Peaceful lakefront stay." },
  { id: 6, title: "Country Farm Stay", location: "Abeokuta, Nigeria", price: 80, imageUrl: "/assets/List 6.jpg", description: "Rustic farm experience." },
  { id: 7, title: "Luxury Penthouse", location: "Lagos, Nigeria", price: 500, imageUrl: "/assets/List 7.jpg", description: "Penthouse with private terrace." },
  { id: 8, title: "Island Bungalow", location: "Bonny Island, Nigeria", price: 200, imageUrl: "/assets/List 8.jpg", description: "Beach bungalow steps from water." },
  { id: 9, title: "Ski Chalet", location: "Plateau, Nigeria", price: 180, imageUrl: "/assets/List 9.jpg", description: "Cozy chalet for cool weather." },
  { id: 10, title: "Historic Castle Wing", location: "Benin City, Nigeria", price: 260, imageUrl: "/assets/List 10.jpg", description: "Grand rooms with vintage charm." },
  { id: 11, title: "Desert Retreat", location: "Kano, Nigeria", price: 130, imageUrl: "/assets/List 11.jpg", description: "Minimalist desert-inspired stay." },
  { id: 12, title: "Treehouse Escape", location: "Calabar, Nigeria", price: 170, imageUrl: "/assets/List 12.jpg", description: "Elevated stay among trees." },
  { id: 13, title: "Boat House", location: "Lagos, Nigeria", price: 210, imageUrl: "/assets/List 13.jpg", description: "Waterfront living experience." },
  { id: 14, title: "Countryside Villa", location: "Ibadan, Nigeria", price: 190, imageUrl: "/assets/List 14.jpg", description: "Quiet villa with gardens." },
  { id: 15, title: "Modern Apartment", location: "Abuja, Nigeria", price: 140, imageUrl: "/assets/List 15.jpg", description: "New-build apartment near center." },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const numericId = Number(Array.isArray(id) ? id[0] : id);

  const property = PROPERTIES.find((p) => p.id === numericId);

  if (!property) {
    return res.status(404).json({ error: "Property not found" });
  }

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  return res.status(200).json(property);
}
