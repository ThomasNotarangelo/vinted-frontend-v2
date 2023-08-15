import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="header-container">
      <Link to="/">
        <img className="vinted-logo" src={logo} alt="Logo Vinted" />
      </Link>
      <div className="search-bar">
        <div className="search-input-container">
          <FontAwesomeIcon icon={faSearch} className="search-icon" />
          <input
            type="text"
            placeholder="Recherche des articles"
            className="search-input"
          />
        </div>
      </div>
      <button>Connexion</button>
      <button>S'inscrire</button>
    </header>
  );
};

export default Header;
