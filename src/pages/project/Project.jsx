import './project.scss'
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {NavLink, useParams} from 'react-router-dom';
import {portfolioDetailsAction} from '../../entities/portfolio/actions/portfolioActions';
import {MessageBox, LoadingBox} from '../../shared/ui/box/boxes'
import BlockArchitect from '../../shared/block-architect/BlockArchitect';
import BlockContentProject from '../../shared/block-content-project/BlockContentProject';
import GalleryPhoto from '../../shared/gallery-photo/GalleryPhoto';
import GalleryImage from '../../shared/gallery-image/GalleryImage';
import GalleryCarousel from '../../shared/gallery-carousel/GalleryCarousel';

const Project = (props) => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const typeImagePortfolio = "projectPortfolio"
    const typeImageDesign = "projectDesign"

    const portfolioDetail = useSelector((state) => state.portfolioDetailsReducer);
    const {isLoadingProject, errorProject, project} = portfolioDetail;

    useEffect(() => {
        dispatch(portfolioDetailsAction(id));
    }, [dispatch, id]);

    // const replaceStr = (str) => {
    //     return str.replace(/\s/g, "+");
    // };
    //
    // const addressMap = `https://www.google.com/maps?q=${replaceStr(project.address)}`;

    return (
        <div className="project">
            <div className="top">
                <ul className="breadcrumbs">
                    <li className="breadcrumbs__item">
                        <NavLink className="breadcrumbs__link" to="/">Home -></NavLink>
                    </li>
                    <li className="breadcrumbs__item">
                        <NavLink className="breadcrumbs__link" to="/portfolio">Portfolio -></NavLink>
                    </li>
                    <li className="breadcrumbs__item">
                        <span className="breadcrumbs__link">{project.title}</span>
                    </li>
                </ul>
                <NavLink className="breadcrumbs__link" href="" rel="noreferrer" target="_blank">
                    Address: {project.address}
                </NavLink>
            </div>
            {isLoadingProject && <LoadingBox></LoadingBox>}
            {errorProject && <MessageBox variant="errorVariant">{errorProject}</MessageBox>}
            <GalleryCarousel pageId={id} typeImage={typeImagePortfolio}/>
            <div className="container">
                <div className="project__inner">
                    <h1 className="project__title">{project.title}</h1>
                    <span className="project__category">category:&nbsp;&nbsp;</span>
                    <NavLink
                        className="category__link"
                        to={`/category/${project.categoryId}`}
                    >
                        {project.category}
                    </NavLink>
                    <div className="project__address">address:&nbsp;&nbsp;{project.address}</div>
                    <div className="project__address">status:&nbsp;&nbsp;{project.status}</div>
                    <div className="project__content">
                        <div className="project__content-main">
                            <div className="project__content-main__info">{project.anons}</div>
                            <GalleryPhoto pageId={id} typeImage={typeImageDesign}/>
                            <div className="project__content-main__info">{project.block}</div>
                            <div className="project__content-main__info">{project.text}</div>
                            {/*<GalleryImage projectId={project.Id}/>*/}
                        </div>
                        <div className="project__content-blocks">
                            <BlockArchitect architectId={project.architectId}/>
                            <BlockContentProject parameterId={project.parameterId}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project