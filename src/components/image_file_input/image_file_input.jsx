import React, { useState, useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUpload, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    setLoading(true);
    const uploaded = await imageUpload.upload(event.target.files[0]);
    setLoading(false);
    onFileChange({
      url: uploaded.url,
      name: uploaded.original_filename,
    });
  };

  return (
    <div className={styles.container}>
      <input
        ref={inputRef}
        className={styles.input}
        type="file"
        name="file"
        accept="image/*"
        onChange={onChange}
      />
      {loading === false ? (
        <button
          onClick={onButtonClick}
          className={`${styles.button} ${name ? styles.pink : styles.grey}`}
        >
          {name || 'No File'}
        </button>
      ) : (
        <div className={styles.loading}></div>
      )}
    </div>
  );
};

export default ImageFileInput;
