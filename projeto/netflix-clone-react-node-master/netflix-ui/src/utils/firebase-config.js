import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBsk1VvqAgvRupG5ryoRxkruf5IKilkUAg",
  authDomain: "codezilla-957e6.firebaseapp.com",
  projectId: "codezilla-957e6",
  storageBucket: "codezilla-957e6.appspot.com",
  messagingSenderId: "143986438063",
  appId: "1:143986438063:web:22196d520db6664e2b095a",
  measurementId: "G-Y2HZ6KE9QK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
