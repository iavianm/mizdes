import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3 className="hero__ftitle">Ленинградская область, Зелёная Роща</h3>
        <h1 className="hero__title">Максимум условий для комфортного отдыха</h1>
        <p className="hero__description">
          Открой для себя абсолютно новый загородный клуб, включающий лучшие
          практики гостиничного сервиса, услуги ресторана, красоты, здоровья и
          активного отдыха.
        </p>
        <ul className="hero__features">
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            Современный дизайн и качественный сервис
          </li>
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            Первая береговая линия Финского залива с собственным пляжем
          </li>
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            Вертолетная площадка
          </li>
        </ul>
        <a href="#" className="btn btn-primary">
          Все коттеджи
        </a>
      </div>
    </section>
  );
}

export default Hero;
