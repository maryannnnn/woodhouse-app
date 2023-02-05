import './anons-widget.scss'
import HeaderAnons from "../../../shared/ui/header-anons/HeaderAnons";
import ButtonAnons from "../../../shared/ui/btn-anos/ButtonAnons";
import BodyAnons from "../../../shared/ui/body-anons/BodyAnons";

const AnonsWidget = (props) => {
    return(
        <div className="anons-widget">
            <div className="container">
                <div className="anons-widget__inner">
                    <HeaderAnons header={props.header} />
                    <BodyAnons body={props.body} colomn={3} />
                    <ButtonAnons link={"/portfolio"} />
                </div>
            </div>
        </div>
    )
}

export default AnonsWidget