import React, {useState, useCallback, useEffect} from "react";
import Gallery from "react-photo-gallery";
import Carousel, {Modal, ModalGateway} from "react-images";
import {useDispatch, useSelector} from "react-redux";
import {imagePhotoAction} from "../../entities/image/actions/imageActions";
import {LoadingBox, MessageBox} from "../ui/box/boxes";

const GalleryPhoto = (props) => {

    const dispatch = useDispatch();

    const imageCarousel = useSelector((state) => state.imagePhotoReducer);
    const {isLoadingImage, errorImage, images} = imageCarousel;

    useEffect(() => {
        dispatch(imagePhotoAction(props.pageId, props.typeImage));
    }, [dispatch, props.pageId, props.typeImage]);

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, {photo, index}) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <>
            {images.length !== 0 ? (
                <>
                    <Gallery photos={images} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={images.map(x => ({
                                        ...x,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </>
            ) : (
                <p>No images available.</p>
            )}
        </>
    )
};

export default GalleryPhoto;
