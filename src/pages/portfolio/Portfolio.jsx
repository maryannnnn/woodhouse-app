import './portfolio.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {portfolioListAction} from "../../entities/portfolio/actions/portfolioActions";
import {LoadingBox, MessageBox} from "../../shared/ui/box/boxes";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import {NavLink} from "react-router-dom";

const Portfolio = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(portfolioListAction())
    }, [dispatch])

    const projectList = useSelector(state => state.portfolioListReducer)
    const {isLoadingPortfolio, errorPortfolio, projects} = projectList

    return (
        <div className="portfolio">
            <div className="top">
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
            </div>
            <div className="container">
                <h1 className="portfolio__title">Portfolio</h1>
                <div className="portfolio__inner">
                    {isLoadingPortfolio && <LoadingBox></LoadingBox>}
                    {errorPortfolio && <MessageBox variant="errorVariant">{errorPortfolio}</MessageBox>}
                    {console.log("Project List", projects)}
                    {projects
                        .map(element =>
                            <div key={element.id}>
                                <PortfolioElement element={element}/>
                            </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Portfolio