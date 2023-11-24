import VillaCard from "../VillaCard/VillaCard";
import "./VillasSection.css";

const VillasSection = ({ title, subtitle, villas }) => {
  return (
    <section className="villas-section">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <div className={"villasGrid"}>
        {villas.map((villa, index) => (
          <VillaCard key={index} {...villa} />
        ))}
      </div>
    </section>
  );
};

export default VillasSection;
