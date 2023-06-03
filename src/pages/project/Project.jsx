import './project.scss'
import './madia.scss'
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
import CommentsPage from "../../features/comments-page/CommentsPage";
import ProjectBreadcrumbs from "./ProjectBreadcrumbs";
import {parameterDetailsAction} from "../../entities/parameter/actions/parameterActions";
import PolarAreaChartProject from "../../shared/charts/polar-area/PolarAreaChartProject";

const Project = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const typeImagePortfolio = "projectPortfolio"
    const typePage = "projectPortfolio"
    const typeImageDesign = "projectDesign"

    const parameterDetail = useSelector((state) => state.parameterDetailsReducer);
    const {parameter} = parameterDetail;

    const portfolioDetail = useSelector((state) => state.portfolioDetailsReducer);
    const {isLoadingProject, errorProject, project} = portfolioDetail;

    useEffect(() => {
        dispatch(parameterDetailsAction(project.parameterId));
    }, [dispatch, project.parameterId]);

    useEffect(() => {
        dispatch(portfolioDetailsAction(id));
    }, [dispatch, id]);


    return (
        <div className="project">
            {isLoadingProject && <LoadingBox/>}
            {errorProject && <MessageBox variant="errorVariant">{errorProject}</MessageBox>}
            <div className="container">
                <div className="top">
                    <ProjectBreadcrumbs project={project}/>
                </div>
                <GalleryCarousel pageId={id} typeImage={typeImagePortfolio}/>
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
                    <div className="project__address">budget:&nbsp;&nbsp;{project.price}$</div>
                    <div className="project__address">status:&nbsp;&nbsp;{project.status}</div>
                    <div className="project__content">
                        <div className="project__content-main">
                            <div className="project__content-main__info">{project.anons}</div>
                            <GalleryPhoto pageId={id} typeImage={typeImageDesign}/>
                            <div className="project__content-main__info">{project.block}</div>
                            <div className="project__content-main__info">{project.text}</div>
                            <CommentsPage postId={id} typePage={typePage}/>
                            {/*<GalleryImage projectId={project.Id}/>*/}
                        </div>
                        <div className="project__content-blocks">
                            <BlockArchitect architectId={project.architectId}/>
                            <BlockContentProject parameter={parameter}/>
                            <div className="polar-chart">
                                {parameter?.prices &&
                                    <PolarAreaChartProject prices={parameter?.prices}/>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project