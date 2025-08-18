import React from "react";
import ProductCard from "../ui/ProductCard";

const FeatureProducts = () => {
  const products = [
    {
      id: 1,

      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753873203/gateaux_egmmsl.png",
      title: "Gateaux fait maison",
      description:
        "Découvrez notre gâteau maison sans crème, simple et savoureux. Moelleux à l'intérieur et délicatement doré à l'extérieur.",
      color: "red",
      price: 'Nature',
    },
    {
      id: 2,
      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753874982/croquettes_qjj3l7.png",
      title: "Croquettes",
      description:
        "Croquettes maison, légèrement sucrées et délicieusement croustillantes.Une texture parfaite et un goût subtil pour des instants de plaisir à partager.",
      color: "rose",
      price: 'Nature',
    },
    {
      id: 3,
      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753875719/crepes_qwfpcr.png",
      title: "Crepes",
      description:
        "Légères et délicatement sucrées, parfaites pour toutes les envies. Fines et moelleuses, elles se dégustent nature ou accompagnées.",
      color: "emerald",
      price: 'Nature',
    },
    {
      id: 4,
      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753873195/yaourt_leor4q.png",
      title: "Yaourt Nature",
      description:
        "Appréciez la fraîcheur authentique de notre yaourt nature fait maison, disponible avec ou sans sucre selon vos préférences. ",
      color: "amber",
      price: 'Nature',
    },
    {
      id: 5,
      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753874812/folere_efl0rb.png",
      title: "Folere Maison",
      description:
        "Légèrement sucrée, naturellement acidulée et pleine de saveur, cette infusion locale est idéale pour se désaltérer tout en profitant de ses bienfaits.",
      color: "blue",
      price: 'Nature',
    },

    {
      id: 6,
      imgUrl:
        "https://res.cloudinary.com/dotscgp5d/image/upload/v1753877479/biegnet_souffl%C3%A9_zplwnv.png",
      title: "Beignet Souffle",
      description:
        "Parfait pour accompagner vos petits-déjeuners, goûters ou pauses gourmandes. Un vrai plaisir à chaque bouchée !",
      color: "pink",
      price: 'Nature',
    },
  ];
  return (
    <section id="menu" className="px-4 py-20 bg-white md:py-20 lg:py-40">
      <h2 className="font-bold text-2xl/8 md:text-3xl/12  lg:text-5xl/18 text-center text-violet-700">
        Nos pâtisseries
      </h2>
      <p className="text-center text-stone-600 text-sm lg:text-xl lg:mt-2">
        Découvrez nos délicieuses spécialités
      </p>

      <ul className="grid grid-cols-1 gap-7 sm:grid-cols-2 px-16 lg:grid-cols-3 mt-10 md:mt-9 lg:mt-24 md:gap-10 lg:px-20 xl:px-24 ">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            imgUrl={product.imgUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            variant={product.color}
          />
        ))}
      </ul>
    </section>
  );
};

export default FeatureProducts;
