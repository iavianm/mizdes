import "./BurgerMenu.css";
import { useClient } from "next/client";

export default function BurgerMenu({ isOpen, onClose }) {
  useClient();
  return isOpen ? (
    <div className="burger__overlay">
      <div className="burger__menu">
        <button className="burger__close-btn" onClick={onClose}>
          <img src="/images/close-icon.svg"></img>
        </button>
        <img
          className="burger__logo"
          src="/images/logo.svg"
          alt="логотип"
        ></img>
        <nav className="burger__nav">
          <ul className="burger__list">
            <li className="burger__item">Главная</li>
            <li className="burger__item">Номера</li>
            <li className="burger__item">Рестораны</li>
            <li className="burger__item">СПА</li>
            <li className="burger__item">Контакты</li>
          </ul>
        </nav>

        <div className="burger__description">
          <p className="burger__number">+7 921 909 57 00</p>
          <a className="burger__link" href="mailto:info@mizdes.com">
            info@mizdes.com
          </a>
        </div>
        <button className="header__button burger__reserv-btn">
          Забронировать
        </button>
      </div>
    </div>
  ) : null;
}
