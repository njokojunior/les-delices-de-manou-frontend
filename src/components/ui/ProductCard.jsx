import React from "react";
import Button from "./Button";
import clsx from "clsx";

const ProductCard = (props) => {
  const colorVariants = {
    violet: " text-violet-600",
    pink: " text-pink-600",
    amber: " text-amber-600",
    emerald: " text-emerald-600",
    rose: " text-rose-600",
    red: " text-red-600",
    blue: " text-blue-600",
  };

  return (
    <li className="w-full shadow-2xl rounded-lg overflow-hidden hover:-translate-y-2 transition-all duration-300 ">
      <img
        src={props.imgUrl}
        alt=""
        className="h-40 sm:h-52 md:h-60 lg:h-72 w-full  object-cover"
      />

      <div className="p-4 md:p-8 lg:p-9 flex flex-col items-start lg:gap-3">
        <div className="flex self-stretch justify-between items-center ">
          <h3 className="font-bold text-stone-900 lg:text-xl sm:text-base md:text-lg">
            {props.title}
          </h3>
          <p
            className={clsx(
              colorVariants[props.variant],
              "text-sm md:text-base"
            )}
          >
          {props.price}
          </p>
        </div>

        <p className="text-stone-600 text-xs mt-3 md:mt-4 md:text-sm ">
          {props.description}
        </p>
      </div>
    </li>
  );
};

export default ProductCard;
