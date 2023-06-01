import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import {MessageBox, LoadingBox} from '../../shared/ui/box/boxes'
import {imageCarouselAction} from '../../entities/image/actions/imageActions';

const GalleryCarousel = (props) => {
    const dispatch = useDispatch();

    const imageCarousel = useSelector((state) => state.imageCarouselReducer);
    const {isLoadingImage, errorImage, images} = imageCarousel;

    useEffect(() => {
        dispatch(imageCarouselAction(props.pageId, props.typeImage));
    }, [dispatch, props.pageId, props.typeImage]);

    return (
        <>
            {images.length !== 0 ? (
                <>
                    <Carousel>
                        {images.map(img => (
                            <div key={img.id}>
                                <img src={img.original} alt={img.alt}/>
                                <p className="legend">{img.title}</p>
                            </div>
                        ))}
                    </Carousel>
                </>
            ) : (
                <p>No images available.</p>
            )
            }
        </>
    )
}
export default GalleryCarousel