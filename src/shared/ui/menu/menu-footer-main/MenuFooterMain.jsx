import './menu-footer-main.scss'
import './media.scss'
import { NavLink } from "react-router-dom";

const MenuFooterMain = ({menu}) => {

  return (
    <div className="menu-footer">
      <h3 className="menu-footer__title">Main</h3>
      <div className="menu-footer__elements">
        {menu.filter(item => item.menuId === 0)
          .sort((a, b) => a.order - b.order)
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