import React from 'react';
import styles from './Footer.module.scss';

const year = new Date();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Banner</div>
      <div>information</div>
      <div>
       <p> ©{`${year.getFullYear()}`} Alex Bohar <br /></p>
      </div>
    </footer>
  );
};

export default Footer;
