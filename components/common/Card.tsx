import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({
  id,
  title,
  description,
  imageUrl,
  price,
  location,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
      {/* Image Section */}
      <div className="relative h-48">
        <Image src={imageUrl} alt={title} fill className="object-cover" />

        {/* Top Villa Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
            Top Villa
          </span>
        </div>

        {/* Heart Icon */}
        <div className="absolute top-3 right-3">
          <button
            className="bg-white bg-opacity-80 hover:bg-opacity-100 p-2 rounded-full transition-all"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Handle favorite functionality here
            }}
          >
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Overlay with Tags */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3">
          <div className="flex gap-2">
            <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
              Self Check-in
            </span>
            <span className="bg-white bg-opacity-90 text-gray-800 text-xs font-medium px-2 py-1 rounded-md">
              Free Reschedule
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 bg-black text-white">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-white text-base leading-tight flex-1 mr-2">
            {title}
          </h3>
          <div className="flex items-center">
            <svg
              className="w-4 h-4 text-yellow-400 mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm text-white font-medium">4.76</span>
          </div>
        </div>

        {/* Location */}
        <p className="text-gray-300 text-sm mb-3">{description}</p>

        {/* Property Details */}
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-6a1 1 0 00-1-1H9a1 1 0 00-1 1v6a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z"
                clipRule="evenodd"
              />
            </svg>
            <span>4</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span>2</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <span>2-4</span>
          </div>
        </div>

        {/* Price and Button */}
        <div className="flex justify-between items-center">
          <div>
            <span className="text-white text-xl font-bold">${price}</span>
            <span className="text-gray-300 text-sm">/n</span>
          </div>

          <Link href={`/property/${encodeURIComponent(title)}`}>
            <button className="bg-white text-black text-sm font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              View Property
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
