import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = () => {
  const [cards, setCards] = useState([
    {
      id: 0,
      name: 'chuyeonbin',
      company: 'google',
      theme: 'dark',
      job: 'FrontEnd Enginner',
      email: 'cndusqls98@gmail.com',
      message: '안녕하세요 저는 프론트엔드 개발자입니다.',
    },
    {
      id: 1,
      name: 'test',
      company: 'samsung',
      theme: 'light',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
    {
      id: 2,
      name: 'test',
      company: 'samsung',
      theme: 'colorful',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
    {
      id: 3,
      name: 'test',
      company: 'samsung',
      theme: 'colorful',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
  ]);

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
      <div className={styles.makerBox}>
        <Editor cards={cards} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
