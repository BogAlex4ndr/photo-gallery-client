import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { GrInstagram } from 'react-icons/gr';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <div>
        <Link to={'/'} className={styles.mainTitle}>
          <img
            style={{ width: '80px', height: '60px', borderRadius: '5px' }}
            src='https://media.istockphoto.com/id/1187951204/photo/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-horizontal-photography.jpg?s=612x612&w=0&k=20&c=CnuTkeg8vE7cvsyn7nAQB41bHZPXmEQZnZ52O7OZrtg='
            alt='main image'
          />
        </Link>
      </div>

      <nav className={styles.navbar}>
        <div className={styles.burgerButton} onClick={toggleMenu}>
          <span></span>
        </div>
        <ul className={isOpen ? styles.menuActive : styles.menu}>
          <div className={styles.burgerButtonActive} onClick={toggleMenu}>
            <span></span>
          </div>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>
            <GrInstagram />
          </li>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>somethin else</li>
          <li onClick={window.innerWidth < 768 ? toggleMenu : () => {}}>contacts</li>
          <li>
            <Link onClick={window.innerWidth < 768 ? toggleMenu : () => {}} to='/admin'>
              admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
