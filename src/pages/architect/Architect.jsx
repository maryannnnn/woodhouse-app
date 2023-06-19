import './architect.scss'
import './media.scss'
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import {architectDetailsAction} from "../../entities/architect/actions/architectActions";

const Architect = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {isLoadingArchitect, errorArchitect, architect, architectProjects} = useSelector((state) => state.architectDetailsReducer);

    useEffect(() => {
        dispatch(architectDetailsAction(id));
    }, [dispatch, id]);

    return (
        <div className="architect">
            <div className="container">
                <div className="architect__top">
                    <ul className="architect__breadcrumbs">
                        <li className="architect__breadcrumbs-item">
                            <NavLink className="architect__breadcrumbs-link" to="/">Home -></NavLink>
                        </li>
                        <li className="architect__breadcrumbs-item">
                            <NavLink className="architect__breadcrumbs-link" to="/architect">Architects -></NavLink>
                        </li>
                        <li className="architect__breadcrumbs-item">
                            <span className="architect__breadcrumbs-link">{architect.name}&nbsp;{architect.family}</span>
                        </li>
                    </ul>
                </div>
                <h1 className="architect__title">{architect.name}&nbsp;{architect.family}</h1>
                <div className="architect__profession">Profession:&nbsp;{architect.profession}</div>
                <div className="architect__info">
                    <img
                        className="architect__img"
                        src={architect.image}
                        alt={architect.alt}
                    />
                    <div className="architect__anons">
                        {architect.info}
                    </div>
                </div>
                <h4 className="architect__name">Projects of {architect.name}&nbsp;{architect.family}</h4>
                <div className="architect__inner">
                    <div className="architect__inner-main">
                                {architectProjects.map((project) =>
                                    <div key={project.id}>
                                        <PortfolioElement project={project}/>
                                    </div>
                                )}
                    </div>
                    <div className="architect__inner-blocks">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Architect

