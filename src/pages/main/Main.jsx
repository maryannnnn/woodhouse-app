import './main.scss'
import Header from "../../widgets/header/Header";
import Trust from "../../widgets/trust/Trust";
import Partner from "../../widgets/partners/Partner";
import AnonsPortfolio from "../../widgets/anons/anons-portfolio/AnonsPortfolio";

const Main = () => {
  <Header />
  return (
    <div className="main">
      <Header />
      <Trust />
      <AnonsPortfolio />
      <Partner />
    </div>
  )
}

export default Main