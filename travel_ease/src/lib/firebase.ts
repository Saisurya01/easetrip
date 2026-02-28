import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyB78QXNd_DMYdr4kZlaOvR54kyF9k6txGE",
  authDomain: "easetrip-clone.firebaseapp.com",
  projectId: "easetrip-clone",
  storageBucket: "easetrip-clone.firebasestorage.app",
  messagingSenderId: "1080457091843",
  appId: "1:1080457091843:web:eca41aa62cd6c80ba36736",
  measurementId: "G-V5YHT6CF27"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
