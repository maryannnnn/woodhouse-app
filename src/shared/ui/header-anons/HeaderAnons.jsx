import './header-anons.scss'

const HeaderAnons = (props) => {
    return(
        <div className="header-anons">
            <div className="header-anons__left">
               <h2 className="header-anons__left-title">{props.header[0].title}</h2>
               <div className="header-anons__left-subtitle">{props.header[0].subtitle}</div>
            </div>
            <p className="header-anons__right">
                {props.header[0].text}
            </p>
        </div>
    )
}

export default HeaderAnons;