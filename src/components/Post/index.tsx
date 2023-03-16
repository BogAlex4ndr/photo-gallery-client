import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRemovePost } from '../../redux/slices/postSlice';
import styles from './Post.module.scss';
import axios from '../../axios';
import { selectIsAuth } from '../../redux/slices/auth';

const Post = ({ _id, imageUrl }) => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();

  const onClickRemove = () => {
    dispatch(fetchRemovePost(_id));
    axios.post(`/delete-image`, {
      filename: imageUrl.replace('https://photo-gallery-server.onrender.com/uploads/', ''),
    });
  };
  return (
    <div className={styles.imageConteiner} key={_id}>
      {isAuth && (
        <button className={styles.deleteButton} onClick={onClickRemove}>
          X
        </button>
      )}
      <Link to={`/posts/${_id}`}>
        <img src={imageUrl} alt='Image' />
      </Link>
    </div>
  );
};

export default Post;
