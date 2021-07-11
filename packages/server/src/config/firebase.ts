import * as fireorm from 'fireorm';
import * as admin from 'firebase-admin';

import Logger from '@utils/Logger';
import FirestoreSecretKey from '@keys/firestore_secret_key.json';

const firebaseInitialize = async () => {
  if (admin.apps.length) return;

  const serviceAccount = FirestoreSecretKey as admin.ServiceAccount;

  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });

    const firestore = admin.firestore();
    fireorm.initialize(firestore);
  } catch (error) {
    Logger.error(error.message);
  }
};

export default firebaseInitialize;
