import React from 'react';
import CardAddForm from '../card_add_form/card_add_form';
import CardEditForm from '../card_edit_form/card_edit_form';
import styles from './editor.module.css';

const Editor = ({ FileInput, cards, addCard, deleteCard, updateCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {Object.keys(cards).map(key => (
        <CardEditForm
          key={key}
          FileInput={FileInput}
          card={cards[key]}
          deleteCard={deleteCard}
          updateCard={updateCard}
        />
      ))}
      <CardAddForm FileInput={FileInput} onAdd={addCard} />
    </section>
  );
};

export default Editor;
