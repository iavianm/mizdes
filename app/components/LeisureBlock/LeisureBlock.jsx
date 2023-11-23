import React from "react";
import Image from "next/image";
import "./LeisureBlock.css";

const LeisureBlock = () => {
  const features = [
    {
      title: "Оранжерея",
      description: "Место, где вы откроете для себя экзотические растения",
      size: "1500 м²",
      imageSrc: "/images/greenhouse.png",
    },
    {
      title: "Веревочный парк",
      description: "Настоящий эдем для любителей спорта и активных развлечений",
      size: "8500 м²",
      imageSrc: "/images/rope-park.png",
    },
    {
      title: "Каток",
      description:
        "Фантастическая атмосфера для создания праздничного настроения",
      size: "2556 м²",
      imageSrc: "/images/rink.png",
    },
    {
      title: "Спорткомплекс",
      description: "Мы за спорт, за здоровье\n" + "и яркие эмоции",
      size: "4 сооружения",
      imageSrc: "/images/sports-complex.png",
    },
    {
      title: "Велодорожки",
      description: "Для любителей скорости, драйва и физических нагрузок",
      size: "2,5 км",
      imageSrc: "/images/bike-paths.png",
    },
    {
      title: "Бани",
      description: "Русская парная для комплексного оздоровления",
      size: "8 зданий",
      imageSrc: "/images/baths.png",
    },
  ];

  return (
    <div className="leisureBlock">
      <h2>Активный отдых</h2>
      <p className="subtitle">
        «Мы здесь» — это не только вдохновляющая история релакса
      </p>
      <div className="featuresList">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <Image
              src={feature.imageSrc}
              alt={feature.title}
              width={400}
              height={400}
              objectFit="cover"
            />
            <h3>{feature.title}</h3>
            <p>{feature.size}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeisureBlock;
