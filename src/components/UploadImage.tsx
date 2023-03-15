import axios from 'axios';
import React, { useRef, useState } from 'react';

const UploadImage = () => {
  const [imageUrl, setImageUrl]: any = useState();
  const [isLoading, setIsLoading] = useState(false);
  const inputFilleRef: any = useRef();
  const API_KEY = 'ab5ec021b00b8110391e0a8890fb5419';

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
      } else {
        setIsLoading(true);
        const fields = {
          imageUrl: `${imageUrl}`,
        };

        const { data } = await axios.post(
          'https://photo-gallery-server.onrender.com/posts',
          fields,
        );

        console.log(fields);
      }
    } catch (err) {
      console.warn(err);
      alert('error upload image');
    }
  };
  return (
    <div>
      <input type='file' ref={inputFilleRef} onChange={handleChangeFile} hidden />
      <button onClick={() => inputFilleRef.current.click()}>upload image</button>
      <div>
        <img style={{ maxWidth: '300px' }} src={imageUrl} alt='' />
      </div>
      <div>
        <button onClick={onSubmitImage}>Create post</button>
      </div>
    </div>
  );
};

export default UploadImage;
