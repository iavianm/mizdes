"use client";
import "./Header.css";
import Link from "next/link";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useState, useEffect } from "react";

function Header() {
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleOpenBurger() {
    setBurgerOpened(!burgerOpened);
  }

  return (
    <header className={"header"}>
      {windowWidth > 768 ? (
        <>
          <Link className={"header__logo-link"} href={"/"}>
            <img
              src="/images/header-logo.svg"
              alt="Логотип"
              className="header__logo"
            />
          </Link>
          <ul className={"header__list"}>
            <li className={"header__list-items"}>
              <Link href="/" className={"header__list-item"}>
                Главная
              </Link>
            </li>
            <li className={"header__list-items"}>
              <Link href="/houses" className={"header__list-item"}>
                Номера
              </Link>
            </li>
            <li className={"header__list-items"}>
              <Link href="/spa" className={"header__list-item"}>
                СПА
              </Link>
            </li>
            <li className={"header__list-items"}>
              <Link href="/restaurant" className={"header__list-item"}>
                Ресторан
              </Link>
            </li>
            <li className={"header__list-items"}>
              <Link href="/contacts" className={"header__list-item"}>
                Контакты
              </Link>
            </li>
          </ul>
          <button className={"header__button"}>Забронировать</button>
        </>
      ) : (
        <>
          <Link className={"header__logo-link"} href={"/"}>
            <img
              src="/images/logo-white.svg"
              alt="Логотип"
              className="header__logo"
            />
          </Link>
          <button
            className="header-burger__btn"
            onClick={handleOpenBurger}
            isOpen={burgerOpened}
          >
            <img
              className="header-burger__img"
              src="/images/burger-icon.svg"
              alt="кнопка меню"
            ></img>
          </button>
          <BurgerMenu isOpen={burgerOpened} onClose={handleOpenBurger} />
        </>
      )}
    </header>
  );
}

export default Header;
