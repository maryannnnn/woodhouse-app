import './social-block-min.scss'
import {NavLink} from "react-router-dom";
import Instagram from "../../../../app/assets/images/social/instagram.svg";
import Facebook from "../../../../app/assets/images/social/facebook.svg";
import Twitter from "../../../../app/assets/images/social/twitter.svg";

const SocialBlockMin = () => {
    return (
        <div className="social-block-min">
            <NavLink to="#" className="social-block-min__link" target="_blanck">
                <img className="social-block-min__img" src={Instagram} alt="Instagram" />
            </NavLink>
            <NavLink to="#" className="social-block-min__link" target="_blanck">
                <img className="social-block-min__img" src={Facebook} alt="Facebook" />
            </NavLink>
            <NavLink to="#" className="social-block-min__link" target="_blanck">
                <img className="social-block-min__img" src={Twitter} alt="Twitter" />
            </NavLink>
        </div>
    )

}

export default SocialBlockMin


