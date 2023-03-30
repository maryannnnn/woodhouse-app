import './anons-portfolio.scss'
import HeaderAnons from "../../../shared/ui/header-anons/HeaderAnons";
import ButtonAnons from "../../../shared/ui/btn-anons/ButtonAnons";
import AnonsBodyPortfolio from "../../../shared/ui/body-anons/AnonsBodyPortfolio";

const AnonsPortfolio = (props) => {
  return (
    <div className="anons-widget">
      <div className="container">
        <div className="anons-widget__inner">
          <HeaderAnons headerListDto={props.headerListDto} />
          <AnonsBodyPortfolio />
          <ButtonAnons link={"/portfolio"} />
        </div>
      </div>
    </div>
  )
}

export default AnonsPortfolio