import './anons-portfolio.scss'
import HeaderAnons from "../../../shared/ui/header-anons/HeaderAnons";
import ButtonAnons from "../../../shared/ui/btn-anons/ButtonAnons";
import AnonsBodyPortfolio from "../../../shared/body-anons/AnonsBodyPortfolio";

const AnonsPortfolio = () => {

  return (
    <div className="anons-widget">
      <div className="container">
        <div className="anons-widget__inner">
          <HeaderAnons />
          <AnonsBodyPortfolio />
          <ButtonAnons link={"/portfolio"} />
        </div>
      </div>
    </div>
  )
}

export default AnonsPortfolio