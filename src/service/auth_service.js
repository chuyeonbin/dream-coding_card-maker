import { auth } from './firebase';
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';

class AuthService {
  async login(providerName) {
    let provider;
    switch (providerName) {
      case 'google':
        provider = new GoogleAuthProvider();
        break;
      case 'github':
        provider = new GithubAuthProvider();
        break;
      default:
        throw new Error('not providerName');
    }
    return signInWithPopup(auth, provider);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(auth, user => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
