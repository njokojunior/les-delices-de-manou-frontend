import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";
import { LuChefHat } from "react-icons/lu";
import Button from "../ui/Button";

const Footer = () => {
  const [email,setEmail] = useState("");
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();

    const apiUrl = import.meta.env.VITE_API_URL;
    
    if (!email) {
      alert("Please enter a valid email address.");
      return;
    }
    fetch(`${apiUrl}/newsletter`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Subscription successful!", data);
      })
      .catch((error) => {
        alert("Error subscribing to newsletter:", error);
      }).finally(() => {
        setEmail("");
      });
    
    
  };
  return (
    <footer className="bg-violet-900 text-violet-50 grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-4 lg:px-20 xl:px-24 lg:py-15 lg:justify-items-center p-7 gap-6">
      <div className="flex flex-col gap-3">
        <div className="md:text-xl text-lg  flex gap-1 items-center lg:text-3xl">
          <LuChefHat className="p-0 m-0" />
          <span className="font-bold font-[Monteserrat] tracking-[-2px] md:tracking-[-4px]">
            Les Délices de Gabi
          </span>
        </div>

        <p className="text-xs md:text-sm">
          Nous vous apportons de délicieuses gourmandises faites maison,
          préparées avec des saveurs authentiques et des ingrédients frais.
        </p>

        <div className="flex items-center gap-3">
          <FaFacebook className="fill-white rounded-full bg-violet-300 hover:fill-violet-700 hover:bg-white p-2 cursor-pointer h-10 w-10" />
          <FaInstagram className="fill-white rounded-full bg-violet-300 hover:fill-violet-700 hover:bg-white p-2 cursor-pointer h-10 w-10" />
          <FaXTwitter className="fill-white rounded-full bg-violet-300 hover:fill-violet-700 hover:bg-white p-2 cursor-pointer h-10 w-10" />
          <FaWhatsapp className="fill-white rounded-full bg-violet-300 hover:fill-violet-700 hover:bg-white p-2 cursor-pointer h-10 w-10" />
        </div>

        <div></div>
      </div>

      <div>
        <div className="md:text-xl text-lg  flex gap-1 items-center lg:text-3xl  logo">
          <span className="font-bold">Liens Rapides</span>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {[
            { text: "Accueil", link: "#hero" },
            { text: "À propos", link: "#about" },
            { text: "Menu", link: "#" },
          ].map((el) => (
            <Button
              variant="none"
              className="!shadow-none hover:shadow-none p-0! hover:text-white "
              shape="square"
              href={el.link}
              key={el.link}
            >
              {el.text}
            </Button>
          ))}
        </div>
      </div>

      <div>
        <div className="md:text-xl text-lg  flex gap-1 items-center lg:text-3xl  logo">
          <span className="font-bold">Nos Offres</span>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          {[
            { text: "Événements", link: "#hero" },
            { text: "Mariages", link: "#about" },
            { text: "Soutenances", link: "#" },
          ].map((el) => (
            <Button
              variant="none"
              className="!shadow-none hover:shadow-none p-0! hover:text-white "
              shape="square"
              href={el.link}
              key={el.link}
            >
              {el.text}
            </Button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="md:text-xl text-lg  flex gap-1 items-center lg:text-3xl  logo">
          <span className="font-bold">Notre newsletter</span>
        </div>
        <p className="text-xs md:text-sm">
          Abonnez-vous pour recevoir nos offres spéciales et nos dernières
          actualités.
        </p>
        <form
          onSubmit={handleNewsletterSubmit}
          className="flex flex-wrap gap-2 w-full "
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="bg-violet-50 placeholder:text-gray-400 text-violet-700 p-2 rounded-l-md"
          />
          <Button
            type="submit"
            shape="pill"
            className="rounded-l-none cursor-pointer"
          >
            Abonnez-vous
          </Button>
        </form>
      </div>
      <hr className="mt-6 border border-violet-700 col-span-full justify-self-stretch" />

      <small className="mt-3 col-span-full justify-self-stretch text-center">
        &copy;2025 Les Délices de Gabi. Tous droits réservés
      </small>
    </footer>
  );
};

export default Footer;
