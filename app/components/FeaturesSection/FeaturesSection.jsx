import "./FeaturesSection.css";

export default function FeaturesSection() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="features-heading">
          <h2>Мы сделаем ваш отдых изысканным</h2>
          <p>
            Всего в 75 км от Санкт-Петербурга в окружении роскошного соснового
            леса расположен загородный клуб «Мы здесь». 
          </p>
          <p>Современная архитектура
            вилл с панорамными окнами, круглогодичный видовой СПА центр и
            панорамный ресторан на берегу Финского залива создают ощущение
            полного погружения в покой и единения с природой.</p>
        </div>
        <div className="features-grid">
          <div className="feature-item">
            <img src="/images/club-house.png" alt="Клубный дом" />
            <div className="feature-info">
              <strong>25 га</strong>
              <span>площадь клуба</span>
            </div>
          </div>
          <div className="feature-item">
            <img src="/images/beach-line.png" alt="Береговая линия" />
            <div className="feature-info">
              <strong>1 км</strong>
              <span>береговой линии</span>
            </div>
          </div>
          <div className="feature-item">
            <img src="/images/villa.png" alt="Вилла" />
            <div className="feature-info">
              <strong>107 вилл</strong>
              <span>премиум-класса</span>
            </div>
          </div>
          <div className="feature-item">
            <img src="/images/restaurant.png" alt="Ресторан" />
            <div className="feature-info">
              <strong>200 посадочных мест</strong>
              <span>ресторана</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
