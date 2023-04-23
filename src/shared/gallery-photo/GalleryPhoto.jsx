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

    const generatePhoto = (images) => {
        const photos = []
        images.map(item => {
            photos.push({
                title: item.title,
                src: item.original,
                width: item.width,
                height: item.height
            })
        })
        return photos
    }

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
                    {isLoadingImage && <LoadingBox></LoadingBox>}
                    {errorImage && <MessageBox variant="errorVariant">{errorImage}</MessageBox>}
                    <Gallery photos={generatePhoto(images)} onClick={openLightbox}/>
                    <ModalGateway>
                        {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                                <Carousel
                                    currentIndex={currentImage}
                                    views={generatePhoto(images).map(x => ({
                                        ...x,
                                        key: x.id,
                                        srcset: x.srcSet,
                                        caption: x.title
                                    }))}
                                />
                            </Modal>
                        ) : null}
                    </ModalGateway>
                </>) : (
                <p>No images available.</p>
            )}
        </>
    )
};

export default GalleryPhoto;
