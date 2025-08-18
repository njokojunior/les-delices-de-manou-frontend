import React from "react";

const IconBox = (props) => {
  return (
    <div className="bg-white flex flex-col items-center gap-0.5 md:gap-1 lg:gap-4">
      <div className="relative">
        <props.icon
          className={`${
            props.stroke && "fill-violet-700"
          } text-5xl lg:text-7xl text-violet-700 `}
        />
        <p className="absolute bg-rose-400 text-[9px] w-4 h-4 text-white  sm:w-5 sm:h-5 md:w-7 md:h-7 top-0 right-0 rounded-full flex items-center md:-top-1 md:-right-2 lg:top-0 lg:right-0 justify-center">
          {props.count}
        </p>
      </div>

      <h3 className="text-stone-800 font-bold text-lg lg:text-4xl text-center">
        {props.title}
      </h3>
      <p className="text-xs text-center text-stone-500 md:text-base/6 sm:text-xs">
        {props.description}
      </p>
    </div>
  );
};

export default IconBox;
