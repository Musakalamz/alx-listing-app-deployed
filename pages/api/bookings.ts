import type { NextApiRequest, NextApiResponse } from 'next';

interface BookingRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  specialRequests?: string;
  propertyId: string;
  propertyTitle: string;
  propertyLocation: string;
  propertyPrice: number;
}

interface BookingResponse {
  success: boolean;
  bookingId?: string;
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BookingResponse>
) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const bookingData: BookingRequest = req.body;

      // Validate required fields
      if (
        !bookingData.firstName ||
        !bookingData.lastName ||
        !bookingData.email ||
        !bookingData.phone ||
        !bookingData.checkIn ||
        !bookingData.checkOut ||
        !bookingData.guests ||
        !bookingData.propertyId
      ) {
        return res.status(400).json({
          success: false,
          message: 'Missing required fields',
        });
      }

      // Generate booking ID
      const bookingId = 'BK' + Date.now().toString().slice(-8);

      // Persist booking here (DB or external service)
      console.log('Booking created:', { bookingId, ...bookingData });

      return res.status(201).json({
        success: true,
        bookingId,
        message: 'Booking created successfully',
      });
    } catch (error) {
      console.error('Booking error:', error);
      return res.status(500).json({
        success: false,
        message: 'Internal server error',
      });
    }
  }

  return res.status(405).json({
    success: false,
    message: 'Method not allowed',
  });
}
