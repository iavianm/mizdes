import "./header.css";
import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className={"header"}>
      <Link className={"header__logo-link"} href={"/"}>
        <Image
          src="/images/header-logo.svg"
          alt="Логотип"
          width={52}
          height={52}
          className="header__logo"
        />
      </Link>

      <ul className={"header__list"}>
        <li className={"header__list-item"}>Главная</li>
        <li className={"header__list-item"}>Номера</li>
        <li className={"header__list-item"}>СПА</li>
        <li className={"header__list-item"}>Ресторан</li>
        <li className={"header__list-item"}>Контакты</li>
      </ul>
      <button className={"header__button"}>Забронировать</button>
    </header>
  );
}

export default Header;
