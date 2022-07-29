import React from "react";
import MenuListItem from "./MenuItem";
const MenuList = (props) => {
  return (
    <ul>
      <MenuListItem name="Declaration" />
      <MenuListItem name="Info" />
      <MenuListItem name="About" />
      <MenuListItem name="About Infodration" />
    </ul>
  );
};

export default MenuList;
