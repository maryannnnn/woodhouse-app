import './socil-block.scss'
import './media.scss'
import SocialBlockMin from "../social-block-min/SocialBlockMin";

const SocialBlock = () => {
    return (
        <div className="social-block">
            <div className="social-block__title">
                Our social channels
            </div>
            <div className="social-block__info">
                Follow us on social media so you don't miss out on new
                incredible projects designed for our clients around the
                world.
            </div>
            <SocialBlockMin />
        </div>
    )
}

export default SocialBlock