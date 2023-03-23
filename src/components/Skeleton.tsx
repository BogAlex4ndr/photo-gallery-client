import React from 'react';
import ContentLoader from 'react-content-loader';
import styles from '../components/Post/Post.module.scss';

const Skeleton = (props: any) => (
  <div className={styles.skeleton}>
    <ContentLoader
      className='skeleton'
      speed={10}
      width={430}
      height={520}
      viewBox='0 0 430 520'
      backgroundColor='grey'
      foregroundColor='#1f213480'
      {...props}>
      <rect x='0' y='0' rx='0' ry='0' width='430' height='520' />
    </ContentLoader>
  </div>
);

export default Skeleton;
