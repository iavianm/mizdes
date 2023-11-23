import VillaCard from "../VillaCard/VillaCard";
import "./VillasSection.css";

const VillasSection = () => {
  return (
    <section className="villas-section">
      <h2>Виллы премиум-класса</h2>
      <p>Когда экологичность и эстетика неразделимы</p>
      <div className={"villasGrid"}>
        <VillaCard
          name="Ривьера"
          area="77"
          rooms="2 комнаты"
          description="Функциональная, современная, компактная вилла для небольшой компании"
          imageSrc="/images/villa-riviera.png"
        />
        <VillaCard
          name="Грандис"
          area="98"
          rooms="3 комнаты"
          description="Комфортная, стильная вилла для семейного отдыха"
          imageSrc="/images/villa-grandis.png"
        />
      </div>
    </section>
  );
};

export default VillasSection;
