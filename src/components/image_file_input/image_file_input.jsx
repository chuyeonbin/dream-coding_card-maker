import React, { useRef } from 'react';
import styles from './image_file_input.module.css';

const ImageFileInput = ({ imageUpload, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = event => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async event => {
    const uploaded = await imageUpload.upload(event.target.files[0]);
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
        onChange={onChange}
      />
      <button onClick={onButtonClick} className={styles.button}>
        {name || 'No File'}
      </button>
    </div>
  );
};

export default ImageFileInput;
