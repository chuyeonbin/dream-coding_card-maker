import React from 'react';
import styles from './maker_header.module.css';

function MakerHeader() {
  return (
    <header className={styles.header}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
}

export default MakerHeader;
