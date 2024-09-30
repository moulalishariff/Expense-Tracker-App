import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAGroLEuKsZ1OFcPUOScXJ-RI32Mtv0eQ8",
  authDomain: "expense-tracker-app-000.firebaseapp.com",
  projectId: "expense-tracker-app-000",
  storageBucket: "expense-tracker-app-000.appspot.com",
  messagingSenderId: "1087432689416",
  appId: "1:1087432689416:web:831c48de494f2449284ebd"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
