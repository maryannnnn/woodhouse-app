import './menu-top-main.scss'
import { NavLink } from "react-router-dom";
import React from "react";

const MenuTopMain = (props) => {

  const menus = props.menuListDto.array;

  return (
    <ul className="menu">
      {menus.filter(item => (item.menuId === 0))
        .sort((a, b) => a.order - b.order)
        .map(item =>
          <li className="menu-item" key={item.id}>
            <NavLink
              className="menu-link"
              to={item.url}
            >{item.name}</NavLink>
          </li>
        )}
    </ul>
  )
}

export default MenuTopMain
