import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { RiPinDistanceLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [values, setValues] = useState({
    location: "",
    distance: 0,
    maxGroupSize: 0,
  });

  const changeHandler = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);
  return (
    <div className="shadow-md p-7 inline-block rounded-full">
      <form className="flex items-center gap-4">
        <div className="flex items-center">
          <IoLocationOutline className="text-current text-4xl" />
          <div className="ml-2">
            <h6 className="font-semibold">Location</h6>
            <input
              name="location"
              value={values.location}
              onChange={changeHandler}
              className="outline-none border-b-[1px]"
              type="text"
              placeholder="Where are you going?"
            />
          </div>
        </div>
        <div className="flex items-center">
          <RiPinDistanceLine className="text-current text-4xl" />
          <div className="ml-2">
            <h6 className="font-semibold">Distance</h6>
            <input
              name="distance"
              value={values.distance}
              onChange={changeHandler}
              className="outline-none border-b-[1px]"
              type="number"
              placeholder="Distance k/m"
            />
          </div>
        </div>
        <div className="flex items-center">
          <BsPeople className="text-current text-4xl" />
          <div className="ml-2">
            <h6 className="font-semibold">Max People</h6>
            <input
              name="maxGroupSize"
              value={values.maxGroupSize}
              onChange={changeHandler}
              className="outline-none border-b-[1px]"
              type="number"
              placeholder="0"
            />
          </div>
        </div>
        <div className="bg-current p-2 rounded-tl-2xl rounded-br-2xl">
          <BiSearch className="text-[#fff] text-2xl" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
