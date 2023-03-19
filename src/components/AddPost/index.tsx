import React, { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout, selectIsAuth } from '../../redux/slices/auth';
import styles from './AddPost.module.scss';
import PreviewBlock from '../PreviewBlock';
import { useSelector } from 'react-redux';

const AddPost = () => {
  const [imageUrl, setImageUrl]: any = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [fileName, setFileName]: any = useState();
  const [load, setLoad] = useState(false);
  const isAuth = useSelector(selectIsAuth);
  const API_KEY = 'ab5ec021b00b8110391e0a8890fb5419';

  const inputFilleRef: any = useRef();

  const dispatch = useDispatch();

  const onClickLogout = () => {
    if (window.confirm('are you sure?')) {
      dispatch(logout());
      window.localStorage.removeItem('token');
    }
  };

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      formData.append('key', API_KEY);

      const { data } = await axios.post('https://api.imgbb.com/1/upload', formData);
      setImageUrl(data.data.url);
      console.log(data.data.url);
    } catch (error) {
      console.warn(error);
      alert('Error upload file');
    }
  };

  const onSubmitImage = async () => {
    try {
      if (imageUrl === undefined) {
        return alert('add image');
      }
      if (isAuth) {
        setIsLoading(true);
        const fields = {
          imageUrl: `${imageUrl}`,
        };

        const { data } = await axios.post(
          'https://photo-gallery-server.onrender.com/posts',
          fields,
        );
        setLoad(!load);
        console.log(load);
      }
    } catch (err) {
      console.warn(err);
      alert('error upload image');
    }
  };

  const removeImage = () => {
    setImageUrl('');
    axios.post(`/delete-image`, { filename: fileName });
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageUploadBlock}>
        <div>
          <input type='file' ref={inputFilleRef} onChange={handleChangeFile} hidden />
          <button className={styles.button} onClick={() => inputFilleRef.current.click()}>
            upload image
          </button>
          {imageUrl && (
            <button className={styles.button} onClick={removeImage}>
              Delete image
            </button>
          )}
        </div>
        <div className={styles.imagePreviewConteiner}>
          <img src={imageUrl} alt='' />
        </div>
        <div>
          <button className={styles.button} onClick={onSubmitImage}>
            Create post
          </button>
        </div>
      </div>
      <div>{<PreviewBlock load={load} />}</div>
      <div>
        <button className={styles.buttonLogOut} onClick={onClickLogout}>
          Log Out
        </button>
        
      </div>
    </div>
  );
};

export default AddPost;
