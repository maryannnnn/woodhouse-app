import './header.scss'
import Button from "../../shared/ui/btn/Button";

const Header = () => {

    const clickHandlerDesign = () => {

    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__info">
                        <h1 className="header__info-title">Wooden interiors</h1>
                        <Button
                            type="submit"
                            className="button-1"
                            onClick={clickHandlerDesign}
                            name='High Level Design'
                        />
                        <p className="header__info-text">
                            The development and implementation of beautiful wood
                            interiors has never been so accessible. Interiors made
                            of wood of various species will make your home cozy and warm,
                            delighting you and your guests.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header