import './anons-body-portfolio.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioElement from "../../../entities/portfolio/ui/PortfolioElement";
import { portfolioWidgetAction } from '../../../entities/portfolio/actions/portfolioActions';
import { MessageBox, LoadingBox } from '../box/boxes'

const BodyAnons = () => {
  // const { pageNumber = 1 } = useParams()
  const start = 0
  const end = 3

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(portfolioWidgetAction(start, end))
  }, [dispatch])

  const portfolioWidget = useSelector(state => state.portfolioWidgetReducer)
  const { isLoadingPortfolio, errorPortfolio, projects } = portfolioWidget

  return (
    <div className="body-anons">
      {isLoadingPortfolio && <LoadingBox></LoadingBox>}
      {errorPortfolio && <MessageBox variant="errorVariant">{errorPortfolio}</MessageBox>}
      {console.log("projects Widget", ...projects)}
      {projects
        .map(element =>
          <div key={element.id}>
            <PortfolioElement element={element} />
          </div>
        )}
    </div>
  )
}

export default BodyAnons