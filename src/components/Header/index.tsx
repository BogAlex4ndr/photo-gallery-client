import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import { Icon } from '@iconify/react';

const Header = ({ welcomeRef, thankRef }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const mobileWidth = window.innerWidth < 768;

  const toggleMenu = () => {
    setIsOpen(!isOpen);

    if (isOpen == false) {
      document.querySelector('body').style.overflow = 'hidden';
    }
    if (isOpen == true) {
      document.querySelector('body').style.overflow = 'auto';
    }
  };
  const executeScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={styles.wrapper}>
      <div className={styles.mainInfo}>
        <Link to={'/'} className={styles.mainTitle}>
          <img
            style={{ width: '80px', height: '60px', borderRadius: '5px' }}
            src='https://media.istockphoto.com/id/1187951204/photo/camera-lens-with-red-and-blue-backlight-macro-photography-lenses-horizontal-photography.jpg?s=612x612&w=0&k=20&c=CnuTkeg8vE7cvsyn7nAQB41bHZPXmEQZnZ52O7OZrtg='
            alt='main image'
          />
        </Link>
        <nav className={styles.navbar}>
          <div className={styles.burgerButton} onClick={toggleMenu}>
            <span></span>
          </div>
          <ul className={isOpen ? styles.menuActive : styles.menu}>
            <div className={styles.burgerButtonActive} onClick={toggleMenu}>
              <span></span>
            </div>
            <li onClick={mobileWidth ? toggleMenu : () => {}}>
              <Icon icon='skill-icons:instagram' className={styles.icon} />
            </li>
            <li onClick={mobileWidth ? toggleMenu : () => {}}>somethin else</li>
            <li onClick={mobileWidth ? toggleMenu : () => {}}>contacts</li>
            <li>
              <Link onClick={mobileWidth ? toggleMenu : () => {}} to='/admin'>
                admin
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      
        <ul className={styles.navigateText}>
          <li>
            <h6 onClick={() => executeScroll(welcomeRef)}>WELCOME TO MY ART SPACE</h6>
          </li>
          <li>
            <h6 onClick={() => executeScroll(thankRef)}>THANK YOU FOR YOUR ATTENTION!</h6>
          </li>
        </ul>
      
    </header>
  );
};

export default Header;
