import './portfolio-element.scss'
import { NavLink } from 'react-router-dom';
import {shortText} from "../../../app/utilities/service";

const PortfolioElement = (props) => {

    const title = shortText(props.element.title, 25)
    const anons = shortText(props.element.anons, 70)

  return (
    <div className="portfolio-element">
        {console.log("portfolioElement", props.element)}
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
      <span className="portfolio-element__category">{props.element.category}</span>
      <NavLink
        className="portfolio-element__link"
        to={`/portfolio/${props.element.id}`}
      >
        <h3 className="portfolio-element__title">{title}</h3>
      </NavLink>
        <div className="portfolio-element__anons">{anons}</div>
    </div>
  )
}

export default PortfolioElement