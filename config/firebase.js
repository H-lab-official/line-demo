import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyC8RYUbaw7o_U2hOfouq9L2wh-xHIu0_Gg",
  authDomain: "linedemo-1b218.firebaseapp.com",
  projectId: "linedemo-1b218",
  storageBucket: "linedemo-1b218.appspot.com",
  messagingSenderId: "1046870637235",
  appId: "1:1046870637235:web:0dc37a8bd3924b25c64ec6",
  measurementId: "G-HBTN79PH48",
};
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}
const fire = firebase;
export default fire;
