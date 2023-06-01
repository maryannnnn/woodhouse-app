import './portfolio.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {portfolioListAction} from "../../entities/portfolio/actions/portfolioActions";
import {LoadingBox, MessageBox} from "../../shared/ui/box/boxes";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import {NavLink} from "react-router-dom";
import Pagination from "../../shared/paginagion/Pagination";
import FilterPortfolio from "../../shared/filter-portfolio/FilterPortfolio";
import {generatePages} from "../../app/utilities/service";

const Portfolio = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [pages, setPages] = useState([]);
    const [filter, setFilter] = useState({categoryId: 'All', architectId: 'All', status: 'All', itemsPerPage: 9})

    const dispatch = useDispatch()

    const {isLoadingPortfolio, errorPortfolio, projects, totalPages} = useSelector(state => state.portfolioListReducer)

    useEffect(() => {
        dispatch(portfolioListAction({
            pageNumber,
            itemsPerPage: filter.itemsPerPage,
            status: filter.status,
            categoryId: filter.categoryId,
            architectId: filter.architectId
        }))
        generatePages(totalPages, setPages)
    }, [dispatch, pageNumber, filter.itemsPerPage, filter.status, filter.categoryId, filter.architectId, totalPages])

    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__top">
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
                <h1 className="portfolio__title">Portfolio</h1>
                <div className="portfolio__inner">
                    <div className="portfolio__inner-main">
                                {projects.map((project) =>
                                        <div key={project.id}>
                                            <PortfolioElement project={project}/>
                                        </div>
                                    )}
                    </div>
                    <div className="portfolio__inner-blocks">
                        <FilterPortfolio filter={filter} setFilter={setFilter} />
                    </div>
                </div>
                <div>
                    <Pagination totalPages={totalPages} pages={pages} currentPage={pageNumber}
                                setPageNumber={setPageNumber}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio