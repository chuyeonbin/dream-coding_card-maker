import React from 'react';
import styles from './maker_login-modal.module.css';
import { auth } from '../../service/firebase';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
import MakerFooter from '../maker_footer/maker_footer';
import MakerHeader from '../maker_header/maker_header';

const MakerLoginModal = () => {
  const onSocicalClick = event => {
    const {
      target: { name },
    } = event;
    event.preventDefault();
    console.log(auth);
    if (name === 'google') {
      signInWithRedirect(auth, new GoogleAuthProvider());
    } else if (name === 'github') {
      signInWithRedirect(auth, new GithubAuthProvider());
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_box}>
        <MakerHeader />
        <form className={styles.form}>
          <h1>Login</h1>
          <button
            name="google"
            className={styles.auth_button}
            onClick={onSocicalClick}
          >
            google
          </button>
          <button
            name="github"
            className={styles.auth_button}
            onClick={onSocicalClick}
          >
            github
          </button>
        </form>
        <MakerFooter />
      </div>
    </div>
  );
};

export default MakerLoginModal;
