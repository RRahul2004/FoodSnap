import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBa_HQL1xmmckSAxNV1k-LLfayqiMXAAHU",
  authDomain: "foodsnap-40072.firebaseapp.com",
  databaseURL: "https://foodsnap-40072-default-rtdb.firebaseio.com",
  projectId: "foodsnap-40072",
  storageBucket: "foodsnap-40072.appspot.com",
  messagingSenderId: "1029576173712",
  appId: "1:1029576173712:web:cb33971f096f3cbdf21015",
  measurementId: "G-8Y97FFWBRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getDatabase(app);