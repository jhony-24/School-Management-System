import fireorm from 'fireorm';
import admin from 'firebase-admin';
import Logger from '@utils/Logger';
import firebaseSecretKey from './firebaseSecretKey.json';

const serviceAccount = firebaseSecretKey as admin.ServiceAccount;

const firebaseInitialize = async () => {
  if (admin.apps.length) return;

  try {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  
    const firestore = admin.firestore();
    fireorm.initialize(firestore);
  }
  catch (error) {
    Logger.error(error.message);
  }
};

export default firebaseInitialize;
