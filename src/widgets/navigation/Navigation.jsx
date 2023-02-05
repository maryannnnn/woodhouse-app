import { NavLink } from 'react-router-dom';
import './navigation.scss'
import Logo from '../../app/assets/images/logo-2.png'
import SocialBlockMin from "../../shared/ui/social/social-block-min/SocialBlockMin";

const Navigation = () => {
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar__inner">
                    <div className="navbar__logo">
                        <NavLink to="/" className="navbar__logo-link">
                            <img className="navbar__logo-img" src={Logo} alt="Logo"/>
                            <div className="navbar__logo-title">WoodHouse</div>
                        </NavLink>
                    </div>
                    <nav className="navbar__menu">
                        <ul className="navbar__menu-list">
                            <li className="navbar__menu-item">
                                <NavLink to="/" className="navbar__menu-link">Home</NavLink>
                            </li>
                            <li className="navbar__menu-item">
                                <NavLink to="/projects" className="navbar__menu-link">Projects</NavLink>
                            </li>
                            <li className="navbar__menu-item">
                                <NavLink to="/service" className="navbar__menu-link">Service</NavLink>
                            </li>
                            <li className="navbar__menu-item">
                                <NavLink to="/blog" className="navbar__menu-link">Blog</NavLink>
                            </li>
                            <li className="navbar__menu-item">
                                <NavLink to="/company" className="navbar__menu-link">Company</NavLink>
                            </li>
                        </ul>
                    </nav>
                    <SocialBlockMin />
                </div>
            </div>
        </div>

    )
}

export default Navigation