import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../AppContext";

const MenuBar = () => {
  const { getArticles } = useContext(AppContext);
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <NavLink className="item" to="/" onClick={getArticles()}>
          Home
        </NavLink>
        <NavLink className="item" to="/artikeladd">
          Neuer Artikel
        </NavLink>
      </div>
    </div>
  );
};

export default MenuBar;
