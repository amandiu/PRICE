import React from "react";
import Feture from "../Feture/Feture";

const Product = ({ product }) => {
  const { name, description, price, features } = product;
  return (
    <div className="bg-gradient-to-b from-blue-500 via-green-400 to-purple-500 h-full w-full  items-center justify-center rounded-md shadow-lg font-semibold text-white mt-2 p-2">
      <h1 className="text-3xl font-extrabold p-1">{name}</h1>
      <p className="text-black p-1">{description}</p>
      {features.map((feture) => (
        <Feture feture={feture}></Feture>
      ))}
     <div className="items-center flex justify-between">
     <p className="text-lg p-2 font-semibold">
        {price} <span className="text-xl font-extrabold">৳</span>
      </p>
      <button className="shadow-xl rounded-lg p-2 bg-gradient-to-b from-blue-100 via-green-200 to-purple-100 bg-clip-text text-transparent text-xl">
          <u>Buy Now</u>
        </button>
     </div>
    </div>
  );
};

export default Product;
