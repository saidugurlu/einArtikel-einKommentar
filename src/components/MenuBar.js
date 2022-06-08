import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="ui inverted segment">
      <div className="ui inverted secondary pointing menu">
        <NavLink className="item" to="/">
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
