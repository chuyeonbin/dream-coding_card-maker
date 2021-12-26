import React from 'react';
import ReactDOM from 'react-dom';
import './index.module.css';
import App from './app';
import AuthService from './service/auth_service';
import ImageUpload from './service/image_upload';
import ImageFileInput from './components/image_file_input/image_file_input';
import Database from './service/database';

const database = new Database();
const authService = new AuthService();
const imageUpload = new ImageUpload();
const FileInput = props => (
  <ImageFileInput {...props} imageUpload={imageUpload} />
);

ReactDOM.render(
  <React.StrictMode>
    <App FileInput={FileInput} database={database} authService={authService} />
  </React.StrictMode>,
  document.getElementById('root')
);
