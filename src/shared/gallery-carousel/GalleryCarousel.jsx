import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const GalleryCarousel = () => {
  return (
      <Carousel>
        <div>
          <img src="/uploads/portfolio/big/portfolio-big-0.jpeg" alt="" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
        <img src="/uploads/portfolio/big/portfolio-big-0.jpeg" alt="" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
        <img src="/uploads/portfolio/big/portfolio-big-0.jpeg" alt="" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      )
}

export default GalleryCarousel