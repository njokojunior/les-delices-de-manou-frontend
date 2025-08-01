import React from "react";
import Button from "../ui/Button";
import { FaPlane } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18  text-violet-700">
        Contactez-Nous
      </h2>

      <form className=" grid grid-cols-2 gap-4 mt-4 lg:gap-6 lg:mt-7">
        <input
          type="text"
          placeholder="Votre Nom"
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1"
        />
        <input
          type="email"
          placeholder="Votre Email"
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1"
        />
        <input
          type="text"
          placeholder="Objet"
          className="border-gray-400 py-2 px-4 rounded-lg placeholder:text-gray-400 border-1 col-span-2"
        />
        <textarea
          placeholder="Votre Message"
          className="border-gray-500 py-4 px-4 rounded-lg placeholder:text-gray-400 border-1 col-span-2 resize-none lg:h-42"
        ></textarea>

        <Button
          className="cursor-pointer flex! items-center justify-center gap-1"
          shape="pill"
        >
          Send Message <FaPlane />
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
