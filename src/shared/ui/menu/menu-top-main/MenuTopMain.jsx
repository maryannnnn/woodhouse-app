import './menu-top-main.scss'
import './media.scss'
import { NavLink } from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

const MenuTopMain = () => {

  const {isLoadingCustomise, errorCustomise, customise} = useSelector(state => state.customiseReducer)
  const menu = customise?.menu ?customise.menu : null;

  return (
    <ul className="menu">
      {menu?.filter(item => (item.menuId === 0))
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
