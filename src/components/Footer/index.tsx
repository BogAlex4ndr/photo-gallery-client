import React from 'react';
import styles from './Footer.module.scss';
import { Icon } from '@iconify/react';

const year = new Date();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Banner</div>
      <div>
        <a href='https://www.instagram.com'>
          <Icon icon='skill-icons:instagram' className={styles.icon} />
        </a>
      </div>

      <div>
        <p>
          ©{`${year.getFullYear()}`} Alex Bohar <br />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
