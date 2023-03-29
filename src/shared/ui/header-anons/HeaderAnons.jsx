import './header-anons.scss'

const HeaderAnons = ({header}) => {

    

    return(
        <div className="header-anons">
            <div className="header-anons__left">
               <h2 className="header-anons__left-title">{header.title}</h2>
               <div className="header-anons__left-subtitle">{header.subtitle}</div>
            </div>
            <p className="header-anons__right">
                {header.text}
            </p>
        </div>
    )
}

export default HeaderAnons;