import React from 'react';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {cards.map(card => (
        <CardEditForm key={card.id} card={card} />
      ))}
    </section>
  );
};

export default Editor;