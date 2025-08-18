import React from "react";
import { IoCart, IoTimeOutline, IoLocationOutline } from "react-icons/io5";
import IconBox from "../ui/IconBox";

const HowItWorks = () => {
  const process = [
    {
      icon: IoCart,
      description:
        "Parcourez notre menu et choisissez vos produits préférés. Passez votre commande en ligne ou par téléphone, en toute simplicité.",
      stroke: true,
      title: "Commandez",
      count: 1,
    },
    {
      icon: IoTimeOutline,
      description:
        "Nous préparons vos plats avec soin, en utilisant des ingrédients frais et de qualité pour garantir un goût authentique à chaque bouchée.",
      stroke: false,
      title: "Préparation",
      count: 2,
    },
    {
      icon: IoLocationOutline,
      description:
        "Recevez votre commande directement chez vous ou passez la récupérer à notre point de vente. Rapide, pratique et délicieux!",
      stroke: false,
      title: "Livraison ou Retrait",
      count: 3,
    },
  ];

  return (
    <section id="process" className="px-4 py-20 bg-white  lg:py-40">
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18 text-center text-violet-700">
        Notre Processus de Commande
      </h2>

      <p className="text-center text-stone-600 mt-1 text-xs lg:text-xl lg:mt-2">
        Suivez ces étapes simples, de la commande à la livraison, pour savourer
        nos délices en toute tranquillité.
      </p>

      <div className="grid grid-cols-2  py-7 px-4 mt-6 md:mt- sm:grid-cols-3 lg:px-20 xl:px-24 lg:mt-28 gap-6">
        {process.map((el) => (
          <IconBox
            icon={el.icon}
            description={el.description}
            stroke={el.stroke}
            title={el.title}
            count={el.count}
            key={el.count}
          ></IconBox>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
