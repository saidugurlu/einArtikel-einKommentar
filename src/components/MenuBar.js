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
        <h3 class="ui item right floated header">
          Ein Artikel ~ Ein Kommentar
        </h3>
      </div>
    </div>
  );
};

export default MenuBar;
