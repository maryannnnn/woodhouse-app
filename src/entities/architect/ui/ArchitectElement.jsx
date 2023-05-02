import './architect-element.scss'
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {architectDetailsAction} from "../actions/architectActions";

const ArchitectElement = (props) => {

    const dispatch = useDispatch();

    const architectDetail = useSelector((state) => state.architectDetailsReducer);
    const {isLoadingArchitect, errorArchitect, architect} = architectDetail;

    const projects = architect.projects

    useEffect(() => {
        dispatch(architectDetailsAction(props.userId));
    }, [dispatch, props.userId]);

    return (
        <div className="architect">
            <NavLink
                className="architect__link"
                to={`/architect/${architect.id}`}
            >
                <h3 className="architect__profession">{architect.profession}</h3>
            </NavLink>
            <NavLink
                className="architect__link"
                to={`/architect/${architect.id}`}
            >
            <img
                className="architect__img"
                src={architect.thumbnail}
                alt={architect.profession}
            />
            </NavLink>
            <NavLink
                className="architect__link"
                to={`/architect/${architect.id}`}
            >
                <span className="architect__name"><strong>{architect.name} {architect.family}</strong></span>
            </NavLink>
            <div className="architect__anons">
                {architect.anons}
            </div>
            <div className="projects">
                <h4 className="projects__name">Projects of {architect.name} {architect.family}</h4>
                {Array.isArray(projects) && projects.length !== 0 ? (
                    <div className="projects__items">
                        {projects.map(item => (
                            <NavLink className="projects__link" key={item.id} to={`/portfolio/${item.id}`}>
                                <span className="projects__title">{item.title}</span>
                            </NavLink>
                        ))
                        }
                    </div>
                ) : (
                    <p>No projects available.</p>
                )
                }
            </div>
        </div>
    )
}

export default ArchitectElement