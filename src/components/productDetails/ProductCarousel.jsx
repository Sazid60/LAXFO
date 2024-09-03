// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductCarousel = () => {
    const onChange = (index, item) => {
        console.log(`Slide changed to ${index}`, item);
    };

    const onClickItem = (index, item) => {
        console.log(`Item clicked: ${index}`, item);
    };

    const onClickThumb = (index, item) => {
        console.log(`Thumbnail clicked: ${index}`, item);
    };

    return (
        <Carousel 
            showArrows={true} 
            onChange={onChange} 
            onClickItem={onClickItem} 
            onClickThumb={onClickThumb}
        >
            <div>
                <img src="/product1.png" alt="Slide 1" />
            </div>
            <div>
                <img src="/product1.jpg" alt="Slide 2" />
            </div>
            <div>
                <img src="/product3.jpg" alt="Slide 3" />
            </div>
            <div>
                <img src="/product4.jpg" alt="Slide 4" />
            </div>
            <div>
                <img src="/product5.jpg" alt="Slide 5" />
            </div>
            <div>
                <img src="/product6.jpg" alt="Slide 6" />
            </div>
        </Carousel>
    );
};

export default ProductCarousel;

