import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";

export const useFilteredProjects = (filter) => {

    const [filteredProjects, setFilteredProjects] = useState([])
    const {projects, isLoadingPortfolio, errorPortfolio,} = useSelector(state => state.portfolioListReducer)

    useEffect(() => {

        const filteredProjects = projects.filter(item =>
            item.title.toLowerCase().includes(filter.title.toLowerCase()) &&
            item.price >= filter.price[0] &&
            item.price <= filter.price[1]
        );
        setFilteredProjects(filteredProjects);

    }, [projects, filter]);

    return {filteredProjects, isLoadingPortfolio, errorPortfolio};
};
