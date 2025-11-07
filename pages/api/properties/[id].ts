import type { NextApiRequest, NextApiResponse } from "next";
import { PROPERTIES } from "../../data/properties";

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
