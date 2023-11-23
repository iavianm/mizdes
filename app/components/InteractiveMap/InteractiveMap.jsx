"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./InteractiveMap.css"; // Предполагается, что стили определены правильно

const InteractiveMap = () => {
  const [activePoint, setActivePoint] = useState(null);

  const points = [
    {
      id: "spa-center",
      label: "Круглогодичный видовой СПА-центр.",
      top: "44.5%",
      left: "35.5%",
      image: "/images/spa.png",
    },
    {
      id: "restaurant",
      label: "Панорамный ресторан мечты на берегу Финского залива.",
      top: "59%",
      left: "23.3%",
      image: "/images/restaurant_map.png",
    },
    {
      id: "riviera",
      label:
        "Функциональная, современная, компактная вилла для небольшой компании.",
      top: "37%",
      left: "60.5%",
      image: "/images/riviera_map.png",
    },
    {
      id: "villa",
      label: "Комфортная, стильная вилла для семейного отдыха.",
      top: "60.4%",
      left: "61.5%",
      image: "/images/villa_map.png",
    },
    {
      id: "highgarden",
      label:
        "Просторная, надёжная двухэтажная вилла для тех, кто привык брать от жизни максимум.",
      top: "63%",
      left: "67.5%",
      image: "/images/highgarden_map.png",
    },
  ];

  return (
    <div className="mapContainer">
      <Image
        src="/images/interactive-map.png"
        alt="Интерактивная карта"
        layout="fill"
        objectFit="contain"
      />
      {points.map((point) => (
        <div
          key={point.id}
          className="point-container"
          onMouseEnter={() => setActivePoint(point.id)}
          onMouseLeave={() => setActivePoint(null)}
          style={{ top: point.top, left: point.left }}
        >
          <div className="point" />
          {activePoint === point.id && (
            <div className="tooltip">
              <Image
                src={point.image}
                alt={point.label}
                width={300}
                height={160}
                objectFit="cover"
              />
              <div className="tooltipText">{point.label}</div>
              <div className={"tooltip__button"}>
                <a href="#" className="moreLink">
                  Подробнее
                </a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default InteractiveMap;
