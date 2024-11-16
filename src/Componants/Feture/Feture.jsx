import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const Feture = ({ feture }) => {
  return (
    <div className="flex  items-start text-lg p-1 pr-0">
      <IoIosCheckmarkCircle className="mt-[6px]"></IoIosCheckmarkCircle>
      <p className="pl-2">{feture}</p>
    </div>
  );
};

export default Feture;
