import axios from '../../axios';
import React, { useEffect, useMemo } from 'react';
import styles from './Home.module.scss';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/slices/postSlice';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Skeleton from '../../components/Skeleton';
import Slider from '../../components/Slider';

interface RootState {
  posts: any;
}
const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  const [isSliderOpen, setIsSliderOpen] = React.useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);

  function handleImageClick(index: number) {
    setIsSliderOpen(true);
    setCurrentSlideIndex(index);
  }

  function closeSlider() {
    setIsSliderOpen(false);
  }

  const isPostsLoading = posts.status === 'loading';
  console.log('this is items from home', posts.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section>
      <div  className={styles.previewPhoto}>
        <img src='http://i.mlcdn.com.br/portaldalu/fotosconteudo/87169_00.jpg' alt='' />
        <h1>
          <span >Art photographer</span> <span>SubZero</span>
        </h1>
        <h4 className={styles.Scroller} onClick={() => {window.scrollTo(0, 940)}}>Scroll</h4>
      </div>
      <Header />
      {isSliderOpen && (
        <Slider
          images={posts.items.map((post) => post.imageUrl)}
          currentIndex={currentSlideIndex}
          onClose={closeSlider}
        />
      )}
      <div className={styles.wrapper}>
        {(isPostsLoading ? [...Array(12)] : posts.items)
          .map((obj: any, index: any) =>
            isPostsLoading ? (
              <Skeleton key={index} />
            ) : (
              <Post
                key={obj._id}
                imageUrl={obj.imageUrl}
                _id={obj._id}
                onClick={() => handleImageClick(index)}
              />
            ),
          )
          .reverse()}
      </div>
    </section>
  );
};

export default Home;
