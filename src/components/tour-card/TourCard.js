import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import calculateAvgRating from "../../utils/avgRating";

const TourCard = ({ tour }) => {
  const { id, title, photo, price, featured, reviews, city } = tour;
  const { totalRating, avgRating } = calculateAvgRating(reviews);
  return (
    <div className="w-full p-2 rounded-lg shadow-md">
      <div className="relative">
        <Link to={`/tour/${id}`}>
          <img className="object-cover w-full" src={photo} alt="image" />
          <div className="absolute bottom-0 right-0 bg-current p-2 font-semibold text-[#fff]">
            {featured ? "Featured" : null}
          </div>
        </Link>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <IoLocationOutline className="text-current text-2xl" />
            <p className="font-semibold ">{city}</p>
          </div>
          <div className="flex items-center">
            <AiFillStar />
            <span>
              ({avgRating === 0 ? null : avgRating}){" "}
              {totalRating === 0 ? "Not rated" : <span>{reviews.length}</span>}
            </span>
          </div>
        </div>
        <h4 className="font-semibold tracking-tight text-blue-600 mt-5">
          {title}
        </h4>
        <div className="flex items-center justify-between mt-5">
          <p>
            <span className="text-current">${price}</span> /per person
          </p>
          <Link
            to={`/tour/${id}`}
            className="bg-current text-[#fff] py-1 px-2 rounded-md"
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
