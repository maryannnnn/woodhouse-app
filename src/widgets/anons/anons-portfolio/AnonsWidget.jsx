import './anons-widget.scss'
import HeaderAnons from "../../../shared/ui/header-anons/HeaderAnons";
import ButtonAnons from "../../../shared/ui/btn-anons/ButtonAnons";
import BodyAnons from "../../../shared/ui/body-anons/BodyAnons";

const AnonsWidget = (props) => {
    return(
        <div className="anons-widget">
            <div className="container">
                <div className="anons-widget__inner">
                  {console.log("props.header", props.headerPortfolio)}
                  {console.log("props.body", ...props.body)}
                  <HeaderAnons header={props.headerPortfolio} />
                  <BodyAnons body={props.body} column={3} />
                  <ButtonAnons link={"/portfolio"} />
                </div>
            </div>
        </div>
    )
}

export default AnonsWidget