import { set, ref, onValue, remove, off } from 'firebase/database';
import { database } from './firebase';

class Database {
  getUserCard(uid, onUpdate) {
    const query = ref(database, `${uid}/cards`);
    onValue(query, snapshot => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off(query);
  }

  async setUserCard(uid, card) {
    return set(ref(database, `${uid}/cards/${card.id}`), card);
  }

  async removeUserCard(uid, card) {
    return remove(ref(database, `${uid}/cards/${card.id}`));
  }
}

export default Database;
