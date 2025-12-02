import React from "react";
import { Link } from "react-router";

const ToyCard = ({ singleToy }) => {
  const { toyName, subCategory, pictureURL } = singleToy || {};

  return (
    <div className="card backdrop-blur-lg bg-white/10 shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform ">

      {/* Image With Padding */}
      <div className="p-3">
        <img
          src={pictureURL}
          alt={toyName}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {/* Card Content */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-1 text-cyan-400">{toyName}</h2>
        <p className="text-sm text-white mb-3">Category: {subCategory}</p>

        <Link
          to={`/toyDetails/${singleToy.toyId}`}
          className="btn btn-sm btn-pink w-full text-white backdrop-blur-lg bg-white/10 shadow-none border-none"
        >
          View More
        </Link>
      </div>
    </div>
  );
};

export default ToyCard;
