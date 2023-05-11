import './menu-top-main.scss'
import { NavLink } from "react-router-dom";
import { MessageBox, LoadingBox } from '../../box/boxes'

const MenuTopMain = (props) => {

  const menus = props.menuListDto.array;
  const isLoading = props.menuListDto.isLoading;
  const error = props.menuListDto.error;

  return (
    <ul className="menu">
      {isLoading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="errorVariant">{error}</MessageBox>}
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
