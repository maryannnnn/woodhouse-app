import './project.scss'
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { portfolioDetailsAction } from '../../entities/portfolio/actions/portfolioActions';
import { MessageBox, LoadingBox } from '../../shared/ui/box/boxes'
import BlockArchitect from '../../shared/block-architect/BlockArchitect';
import BlockContentProject from '../../shared/block-content-project/BlockContentProject';
import GalleryPhoto from '../../shared/gallery-photo/GalleryPhoto';
import GalleryImage from '../../shared/gallery-image/GalleryImage';
import GalleryCarousel from '../../shared/gallery-carousel/GalleryCarousel';

const Project = (props) => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const portfolioDetail = useSelector((state) => state.portfolioDetailsReducer);
  const { isLoadingProject, errorProject, project } = portfolioDetail;

  useEffect(() => {
    dispatch(portfolioDetailsAction(id));
  }, [dispatch, id]);

  return (
    <div className="project">
      {isLoadingProject && <LoadingBox></LoadingBox>}
      {errorProject && <MessageBox variant="errorVariant">{errorProject}</MessageBox>}
      <GalleryCarousel projectId={project.Id} />
      <div className="container">
        <div className="project__inner">
          <h1 className="project__title">{project.title}</h1>
          <div className="project__content">
            <div className="project__content-main">
              <div className="project__content-main__info">{project.anons}</div>
              <GalleryPhoto projectId={project.Id} />
              <div className="project__content-main__info">{project.block}</div>
              <div className="project__content-main__info">{project.text}</div>
              <GalleryImage projectId={project.Id} />
            </div>
            <div className="project__content-blocks">
              <BlockArchitect architectId={project.architectId} />
              <BlockContentProject projectId={project.Id} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project