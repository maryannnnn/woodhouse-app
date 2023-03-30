import './anons-body-portfolio.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioElement from "../../../entities/portfolio/ui/PortfolioElement";
import { portfolioListAction } from '../../../entities/portfolio/actions/portfolioActions';
import { MessageBox, LoadingBox } from '../box/boxes'

const BodyAnons = () => {
  // const { pageNumber = 1 } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(portfolioListAction())
  }, [dispatch])

  const portfolioList = useSelector(state => state.portfolioListReducer)
  const { isLoading, error, projects } = portfolioList

  return (
    <div className="body-anons">
      {isLoading && <LoadingBox></LoadingBox>}
      {error && <MessageBox variant="errorVariant">{error}</MessageBox>}
      {console.log("projects", ...projects)}
      {projects.sort((a, b) => b.id - a.id)
      .filter(element => (element.id < 3))
        .map(element =>
          <div key={element.id}>
            <PortfolioElement element={element} />
          </div>
        )}
    </div>
  )
}

export default BodyAnons