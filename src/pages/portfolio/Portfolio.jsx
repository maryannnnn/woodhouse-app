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
    const [pages, setPages] = useState([]);
    const [filter, setFilter] = useState({title: '', category: '', architect: '', price: '', status: '', items: 9})

    const dispatch = useDispatch()

    const projectList = useSelector(state => state.portfolioListReducer)
    const {isLoadingPortfolio, errorPortfolio, projects, projectsLength} = projectList

    const totalPages = Math.ceil(projectsLength / filter.items);
    console.log("projectsLength", projectsLength)

    useEffect(() => {
        dispatch(portfolioListAction(pageNumber, filter.items))
        generatePages(totalPages)
    }, [dispatch, pageNumber, filter.items, totalPages])

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
                    <div className="portfolio__inner-main">
                        {isLoadingPortfolio ? (
                            <LoadingBox></LoadingBox>
                        ) : errorPortfolio ? (
                            <MessageBox variant="errorVariant">{errorPortfolio}</MessageBox>
                        ) : (
                            <>
                                {console.log("Project List", projects)}
                                {projects
                                    .filter(item =>
                                        item.title.toLowerCase().includes(filter.title.toLowerCase()) &&
                                        item.category.toLowerCase().includes(filter.category.toLowerCase()) &&
                                        item.architect.toLowerCase().includes(filter.architect.toLowerCase()) &&
                                        (filter.status === '' || item.status === filter.status)
                                    )
                                    .map(element =>
                                        <div key={element.id}>
                                            <PortfolioElement element={element}/>
                                        </div>
                                    )}
                            </>
                        )}
                        <Pagination totalPages={totalPages} pages={pages} currentPage={pageNumber}
                                    setPageNumber={setPageNumber}/>
                    </div>
                    <div className="portfolio__inner-blocks">
                        <FilterPortfolio filter={filter} setFilter={setFilter}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio