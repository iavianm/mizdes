import Image from "next/image";
import "./PremiumVillaCard.css";

const PremiumVillaCard = ({ title, area, rooms, description, imageUrl }) => {
  return (
    <div className="premiumVilla">
      <div className="premiumVilla__imageWrapper">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="cover" />
      </div>
      <div className="premiumVilla__info">
        <h3 className="premiumVilla__title">{title}</h3>
        <p className="premiumVilla__description">{description}</p>
        <div className="premiumVilla__details">
          <span className="premiumVilla__area">{area} м²</span>
          <span className="premiumVilla__rooms">{rooms} комнат</span>
        </div>
      </div>
    </div>
  );
};

export default PremiumVillaCard;
