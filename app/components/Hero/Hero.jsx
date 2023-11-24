import "./Hero.css";

function Hero({
  adress,
  title,
  description,
  features1,
  features2,
  features3,
  textBtn,
}) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h3 className="hero__ftitle">{adress}</h3>
        <h1 className="hero__title">{title}</h1>
        <p className="hero__description">{description}</p>
        <ul className="hero__features">
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            {features1}
          </li>
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            {features2}
          </li>
          <li className="hero__features_item">
            {" "}
            <img src="/images/teenyicons_tick-circ.svg" />
            {features3}
          </li>
        </ul>
        <a href="#" className="btn-primary">
          {textBtn}
        </a>
      </div>
    </section>
  );
}

export default Hero;
