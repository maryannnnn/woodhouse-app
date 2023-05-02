import './portfolio.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {portfolioListAction} from "../../entities/portfolio/actions/portfolioActions";
import {LoadingBox, MessageBox} from "../../shared/ui/box/boxes";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import {NavLink} from "react-router-dom";
import Pagination from "../../shared/paginagion/Pagination";

const Portfolio = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(9);
    const [pages, setPages] = useState([]);

    const dispatch = useDispatch()

    const projectList = useSelector(state => state.portfolioListReducer)
    const {isLoadingPortfolio, errorPortfolio, projects, projectsLength} = projectList

    const totalPages = Math.ceil(projectsLength/ itemsPerPage);
    console.log("projectsLength", projectsLength)

    useEffect(() => {
        dispatch(portfolioListAction(pageNumber, itemsPerPage))
        generatePages(totalPages)
    }, [dispatch, pageNumber, itemsPerPage, totalPages])

    const generatePages = (totalPages) => {
        const pageNumbers = [];
        for (let i = 1; i <= totalPages; i++) {
            pageNumbers.push(i);
        }
        setPages(pageNumbers);
        console.log("pageNumbers", pageNumbers)
    };

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
                    {isLoadingPortfolio ? (
                        <LoadingBox></LoadingBox>
                    ) : errorPortfolio ? (
                        <MessageBox variant="errorVariant">{errorPortfolio}</MessageBox>
                    ) : (
                        <>
                            {console.log("Project List", projects)}
                            {projects
                                .map(element =>
                                    <div key={element.id}>
                                        <PortfolioElement element={element}/>
                                    </div>
                                )}
                        </>
                    )}
                </div>
                <Pagination  totalPages={totalPages}  pages={pages} currentPage={pageNumber} setPageNumber={setPageNumber} />
            </div>
        </div>
    )
}

export default Portfolio