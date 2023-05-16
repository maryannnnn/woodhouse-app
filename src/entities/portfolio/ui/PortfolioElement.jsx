import './portfolio-element.scss'
import {NavLink} from 'react-router-dom';
import {shortText} from "../../../app/utilities/service";

const PortfolioElement = (props) => {

    const title = shortText(props.element.title, 25)
    const anons = shortText(props.element.anons, 70)

    return (
        <div className="portfolio-element">
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.element.id}`}
            >
                <img
                    className="portfolio-element__img"
                    src={props.element.image}
                    alt={props.element.alt}
                />
            </NavLink>
            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.element.id}`}
                title={props.element.title}
            >
                <h3 className="portfolio-element__title">{title}</h3>
                <span className="portfolio-element__budget">budget&nbsp;{props.element.price}$</span>
                <span className="portfolio-element__budget">,&nbsp;&nbsp;comments&nbsp;&nbsp;{props.element.numberComments}</span>
            </NavLink>
            <NavLink
                className="portfolio-element__category-link"
                to={`/category/${props.element.categoryId}`}
            >
                <span className="portfolio-element__category">category&nbsp;{props.element.category}</span>
            </NavLink>
            <NavLink
                className="portfolio-element__architect-link"
                to={`/architect/${props.element.architectId}`}
            >
                <span className="portfolio-element__architect">arch&nbsp;{props.element.architect},</span>
                <span className="portfolio-element__architect">&nbsp;&nbsp;status&nbsp;{props.element.status}</span>
            </NavLink>


            <NavLink
                className="portfolio-element__link"
                to={`/portfolio/${props.element.id}`}
            >
                <div className="portfolio-element__anons">{anons}</div>
            </NavLink>
        </div>
    )
}

export default PortfolioElement