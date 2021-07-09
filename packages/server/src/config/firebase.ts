import fireorm from 'fireorm';
import admin from 'firebase-admin';

import firebaseSecretKey from 'firebaseSecretKey.json';

const firebaseInitialize = async () => {
  if (admin.apps.length) return;

  admin.initializeApp({
    credential: admin.credential.cert(firebaseSecretKey),
  });

  const firestore = admin.firestore();
  fireorm.initialize(firestore);
};

export default firebaseInitialize;
