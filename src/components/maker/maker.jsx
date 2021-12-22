import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = () => {
  const [cards, setCards] = useState({
    0: {
      id: 0,
      name: 'chuyeonbin',
      company: 'google',
      theme: 'dark',
      job: 'FrontEnd Enginner',
      email: 'cndusqls98@gmail.com',
      message: '안녕하세요 저는 프론트엔드 개발자입니다.',
    },
    1: {
      id: 1,
      name: 'test',
      company: 'samsung',
      theme: 'light',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
    2: {
      id: 2,
      name: 'test',
      company: 'samsung',
      theme: 'colorful',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
    3: {
      id: 3,
      name: 'test',
      company: 'samsung',
      theme: 'colorful',
      job: 'Database Enginner',
      email: 'test@gmail.com',
      message: 'loremasdasdas ;zx,;asdasd',
    },
  });

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

  const createOrUpdateCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogOut={onLogOut} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          addCard={createOrUpdateCard}
          deleteCard={deleteCard}
          updateCard={createOrUpdateCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
