import { useState } from "react";
import { Menu } from "semantic-ui-react";

const MenuBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { name }) => {
    setActiveItem({ activeItem: name });
  };

  return (
    <div>
      <Menu size='massive' pointing>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="messages"
          active={activeItem === "messages"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
      </Menu>
    </div>
  );
};

export default MenuBar;
