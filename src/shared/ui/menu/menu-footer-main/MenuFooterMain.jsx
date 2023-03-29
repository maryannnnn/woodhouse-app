import './menu-footer-main.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";
import { menuListAction } from '../actions/menuActions';

const MenuFooterMain = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(menuListAction())
  }, [dispatch])

  const menuList = useSelector(state => state.menuListReducer)
  const { isLoadingMenu, errorMenu, menus } = menuList

  return (
    <div className="menu-footer">
      <h3 className="menu-footer__title">Main</h3>
      <div className="menu-footer__elements">
        {menus.filter(item => (item.menuId === 0))
          .map(item =>
            <NavLink
              className="menu-footer__elements-link"
              to={item.url}
              key={item.id}
            >{item.name}</NavLink>
          )
        }
      </div>
    </div>
  )
}

export default MenuFooterMain