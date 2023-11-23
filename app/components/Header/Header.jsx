import "./Header.css";
import Link from "next/link";

function Header() {
  return (
    <header className={"header"}>
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

      {/* <button className="header__burger-open">
            <img
              className="header__burger-img"
              src="/images/burger-icon.svg"
            ></img>
          </button> */}
    </header>
  );
}

export default Header;
