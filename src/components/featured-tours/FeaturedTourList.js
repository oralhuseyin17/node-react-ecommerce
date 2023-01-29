import React from "react";
import TourCard from "../tour-card/TourCard";
import tourData from "../../assets/data/tours";

const FeaturedTourList = () => {
  return (
    <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 gap-4">
      {tourData.map((tour) => (
        <div key={tour.id}>
          <TourCard tour={tour} />
        </div>
      ))}
    </div>
  );
};

export default FeaturedTourList;
