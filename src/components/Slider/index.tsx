import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './Slider.module.scss';

const Slider = ({ images, currentIndex, onClose }) => {
  console.log(currentIndex);

  return (
    <div className={styles.carouselWrapper}>
      <button className={styles.closeButton} onClick={onClose}>
        X
      </button>
      <Carousel
        selectedItem={currentIndex}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        infiniteLoop={true}>
        {images.map((image: string, index: number) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={image} alt='' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
