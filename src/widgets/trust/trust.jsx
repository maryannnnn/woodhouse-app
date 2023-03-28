import './trust.scss'
import ContactCheckout from "../../shared/ui/contact-checkout/ContactCheckout";

const Trust = () => {

    return (
        <div className="trust">
            <div className="container">
                <div className="trust__inner">
                    <div className="trust__list">
                        <div className="trust__list--title">We are trusted</div>
                        <div className="trust__list--elements">
                            <div className="trust__list--elements-item">2000 clients worldwide</div>
                            <div className="trust__list--elements-item">50 reliable partners</div>
                            <div className="trust__list--elements-item">25 suppliers</div>
                            <div className="trust__list--elements-item">30 best franchisees</div>
                            <div className="trust__list--elements-item">110 furniture manufacturers</div>
                            <div className="trust__list--elements-item">350 employees</div>
                            <div className="trust__list--elements-item">20 reliable sponsors</div>
                            <div className="trust__list--elements-item">50 offices around the world</div>
                        </div>
                    </div>
                    <div className="trust__contact">
                        <ContactCheckout />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trust