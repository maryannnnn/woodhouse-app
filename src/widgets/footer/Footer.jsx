import './footer.scss'
import {NavLink} from "react-router-dom";
import Logo from "../../app/assets/images/logo-2.png";
import ContactCheckout from "../../shared/ui/contact-checkout/ContactCheckout";
import SocialBlock from "../../shared/ui/social/social-block/SocialBlock";
import MenuFooterService from "../../shared/ui/menu/menu-footer-service/MenuFooterService";
import MenuFooterMain from "../../shared/ui/menu/menu-footer-main/MenuFooterMain";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
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
                    <MenuFooterMain />
                    <MenuFooterService />
                    <SocialBlock/>
                </div>
            </div>
        </div>
    )
}

export default Footer