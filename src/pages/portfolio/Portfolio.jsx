import './portfolio.scss'
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {portfolioListAction} from "../../entities/portfolio/actions/portfolioActions";
import {LoadingBox, MessageBox} from "../../shared/ui/box/boxes";
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import {NavLink} from "react-router-dom";
import Pagination from "../../shared/paginagion/Pagination";
import FilterPortfolio from "../../shared/filter-portfolio/FilterPortfolio";

const Portfolio = () => {

    const [pageNumber, setPageNumber] = useState(1);
    const [filter, setFilter] = useState({title: '', categoryId: 'All', architectId: 'All', price: [10, 40000], status: 'All', itemsPerPage: 9})

    const dispatch = useDispatch()

    const projectList = useSelector(state => state.portfolioListReducer)
    const {isLoadingPortfolio, errorPortfolio, projects, totalPages} = projectList

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
                        {isLoadingPortfolio ? (
                            <LoadingBox />
                        ) : errorPortfolio ? (
                            <MessageBox variant="errorVariant">{errorPortfolio}</MessageBox>
                        ) : (
                            <>
                                {projects
                                    .filter(item =>
                                        item.title.toLowerCase().includes(filter.title.toLowerCase()) &&
                                        (item.price >= filter.price[0] ) &&
                                        (item.price <= filter.price[1] )
                                    )
                                    .map(element =>
                                        <div key={element.id}>
                                            <PortfolioElement element={element}/>
                                        </div>
                                    )}
                            </>
                        )}
                    </div>
                    <div className="portfolio__inner-blocks">
                        <FilterPortfolio filter={filter} setFilter={setFilter} />
                    </div>
                </div>
                <div>
                    <Pagination totalPages={totalPages} currentPage={pageNumber} setPageNumber={setPageNumber}/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio