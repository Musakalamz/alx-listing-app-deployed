import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";

import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import type { Property } from "@/interfaces";

export default function BookingPage() {
  const router = useRouter();
  const { propertyId, confirmationId } = router.query as {
    propertyId?: string;
    confirmationId?: string;
  };

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (propertyId) {
      setLoading(true);
      axios
        .get(`/api/properties/${propertyId}`)
        .then((res) => setProperty(res.data))
        .catch(() => setError("Failed to load property details"))
        .finally(() => setLoading(false));
    }
  }, [propertyId]);

  const bookingDetails = property
    ? {
        propertyName: property.title,
        price: property.price,
        bookingFee: 65,
        totalNights: 1,
        startDate: new Date().toLocaleDateString(),
        imageUrl: property.imageUrl,
      }
    : null;

  if (confirmationId) {
    return (
      <div className="container mx-auto p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <div className="text-center">
            <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
              <svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Booking Confirmed!</h1>
            <p className="text-lg text-gray-600 mb-6">Your reservation has been successfully confirmed.</p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-sm text-blue-800">
                <strong>Booking Reference:</strong> {confirmationId}
              </p>
            </div>
            <a href="/" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Browse More Properties
            </a>
          </div>
        </div>
      </div>
    );
  }

  const Skeleton = () => (
    <div className="animate-pulse">
      <div className="h-6 bg-gray-200 rounded w-1/3 mb-4" />
      <div className="h-48 bg-gray-200 rounded mb-4" />
      <div className="h-6 bg-gray-200 rounded w-2/3 mb-2" />
      <div className="h-6 bg-gray-200 rounded w-1/2" />
    </div>
  );

  return (
    <div className="container mx-auto p-6">
      {loading && <Skeleton />}
      {error && <p className="text-red-600">{error}</p>}
      <div className="grid grid-cols-2 gap-6">
        <div>
          {property ? <BookingForm property={property} /> : <Skeleton />}
          {/* Inline CancellationPolicy component */}
          <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Cancellation policy</h2>
            <p className="mt-2 text-gray-600">
              Free cancellation before Aug 23. Cancel before check-in on Aug 24 for a partial refund.
            </p>
            <h2 className="text-xl font-semibold mt-6">Ground Rules</h2>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>Follow the house rules</li>
              <li>Treat your Host's home like your own</li>
            </ul>
          </div>
        </div>
        {bookingDetails && <OrderSummary bookingDetails={bookingDetails} />}
      </div>
    </div>
  );
}
