import './main.scss'
import Header from "../../widgets/header/Header";
import Trust from "../../widgets/trust/trust";
import About from "../../widgets/about/About";
import Partner from "../../widgets/partners/Partner";
import AnonsWidget from "../../widgets/anons/anons-portfolio/AnonsWidget";
import {headerInfo} from "../../app/store/headerStore";
import {portfolioInfo} from "../../app/store/portfolioStore";


const Main = () => {
    return(
        <div className="main">
            <Header />
            <Trust />
            <AnonsWidget header={headerInfo} body={portfolioInfo}/>
            <About />
            <Partner />
        </div>
    )
}

export default Main