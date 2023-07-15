import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { get, getDatabase, ref } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const db = getDatabase(app);

export async function login() {
  return signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user;
      return adminUser(user);
    })
    .catch(console.error);
}

export async function logout() {
  return signOut(auth).then(() => null);
}

export async function onUserStateChange(callback) {
  onAuthStateChanged(auth, async user => {
    const updatedUser = user ? await adminUser(user) : null;
    callback(updatedUser);
  });
}

export async function adminUser(user) {
  return get(ref(db, 'admins')) //
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        return { ...user, isAdmin: admins.includes(user.uid) };
      }
      return user;
    });
}
