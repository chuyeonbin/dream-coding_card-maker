import React, { memo } from 'react';
import styles from './footer.module.css';

const Footer = memo(() => {
  console.log('footer');
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>Copyrightⓒ2021 by chuyeonbin</p>
    </footer>
  );
});

export default Footer;
