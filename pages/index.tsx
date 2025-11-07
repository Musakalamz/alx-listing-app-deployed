import axios from "axios";
import { useEffect, useState } from "react";
import PropertyCard from "@/components/property/PropertyCard";
import type { Property } from "@/interfaces";

export default function Home() {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get<Property[]>('/api/properties');
        setProperties(response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperties();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 animate-pulse">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="bg-white shadow rounded-lg overflow-hidden">
            <div className="h-48 bg-gray-200" />
            <div className="p-4">
              <div className="h-4 bg-gray-200 w-2/3 mb-2" />
              <div className="h-4 bg-gray-200 w-1/2 mb-2" />
              <div className="h-4 bg-gray-200 w-1/3" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {properties.slice(0, 9).map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

