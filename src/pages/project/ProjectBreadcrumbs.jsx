import React from 'react';
import {NavLink} from "react-router-dom";

const ProjectBreadcrumbs = ({project}) => {
    return (
        <>
            <ul className="top__breadcrumbs">
                <li className="top__breadcrumbs-item">
                    <NavLink className="top__breadcrumbs-link" to="/">Home -></NavLink>
                </li>
                <li className="top__breadcrumbs__item">
                    <NavLink className="top__breadcrumbs-link" to="/portfolio">Portfolio -></NavLink>
                </li>
                <li className="top__breadcrumbs-item">
                    <span className="top__breadcrumbs-link">{project.title}</span>
                </li>
            </ul>
            <NavLink className="top__breadcrumbs-link" href="" rel="noreferrer" target="_blank">
                Address: {project.address}
            </NavLink>
        </>
    );
};

export default ProjectBreadcrumbs;