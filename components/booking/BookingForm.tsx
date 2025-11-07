import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import type { Property } from "@/interfaces";

export default function BookingForm({ property }: { property: Property }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    try {
      const res = await axios.post("/api/bookings", {
        propertyId: property.id,
        name,
        email,
      });

      const confirmationId = res.data?.id || res.data?.confirmationId;
      if (confirmationId) {
        router.push(`/booking?confirmationId=${encodeURIComponent(confirmationId)}`);
      } else {
        router.push(`/booking?propertyId=${encodeURIComponent(property.id)}`);
      }
    } catch (_err) {
      setError("Failed to submit booking. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Book {property.title}</h2>

      {error && <p className="text-red-600 mb-2">{error}</p>}

      <label className="block mb-2">
        <span className="text-gray-700">Name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
          required
        />
      </label>

      <label className="block mb-4">
        <span className="text-gray-700">Email</span>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border rounded px-3 py-2"
          required
        />
      </label>

      <button
        type="submit"
        disabled={submitting}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {submitting ? "Submitting..." : "Confirm Booking"}
      </button>
    </form>
  );
}