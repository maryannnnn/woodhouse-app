import './menu-footer.scss'
import {NavLink} from "react-router-dom";

const MenuFooter = ({menu, count}) => {
    return (
        <div className="menu-footer">
		<h3 className="menu-footer__title">{menu.title}</h3>
            <h3 className="menu-footer__title">{menu.title}</h3>
            <div className="menu-footer__elements">
                {menu.elements.filter(item => (item.id < count))
                    .map(item =>
                        <NavLink
                            className="menu-footer__elements-link"
                            to={item.url}
                            key={item.id}
                        >{item.name}</NavLink>
                    )
                }
            </div>
        </div>
    )
}

export default MenuFooter