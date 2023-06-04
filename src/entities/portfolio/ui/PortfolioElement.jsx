import './portfolio-element.scss'
import './media.scss'
import {NavLink} from 'react-router-dom';
import {shortText} from "../../../app/utilities/service";

const PortfolioElement = (props) => {
    const title = shortText(props.project.title, 25)
    const anons = shortText(props.project.anons, 70)

    return (
        <div className="portfolio-element">
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.project.id}`}
            >
                <img
                    className="portfolio-element__img"
                    src={props.project.image}
                    alt={props.project.alt}
                />
            </NavLink>

            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.project.id}`}
                title={props.project.title}
            >
                <h3 className="portfolio-element__title">{title}</h3>
                <div className="portfolio-element__budget">budget: {props.project.price}$</div>
            </NavLink>
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.project.id}`}
            >
                <div className="portfolio-element__anons">{anons}</div>
            </NavLink>
        </div>
    )
}

export default PortfolioElement