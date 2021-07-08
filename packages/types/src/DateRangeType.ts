import firebase from 'firebase';

type DateRangeType = {
  start: firebase.firestore.Timestamp;
  finish: firebase.firestore.Timestamp;
};

export default DateRangeType;
