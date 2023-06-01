import './portfolio.scss'
import './media.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {portfolioListAction} from "../../entities/portfolio/actions/portfolioActions";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import Pagination from "../../shared/paginagion/Pagination";
import FilterPortfolio from "../../shared/filter-portfolio/FilterPortfolio";
import PortfolioBreadcrumbs from "./PortfolioBreadcrumbs";
import {useFilteredProjects} from "../../entities/portfolio/hooks/useFilteredProjects";

const Portfolio = () => {

    const dispatch = useDispatch()

    const [pageNumber, setPageNumber] = useState(1);
    const [filter, setFilter] = useState({title: '', categoryId: 'All', architectId: 'All', status: 'All', price: [10, 100000], itemsPerPage: 9})
    const {filteredProjects, isLoadingPortfolio, errorPortfolio} = useFilteredProjects(filter)
    const {totalPages} = useSelector(state => state.portfolioListReducer)

    console.log('filteredProjects', filteredProjects)

    useEffect(() => {
        dispatch(portfolioListAction({
            pageNumber,
            itemsPerPage: filter.itemsPerPage,
            status: filter.status,
            categoryId: filter.categoryId,
            architectId: filter.architectId
        }))
    }, [dispatch, pageNumber, filter.itemsPerPage, filter.status, filter.categoryId, filter.architectId, totalPages])


    return (
        <div className="portfolio">
            <div className="container">
                <div className="portfolio__top">
                    <PortfolioBreadcrumbs/>
                </div>
                <h1 className="portfolio__title">Portfolio</h1>
                <div className="portfolio__inner">
                    <div className="portfolio__inner-main">
                        {filteredProjects.map(project =>
                            <PortfolioElement project={project} key={project.id}/>
                        )}
                    </div>
                    <div className="portfolio__inner-blocks">
                        <FilterPortfolio filter={filter} setFilter={setFilter}/>
                    </div>
                </div>
                <Pagination totalPages={totalPages} currentPage={pageNumber} setPageNumber={setPageNumber}/>
            </div>
        </div>
    )
}

export default Portfolio