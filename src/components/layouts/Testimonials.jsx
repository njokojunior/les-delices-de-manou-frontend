import React from "react";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="bg-violet-700 text-violet-50 text-center px-6 md:px-8 lg:px-20 xl:px-24 py-10 lg:py-24 "
    >
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18 text-center">
        Ce Que Disent Nos Clients
      </h2>
      <p className="text-sm md:text-base">
        ⭐ ⭐ ⭐ ⭐ ⭐
      </p>

      <blockquote className="mt-3 md:mt-5 lg:mt-7 ">
        <p className="text-xs/5 italic  text-violet-50 font-light md:text-sm lg:text-2xl">
          Le kebab était parfaitement assaisonné et le beignet soufflé m&apos;a
          rappelé mon enfance. Je commanderai sans hésiter à nouveau ! Sans
          parler du yaourt nature qui est tout simplement le meilleur de la
          ville.
        </p>
        <cite className="mt-2 md:mt-4 md:text-xl block font-bold lg:text-2xl lg:mt-6">
          &ndash; Louis Lemere
        </cite>
      </blockquote>
    </section>
  );
};

export default Testimonials;
