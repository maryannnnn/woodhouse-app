import './portfolio-element.scss'
import {NavLink} from 'react-router-dom';

const PortfolioElement = (props) => {
    console.log("")
    return (
        <div className="portfolio-element">
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.element.slug}`}
            >
                <img
                    className="portfolio-element__img"
                    src={props.element.previewImage}
                    alt={props.element.title}
                />
            </NavLink>
            <span className="portfolio-element__category">Category: {props.element.category}</span>
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.element.slug}`}
            >
                <h3 className="portfolio-element__title">{props.element.title}</h3>
            </NavLink>
        </div>
    )
}

export default PortfolioElement