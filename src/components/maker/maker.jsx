import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const onLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/');
      }
    });
  });
  return (
    <section className={styles.maker}>
      <Header onLogOut={onLogOut} />
      <Footer />
    </section>
  );
};

export default Maker;
