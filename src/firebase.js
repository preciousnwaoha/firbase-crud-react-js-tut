import { initializeApp } from "firebase/app";
import { getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBmJntYbf6BFyOwZzHfrAXHxlrZx40K1Ps",
    authDomain: "fir-tuto-d45d2.firebaseapp.com",
    projectId: "fir-tuto-d45d2",
    storageBucket: "fir-tuto-d45d2.appspot.com",
    messagingSenderId: "1037209412514",
    appId: "1:1037209412514:web:9edc97d0d30f7cdc1048fb",
    measurementId: "G-4KPJQN40RL"
  };
  

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)