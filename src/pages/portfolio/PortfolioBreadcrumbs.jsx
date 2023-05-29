import React from 'react';
import {NavLink} from "react-router-dom";

const PortfolioBreadcrumbs = () => {
    return (
        <>
            <ul className="breadcrumbs">
                <li className="breadcrumbs__item">
                    <NavLink className="breadcrumbs__link" to="/">Home -></NavLink>
                </li>
                <li className="breadcrumbs__item">
                    <NavLink className="breadcrumbs__link" to="/portfolio">Portfolio -></NavLink>
                </li>
                <li className="breadcrumbs__item">
                    <span className="breadcrumbs__link">Portfolio</span>
                </li>
            </ul>
        </>
    );
};

export default PortfolioBreadcrumbs;