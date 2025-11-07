import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/interfaces";
import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }: { property: Property }) {
  const {
    id,
    title,
    location,
    price,
    imageUrl,
    description,
    bedrooms,
    bathrooms,
    amenities,
  } = property;

  return (
    <div className="container mx-auto p-6">
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          className="h-64 w-full object-cover"
          loading="eager"
        />
        <div className="p-6">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-600">{location}</p>
          <p className="mt-2 text-xl font-semibold">₦{price} / night</p>

          {description && <p className="mt-4 text-gray-700">{description}</p>}

          <div className="mt-4 text-gray-700">
            {bedrooms !== undefined && <p>Bedrooms: {bedrooms}</p>}
            {bathrooms !== undefined && <p>Bathrooms: {bathrooms}</p>}
          </div>

          {amenities && amenities.length > 0 && (
            <div className="mt-4">
              <h2 className="font-semibold">Amenities</h2>
              <ul className="list-disc list-inside text-gray-700">
                {amenities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewSection propertyId={id} />

      {/* Booking Section */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="text-3xl font-bold text-blue-600">₦{price} / night</p>
            <p className="text-gray-600">Book now and secure your stay</p>
          </div>
          <Link
            href={`/booking?propertyId=${id}`}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
