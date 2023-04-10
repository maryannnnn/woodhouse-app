import './portfolio-element.scss'
import { NavLink } from 'react-router-dom';

const PortfolioElement = (props) => {
  return (
    <div className="portfolio-element">
      <NavLink
        className="portfolio-element__link"
        to={`/portfolio/${props.element.pageId}`}
      >
        <img
          className="portfolio-element__img"
          src={props.element.src}
          alt={props.element.alt}
        />
      </NavLink>
      <span className="portfolio-element__category">Category: {props.element.category}</span>
      <NavLink
        className="portfolio-element__link"
        to={`/portfolio/${props.element.pageId}`}
      >
        <h3 className="portfolio-element__title">{props.element.title}</h3>
      </NavLink>
    </div>
  )
}

export default PortfolioElement