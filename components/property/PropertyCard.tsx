import Link from "next/link";
import Image from "next/image";
import type { Property } from "@/interfaces";

export default function PropertyCard({ property }: { property: Property }) {
  const { id, title, location, price, imageUrl } = property;

  return (
      <div className="bg-white shadow rounded-lg overflow-hidden">
          <Image
              src={imageUrl}
              alt={title}
              width={400}
              height={200}
              className="h-48 w-full object-cover"
              loading="lazy"
          />
          <div className="p-4">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-gray-600">{location}</p>
              <p className="mt-2 font-medium">₦{price} / night</p>
              <div className="flex gap-2 mt-4">
                  <Link
                      href={`/property/${id}`}
                      className="inline-block text-blue-600 hover:underline"
                  >
                      View details
                  </Link>
                  {/* Book Now removed */}
              </div>
          </div>
      </div>
  );
}
