import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const properties = [
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
  ];

  res.status(200).json(properties);
}
