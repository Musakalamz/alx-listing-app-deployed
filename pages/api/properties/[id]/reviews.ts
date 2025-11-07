import type { NextApiRequest, NextApiResponse } from "next";

// Mock reviews data
const REVIEWS = {
  1: [
    {
      id: 101,
      propertyId: 1,
      userName: "John Doe",
      rating: 5,
      comment:
        "Amazing beachfront villa with stunning views. The private pool was perfect!",
      date: "2024-07-15",
    },
    {
      id: 102,
      propertyId: 1,
      userName: "Sarah Johnson",
      rating: 4,
      comment:
        "Beautiful property, very clean and well maintained. Just a short walk to the beach.",
      date: "2024-06-22",
    },
  ],
  2: [
    {
      id: 201,
      propertyId: 2,
      userName: "Michael Brown",
      rating: 5,
      comment:
        "Perfect location in the heart of the city. Walking distance to all major attractions.",
      date: "2024-07-05",
    },
  ],
  3: [
    {
      id: 301,
      propertyId: 3,
      userName: "Emma Wilson",
      rating: 5,
      comment:
        "The cabin was so cozy and peaceful. Loved the fireplace and surrounding nature.",
      date: "2024-07-10",
    },
    {
      id: 302,
      propertyId: 3,
      userName: "David Miller",
      rating: 4,
      comment:
        "Great retreat from the city. The hiking trails nearby were fantastic.",
      date: "2024-06-18",
    },
    {
      id: 303,
      propertyId: 3,
      userName: "Lisa Taylor",
      rating: 4,
      comment:
        "Comfortable cabin with all the amenities we needed. Would visit again!",
      date: "2024-05-30",
    },
  ],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { id } = req.query;
  const propertyId = Array.isArray(id) ? id[0] : id;

  // Convert to number for object key lookup
  const numericId = Number(propertyId);

  // Return the reviews for the property or an empty array if none exist
  const propertyReviews = REVIEWS[numericId as keyof typeof REVIEWS] || [];

  return res.status(200).json(propertyReviews);
}
