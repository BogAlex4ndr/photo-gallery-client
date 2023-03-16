import axios from '../../axios';
import React, { useEffect, useState } from 'react';
import styles from './PreviewBlock.module.scss';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../redux/slices/postSlice';
import { useSelector } from 'react-redux';
import Post from '../../components/Post';

interface RootState {
  posts: any;
}
const PreviewBlock = (load: any) => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  const isPostsLoading = posts.status === 'loading';
  console.log('this is items', posts.items);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [load]);

  return (
    <section>
      <div className={styles.wrapperPrewiev}>
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

export default PreviewBlock;
