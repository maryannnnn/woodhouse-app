import './anons-body-portfolio.scss'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PortfolioElement from "../../../entities/portfolio/ui/PortfolioElement";
import { imageWidgetAction } from '../../../entities/image/actions/imageActions';
import { MessageBox, LoadingBox } from '../box/boxes'

const BodyAnons = () => {
  // const { pageNumber = 1 } = useParams()
  const start = 0
  const end = 3
  //const typeImage = "projectPortfolio"

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(imageWidgetAction(start, end))
  }, [dispatch])

  const imageWidget = useSelector(state => state.imageWidgetReducer)
  const { isLoadingImage, errorImage, images } = imageWidget

  return (
    <div className="body-anons">
      {isLoadingImage && <LoadingBox></LoadingBox>}
      {errorImage && <MessageBox variant="errorVariant">{errorImage}</MessageBox>}
      {console.log("images Widget", ...images)}
      {images
        .map(element =>
          <div key={element.id}>
            <PortfolioElement element={element} />
          </div>
        )}
    </div>
  )
}

export default BodyAnons