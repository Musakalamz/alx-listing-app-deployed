"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface BookingFormProps {
  propertyId: string;
  propertyPrice: number;
}

const BookingForm: React.FC<BookingFormProps> = ({
  propertyId,
  propertyPrice,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (checkIn && checkOut) {
      const startDate = new Date(checkIn);
      const endDate = new Date(checkOut);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const nightsCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      if (nightsCount > 0) {
        setNights(nightsCount);
        setTotalPrice(nightsCount * propertyPrice);
      } else {
        setNights(0);
        setTotalPrice(0);
      }
    }
  }, [checkIn, checkOut, propertyPrice]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!firstName || !lastName || !email || !phone || !checkIn || !checkOut || !guests) {
      setError("Please fill in all fields.");
      return;
    }

    const bookingDetails = {
      firstName,
      lastName,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      propertyId,
      totalPrice,
    };

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingDetails),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        const data = await res.json();
        setError(data.message || "An error occurred during booking.");
      }
    } catch (err) {
      setError("An unexpected error occurred.");
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Book this Property</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.targe.value)}
            className="p-2 border rounded"
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="p-2 border rounded"
          />
          <input
            type="number"
            min="1"
            placeholder="Guests"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}
            className="p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <p>Number of nights: {nights}</p>
          <p className="font-bold text-lg">Total Price: ${totalPrice}</p>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && (
          <p className="text-green-500 mb-4">
            Booking successful!
          </p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;