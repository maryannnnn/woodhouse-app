import './menu-footer-service.scss'
import { NavLink } from "react-router-dom";

const MenuFooterService = ({menu}) => {

  return (
    <div className="menu-footer">
      <h3 className="menu-footer__title">Category</h3>
      <div className="menu-footer__elements">
        {menu.filter(item => item.menuId === 1)
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

export default MenuFooterService