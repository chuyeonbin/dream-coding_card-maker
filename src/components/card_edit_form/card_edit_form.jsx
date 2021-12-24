import React from 'react';
import Button from '../button/button';
import styles from './card_edit_form.module.css';

const CardEditForm = ({ FileInput, card, deleteCard, updateCard }) => {
  const { theme, name, company, job, email, message, fileName } = card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = file => {
    console.log(card);
    updateCard({
      ...card,
      fileName: file.name,
      fileURL: file.url,
    });
  };

  const onChange = event => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    const {
      target: { name, value },
    } = event;
    updateCard({
      ...card,
      [name]: value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        defaultValue={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        defaultValue={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        defaultValue={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="job"
        defaultValue={job}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        defaultValue={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        defaultValue={message}
        onChange={onChange}
      />
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
