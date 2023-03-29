import './menu-top-main.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { menuListAction } from '../actions/menuActions';

const MenuTopMain = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(menuListAction())
  }, [dispatch])

  const menuList = useSelector(state => state.menuListReducer)
  const { isLoadingMenu, errorMenu, menus } = menuList

  return (
    <ul className="menu">
        {menus.filter(item => (item.menuId === 0))
          .map(item =>
            <li className="menu-item">
            <NavLink
              className="menu-link"
              to={item.url}
              key={item.id}
            >{item.name}</NavLink>
            </li>
          )
        }
    </ul>
  )
}

export default MenuTopMain
