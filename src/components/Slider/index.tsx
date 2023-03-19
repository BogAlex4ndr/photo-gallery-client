import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { fetchPosts } from '../../redux/slices/postSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Skeleton from '../Skeleton';
import Post from '../Post';
import styles from './Slider.module.scss';

interface RootState {
  posts: any;
}

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
          <div className={styles.imageWrapper}>
            <img key={index} src={image} alt='' />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
