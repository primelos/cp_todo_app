//make it look cleaner
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyCLhmSAnKSAivGOceiULHgBVgTzk5xhesw",
  authDomain: "disneyplus-cf094.firebaseapp.com",
  projectId: "disneyplus-cf094",
  storageBucket: "disneyplus-cf094.appspot.com",
  messagingSenderId: "46402682740",
  appId: "1:46402682740:web:02621c8b34399146bc3621",
  measurementId: "G-8MJQFCMVY0",
});

const analytics = getAnalytics(firebaseApp);

export const db = getFirestore(firebaseApp);

// copied from firebase
//
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyCLhmSAnKSAivGOceiULHgBVgTzk5xhesw",
//   authDomain: "disneyplus-cf094.firebaseapp.com",
//   projectId: "disneyplus-cf094",
//   storageBucket: "disneyplus-cf094.appspot.com",
//   messagingSenderId: "46402682740",
//   appId: "1:46402682740:web:02621c8b34399146bc3621",
//   measurementId: "G-8MJQFCMVY0",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
