import { NavLink } from 'react-router-dom';
import './navigation.scss'
import './media.scss'
import Logo from '../../app/assets/images/logo-2.png'
import SocialBlockMin from "../../shared/ui/social/social-block-min/SocialBlockMin";
import MenuTopMain from "../../shared/ui/menu/menu-top-main/MenuTopMain";

const Navigation = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__inner">
          <div className="navbar__logo">
            <NavLink to="/" className="navbar__logo-link">
              <img className="navbar__logo-img" src={Logo} alt="Logo" />
              <div className="navbar__logo-title">WoodHouse</div>
            </NavLink>
          </div>
          <MenuTopMain menuListDto={props.menuListDto} />
          <SocialBlockMin />
        </div>
      </div>
    </div>
  )
}

export default Navigation