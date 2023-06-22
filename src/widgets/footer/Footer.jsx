import './footer.scss'
import './media.scss'
import {NavLink} from "react-router-dom";
import Logo from "../../app/assets/images/logo-2.png";
import ContactCheckout from "../../shared/ui/contact-checkout/ContactCheckout";
import SocialBlock from "../../shared/ui/social/social-block/SocialBlock";
import MenuFooterService from "../../shared/ui/menu/menu-footer-service/MenuFooterService";
import MenuFooterMain from "../../shared/ui/menu/menu-footer-main/MenuFooterMain";
import {useSelector} from "react-redux";

const Footer = () => {

    const {isLoadingCustomise, errorCustomise, customise} = useSelector(state => state.customiseReducer)
    const menu = customise?.menu ?customise.menu : null;

    return (
        <div className="footer">
            <div className="container">
                {menu &&
                <div className="footer__inner">
                    <div className="footer__company">
                        <div className="footer__logo">
                            <NavLink to="/" className="footer__logo-link">
                                <img className="footer__logo-img" src={Logo} alt="Logo"/>
                                <div className="footer__logo-title">WoodHouse</div>
                            </NavLink>
                        </div>
                        <ContactCheckout/>
                        <div className="footer__company-copyright">
                            WoodHouse © 2022
                        </div>
                    </div>
                    <MenuFooterMain menu={menu}/>
                    <MenuFooterService menu={menu}/>
                    <SocialBlock/>
                </div>
                }
            </div>
        </div>
    )
}

export default Footer