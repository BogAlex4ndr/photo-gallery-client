import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/slices/postSlice';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';

interface RootState {
  posts: any;
}
const Home = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  const isPostsLoading = posts.status === 'loading';
  console.log('this is items', posts.items);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <section>
      <div className={styles.previewPhoto}>
        {' '}
        <img src='http://i.mlcdn.com.br/portaldalu/fotosconteudo/87169_00.jpg' alt='' />
        <h1><span>Art photographer</span> <span>Margarita Kramaruk</span></h1>
      </div>
      <Header />
      <div className={styles.wrapper}>
        {(isPostsLoading ? [...Array(5)] : posts.items).map((obj: any, index: any) =>
          isPostsLoading ? (
            <div key={index}></div>
          ) : (
            <Post key={obj._id} imageUrl={obj.imageUrl} _id={obj._id} />
          ),
        )}
      </div>
    </section>
  );
};

export default Home;
