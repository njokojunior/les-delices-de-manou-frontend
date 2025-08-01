import React from "react";
import Button from "../ui/Button";
import puffPuff from "./../../assets/puffpuff.png";

const Hero = () => {
  return (
    <div className="grid  grid-cols-2 py-8 px-4 bg-violet-50 gap-4 sm:gap-6 items-center lg:px-20 xl:px-24">
      <div className="">
        <h2 className="text-violet-800  text-4xl/12  md:text-6xl/20 lg:text-6xl/18 xl:text-7xl/20 transition-all">
          Délices Faits Maison
        </h2>
        <p className="py-3 text-stone-700 text-sm sm:text-base md:text-lg xl:text-2xl xl:pr-10 transition-all xl:mt-2.5">
          Savourez des saveurs authentiques. Ingrédients frais, recettes
          traditionnelles, goûts d&apos;exception.
        </p>

        <Button
          href={"#feature"}
          className="lg:mt-4.5"
        >
          commandez maintenant &rarr;
        </Button>
      </div>

      <div className="p-7">
        <img src={puffPuff} alt="" className="sm:h-40 sm:w-auto md:w-full md:h-auto" />
      </div>
    </div>
  );
};

export default Hero;
