import './anons-body-portfolio.scss'
import './media.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioElement from "../../entities/portfolio/ui/PortfolioElement";
import { MessageBox, LoadingBox } from '../ui/box/boxes'
import {portfolioWidgetAction} from "../../entities/portfolio/actions/portfolioActions";

const BodyAnons = () => {
  const start = 0
  const end = 3

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(portfolioWidgetAction(start, end))
  }, [dispatch])

  const projectWidget = useSelector(state => state.portfolioWidgetReducer)
  const { isLoadingProject, errorProject, projects } = projectWidget

  return (
    <div className="body-anons">
      {isLoadingProject && <LoadingBox></LoadingBox>}
      {errorProject && <MessageBox variant="errorVariant">{errorProject}</MessageBox>}
      {projects
        .map(project =>
          <div key={project.id}>
            <PortfolioElement project={project} />
          </div>
        )}
    </div>
  )
}

export default BodyAnons