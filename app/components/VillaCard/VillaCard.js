import Image from "next/image";
import "./VillaCard.css";

const VillaCard = ({ name, area, rooms, description, imageSrc }) => {
  return (
    <div className={"card"}>
      <div className={"imageWrapper"}>
        <Image src={imageSrc} alt={name} layout="fill" objectFit="cover" />
      </div>
      <div className={"info"}>
        <div className={"about"}>
          <h3 className={"title"}>{name}</h3>
          <div className={"details"}>
            <span className={"area"}>{area} м²</span>
            <span className={"rooms"}>{rooms} комнаты</span>
          </div>
        </div>

        <p className={"description"}>{description}</p>
      </div>
    </div>
  );
};

export default VillaCard;
