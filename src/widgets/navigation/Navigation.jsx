import {NavLink} from 'react-router-dom';
import './navigation.scss'
import './media.scss'
import Logo from '../../app/assets/images/logo-2.png'
import SocialBlockMin from "../../shared/ui/social/social-block-min/SocialBlockMin";
import MenuTopMain from "../../shared/ui/menu/menu-top-main/MenuTopMain";
import {useSelector} from "react-redux";
import {ArrayDto} from "../../app/dto/arrayDto";

const Navigation = () => {

    const {isLoadingCustomise, errorCustomise, customise} = useSelector(state => state.customiseReducer)
    const getMenuListDto = () => customise?.menu ? new ArrayDto(customise.menu, isLoadingCustomise, errorCustomise) : null

    return (
        <div className="navbar">
            {getMenuListDto() &&
            <div className="container">
                <div className="navbar__inner">
                    <div className="navbar__logo">
                        <NavLink to="/" className="navbar__logo-link">
                            <img className="navbar__logo-img" src={Logo} alt="Logo"/>
                            <div className="navbar__logo-title">WoodHouse</div>
                        </NavLink>
                    </div>
                    <MenuTopMain menuListDto={getMenuListDto()}/>
                    <SocialBlockMin/>
                </div>
            </div>
            }
        </div>
    )
}

export default Navigation