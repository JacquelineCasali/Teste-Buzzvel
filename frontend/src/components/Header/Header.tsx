import { useState } from "react";
import "./Header.css";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import { FaBars } from "react-icons/fa";
import Simbolo from "../../assets/images/Logo-colored.svg";
import Button from "../Button/Button";
const Header: React.FC = () => {
  const [menuAberto, setMenuAberto] = useState(false);
  const [dropdownAberto, setDropdownAberto] = useState(false);
  return (
    <header className="header">
      <nav className="nav-bar">
        <img src={Simbolo} alt="logo" className="img" />

        <ul className={classNames("nav-links", { "nav-active": menuAberto })}>
          <li>
            <Link to="products" className="link">
              Products
            </Link>
          </li>

          <li>
            <Link to="solutions" className="link">
              Solutions
            </Link>
          </li>

          <li>
            <Link to="pricing" className="link">
              Pricing
            </Link>
          </li>

          <li className="dropdown">
            <button
              className="dropdown-trigger"
              onClick={() => setDropdownAberto(!dropdownAberto)}
              aria-haspopup="true"
              aria-expanded={dropdownAberto}
            >
              Resources
              <FiChevronDown
                size={24}
                cursor={"pointer"}
                color="#0F172A"
                className={classNames("dropdown-arrow", {
                  aberto: dropdownAberto,
                })}
              />
            </button>

            <ul
              className={classNames("dropdown-menu", {
                aberto: dropdownAberto,
              })}
            >
            <li><Link to="#">Blog</Link></li>
    <li><Link to="#">Documentation</Link></li>
    <li><Link to="#">Community</Link></li>
            </ul>
          </li>
        </ul>
        {/* botao responsivo */}

        <FaBars
          size={20}
          className="menu-btn"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
          role="button"
          tabIndex={0}
        />
      </nav>
      <div className="header__buttons">
        <span>Log in</span>
        <Button text="Sign Up Now" variant={"outline"} />
      </div>
    </header>
  );
};
export default Header;
