import React from "react";

import { HiMapPin, HiEnvelope, HiPhone } from "react-icons/hi2";

const ContactAddress = () => {
  return (
    <div className="w-full">
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18  text-violet-700">
        Où Nous Trouver
      </h2>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.4813930734153!2d-71.25128062319308!3d46.8342126409943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89631e6c0f45d%3A0x9830ec8bec5f2577!2s2680%20Av.%20Duval%2C%20Qu%C3%A9bec%2C%20QC%20G1L%204M9%2C%20Canada!5e0!3m2!1sen!2scm!4v1753979972142!5m2!1sen!2scm"
        className="lg:h-70 w-full rounded-2xl lg:rounded-3xl p-2 mt-4 lg:mt-7"
        loading="lazy"
      ></iframe>

      <address className="flex flex-col gap-1 md:gap-2 mt-3 lg:mt-7  lg:gap-3">
        {[
          {
            icon: HiMapPin,
            text: "2680 avenue duval",
          },
          {
            icon: HiPhone,
            text: "581-446-1643",
          },
          {
            icon: HiEnvelope,
            text: "njokogabrielle@gmail.com",
          },
        ].map((el) => (
          <div key={el.text} className="flex gap-2 items-center text-md md:text-lg lg:text-xl">
            <el.icon className="fill-violet-700" />
            <p>{el.text}</p>
          </div>
        ))}
      </address>
    </div>
  );
};

export default ContactAddress;
