import React, { memo } from 'react';
import styles from './header.module.css';

const Header = memo(({ onLogOut }) => {
  return (
    <header className={styles.header}>
      {onLogOut && (
        <button className={styles.logout} onClick={onLogOut}>
          logout
        </button>
      )}
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </header>
  );
});

export default Header;
