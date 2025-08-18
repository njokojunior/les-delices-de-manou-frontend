import React from "react";
import Button from "../ui/Button";
import puffPuff from "./../../assets/puffpuff.png";

const Hero = () => {
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-2 py-8 px-10 bg-violet-50 gap-4 sm:gap-6 items-center lg:px-20 xl:px-24">
      <div className="w-[80%] sm:w-full flex flex-col gap-2">
        <h2 className="text-violet-800  text-3xl/10  md:text-4xl/12 lg:text-6xl/18 xl:text-7xl/20 transition-all">
          Délices Faits Maison
        </h2>
        <p className="py-3 text-stone-700 text-sm md:text-base xl:text-2xl xl:pr-10 transition-all xl:mt-2.5">
          Savourez des saveurs authentiques. Ingrédients frais, recettes
          traditionnelles, goûts d&apos;exception.
        </p>

        <Button href={"#feature"} className="self-start">
          commandez maintenant &rarr;
        </Button>
      </div>

      <div className="p-7 hidden sm:block">
        <img
          src={puffPuff}
          alt="puffpuff"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default Hero;
