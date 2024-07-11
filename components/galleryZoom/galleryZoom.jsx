import { SlideshowLightbox } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';

function GalleryZoom({ img, alt }) {

const image = [
    {
        src: `/images/products/${img}-min.png`,
        alt: alt
    }
];
    
    return (
        <SlideshowLightbox
            showThumbnails={true}
            backgroundColor='#232323'
            thumbnailBorder='#bb9d7b'
            iconColor={"#fff"}
            images={image} 
            className=" w-full"
        >
        </SlideshowLightbox>
    );
};

export default GalleryZoom;