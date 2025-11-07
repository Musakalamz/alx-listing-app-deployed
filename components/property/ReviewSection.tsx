import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: number;
  propertyId: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

const ReviewSection = ({ propertyId }: { propertyId: number }) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="text-center py-4">Loading reviews...</p>;
  }

  if (error) {
    return <p className="text-center py-4 text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return (
      <p className="text-center py-4">No reviews yet for this property.</p>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold">{review.userName}</p>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
              <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {review.rating}/5
              </div>
            </div>
            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
