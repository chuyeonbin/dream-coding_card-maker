import { onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { auth } from '../../service/firebase';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({ FileInput, database }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [userId, setUserId] = useState(location.state && location.state.id);
  const [cards, setCards] = useState({});

  const onLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopGetUser = database.getUserCard(userId, cards => {
      setCards(cards);
    });
    return () => stopGetUser();
  }, [userId, database]);

  useEffect(() => {
    console.log(cards);
    onAuthStateChanged(auth, user => {
      if (!user) {
        setUserId(user.uid);
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
    database.setUserCard(location.state.id, card);
  };

  const deleteCard = card => {
    setCards(cards => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
    database.removeUserCard(userId, card);
  };

  return (
    <section className={styles.maker}>
      <Header onLogOut={onLogOut} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
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
