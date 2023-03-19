import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from '../components/Post/Post.module.scss';

const Skeleton = (props: any) => (
  <div className={styles.skeleton}>
    <ContentLoader
      className='skeleton'
      speed={10}
      width={300}
      height={420}
      viewBox='0 0 300 420'
      backgroundColor='grey'
      foregroundColor='#1f213480'
      {...props}>
      <rect x='0' y='0' rx='0' ry='0' width='300' height='420' />
    </ContentLoader>
  </div>
);

export default Skeleton;
