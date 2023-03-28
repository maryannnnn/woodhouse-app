import './header.scss'
import Button from "../../shared/ui/btn/Button";

const Header = ({ headerMain }) => {

    const clickHandlerDesign = () => {

    }

    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <div className="header__info">
              <h1 className="header__info-title">{headerMain.title}</h1>
                        <Button
                            type="submit"
                            className="button-1"
                            onClick={clickHandlerDesign}
                            name={headerMain.subtitle}
                        />
                        <p className="header__info-text">
                            {headerMain.text}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header