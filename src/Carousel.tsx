import React, { useState, useEffect } from 'react'
import { Photo } from '@frontendmasters/pet';

const Carousel = (props: { media: Photo[] }) => {
    const [photos, setPhotos] = useState([] as string[]);
    const [active, setActive] = useState(0);

    const extractPhotos = (photoProps: { media: Photo[] }) => {
        const { media } = photoProps;
        if (media.length) {
            return media.map(({ large }) => large)
        }
        return ["http://placecorgi.com/600/600"]
    }
    
    useEffect(() => {
        setPhotos(extractPhotos(props))
    }, [props]);

    const handleIndexClick = (event: React.MouseEvent<HTMLElement>) => {
        if (!(event.target instanceof HTMLElement)) {
            return; 
        }

        if (event.target.dataset.index) {
            console.log('index', +event.target.dataset.index)
            setActive(+event.target.dataset.index)
        }
    };

    return (
        <div className="carousel">
            <img src={photos[active]} alt="animal" />
            <div className="carousel-smaller">
                {photos.map((photo, index) => (
                    // eslint-disable-next-line
                    <img
                        key={photo}
                        src={photo}
                        className={index === active ? "active" : ""}
                        alt="animal thumbnail"
                        onClick={handleIndexClick}
                        data-index={index}
                    />
                ))}
            </div>
        </div>
    );
}

export default Carousel;