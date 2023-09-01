import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header-container">
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
      <div>
        <button className="header-button button-login-signup button-signup">
          S'inscrire
        </button>
        <button className="header-button button-login-signup">
          Se connecter
        </button>
      </div>
      <div>
        <button className="header-button button-sold">
          Vends tes articles
        </button>
      </div>
    </div>
  );
};

export default Header;
