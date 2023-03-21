import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('');

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen == false) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    if (isOpen == true) {
      document.querySelector('body').style.overflow = 'auto';
    }
  };

  return (
    <header className={styles.wrapper}>
      <Link to={'/'}>
        <title className={styles.mainTitle}>Main title</title>
      </Link>
      <nav className={styles.navbar}>
        <div className={styles.burgerButton} onClick={toggleMenu}>
          <span></span>
        </div>
        <ul className={isOpen ? styles.menuActive : styles.menu}>
          <div className={styles.burgerButtonActive} onClick={toggleMenu}>
            <span></span>
          </div>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>about</li>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>somethin else</li>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>contacts</li>
          <Link onClick={window.innerWidth < 768 ? toggleMenu : () => {}} to='/admin'>
            admin
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
