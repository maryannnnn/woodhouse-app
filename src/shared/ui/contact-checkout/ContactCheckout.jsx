import './contact-checkout.scss'
import Button from "../../btn/Button";
import FormCheckout from "../../../features/form-checkout/FormCheckout";
import Modal from "../../modal/Modal";
import {useState} from "react";

const ContactCheckout = () => {
    const [modalActive, setModalActive] = useState(false)
    const clickHandlerContact = (e) => {
        e.preventDefault()
        setModalActive(true)
    }
    return (
        <div className="contact-block">
            <div className="contact-block__info">
                Call us or leave a request from the site.
                We will call you back within 10 minutes.
            </div>
            <div className="contact-block__mobile">
                +1 662-457-2739
            </div>
            <Button
                type="submit"
                className="button-contact"
                onClick={clickHandlerContact}
                name='Apply Now'
            />
            <Modal active={modalActive} setActive={setModalActive}>
                <FormCheckout />
            </Modal>
        </div>
    )
}

export default ContactCheckout;