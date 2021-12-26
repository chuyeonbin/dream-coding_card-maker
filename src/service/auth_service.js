import { auth, googleProvider, githubProvider } from './firebase';
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth';

class AuthService {
  async login(providerName) {
    const provider = this.getProvider(providerName);
    return signInWithPopup(auth, provider);
  }

  onAuthChange(onUserChanged) {
    onAuthStateChanged(auth, user => {
      onUserChanged(user);
    });
  }

  logout() {
    auth.signOut();
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'google':
        return googleProvider;
      case 'github':
        return githubProvider;
      default:
        throw new Error(`not providerName: ${providerName}`);
    }
  }
}

export default AuthService;
