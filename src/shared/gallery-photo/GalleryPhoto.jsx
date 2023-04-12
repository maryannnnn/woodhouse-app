import React, {useState, useCallback, useEffect} from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import {useDispatch, useSelector} from "react-redux";
import {imagePhotoAction} from "../../entities/image/actions/imageActions";
//import { photos } from "./photos";

const GalleryPhoto = (props) => {

  const dispatch = useDispatch();

  const imageCarousel = useSelector((state) => state.imagePhotoReducer);
  const { isLoadingImage, errorImage, images } = imageCarousel;

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

  // const photos = [
  //   {
  //     title: "Photo forest good",
  //     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
  //     width: 470,
  //     height: 250
  //   },
  //   {
  //     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
  //     width: 100,
  //     height: 100
  //   },
  //   {
  //     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
  //     width: 300,
  //     height: 400
  //   },
  //   {
  //     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
  //     width: 300,
  //     height: 400
  //   },
  //   {
  //     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
  //     width: 300,
  //     height: 400
  //   },
  //   {
  //     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
  //     width: 400,
  //     height: 300
  //   },
  //   {
  //     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
  //     width: 300,
  //     height: 400
  //   },
  //   {
  //     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
  //     width: 400,
  //     height: 300
  //   },
  //   {
  //     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
  //     width: 400,
  //     height: 300
  //   }
  // ];

  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

 return (
   <div>
     <Gallery photos={generatePhoto(images)} onClick={openLightbox} />
     <ModalGateway>
       {viewerIsOpen ? (
         <Modal onClose={closeLightbox}>
           <Carousel
             currentIndex={currentImage}
             views={generatePhoto(images).map(x => ({
               ...x,
               srcset: x.srcSet,
               caption: x.title
             }))}
           />
         </Modal>
       ) : null}
     </ModalGateway>
   </div>
 )
};

export default GalleryPhoto;
