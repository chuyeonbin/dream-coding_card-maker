import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './login-modal.module.css';
import Footer from '../footer/footer';
import Header from '../header/header';

const LoginModal = ({ authService }) => {
  const navigate = useNavigate();
  const goToMaker = userId => {
    navigate('/maker', {
      state: {
        id: userId,
      },
    });
  };
  const onLogin = event => {
    const {
      target: { name },
    } = event;
    event.preventDefault();
    authService
      .login(name) //
      .then(data => {
        goToMaker(data.user.uid);
      });
  };

  useEffect(() => {
    authService.onAuthChange(user => {
      console.log(user);
      user && goToMaker(user.uid);
    });
  }, []);

  return (
    <div className={styles.modal}>
      <div className={styles.modal_box}>
        <Header />
        <form className={styles.form}>
          <h1>Login</h1>
          <button
            name="google"
            className={styles.auth_button}
            onClick={onLogin}
          >
            google
          </button>
          <button
            name="github"
            className={styles.auth_button}
            onClick={onLogin}
          >
            github
          </button>
        </form>
        <Footer />
      </div>
    </div>
  );
};

export default LoginModal;
