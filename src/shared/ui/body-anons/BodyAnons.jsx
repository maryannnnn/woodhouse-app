import './body-anons.scss'
import PortfolioElement from "../../../entities/portfolio/ui/PortfolioElement";

const BodyAnons = (props) => {

    return (
        <div className="body-anons">
            {props.body.filter(element => (element.id < props.colomn))
                .map(element =>
                <div key={element.id}>
                    <PortfolioElement element={element} />
                </div>
            )}
        </div>
    )
}

export default BodyAnons