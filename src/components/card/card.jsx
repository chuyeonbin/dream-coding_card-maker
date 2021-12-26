import React, { memo } from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE = '/images/default_logo.png';

const Card = memo(({ card }) => {
  const { theme, name, company, job, email, message, fileURL } = card;
  console.log('card');
  const url = fileURL || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img className={styles.avatar} src={url} alt="profile" />
      <div className={styles.information}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.company}>{company}</p>
        <hr className={styles.line} />
        <p className={styles.job}>{job}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'colorful':
      return styles.colorful;
    default:
      throw new Error(`Unkown theme: ${theme}`);
  }
}

export default Card;
