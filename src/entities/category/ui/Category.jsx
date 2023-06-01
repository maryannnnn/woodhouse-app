import './category.scss'
import {NavLink, useParams} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {LoadingBox, MessageBox} from "../../../shared/ui/box/boxes";
import PortfolioElement from "../../portfolio/ui/PortfolioElement";
import {categoryDetailsAction} from "../actions/categoryActions";

const Category = () => {
    const dispatch = useDispatch();
    const {id} = useParams();

    const {isLoadingCategory, errorCategory, category, categoryProjects} = useSelector((state) => state.categoryDetailsReducer);

    useEffect(() => {
        dispatch(categoryDetailsAction(id));
    }, [dispatch, id]);

    return (
        <div className="category">
            <div className="container">
                <div className="category__top">
                    <ul className="category__breadcrumbs">
                        <li className="category__breadcrumbs-item">
                            <NavLink className="category__breadcrumbs-link" to="/">Home -></NavLink>
                        </li>
                        <li className="category__breadcrumbs-item">
                            <NavLink className="category__breadcrumbs-link" to="/category">Category -></NavLink>
                        </li>
                        <li className="category__breadcrumbs-item">
                            <span className="category__breadcrumbs-link">{category.name}</span>
                        </li>
                    </ul>
                </div>
                <h1 className="category__name">{category.name}</h1>
                <div className="category__info">
                    <img
                        className="category__img"
                        src={category.categoryImage}
                        alt={category.name}
                    />
                    <div className="category__description">
                        {category.description}
                    </div>
                </div>
                <div className="category__inner">
                    <div className="category__inner-main">
                                {categoryProjects.map((project) =>
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

export default Category