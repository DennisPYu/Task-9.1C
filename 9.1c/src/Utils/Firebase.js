import {
    initializeApp
} from "firebase/app";
import {
    getAuth
} from "firebase/auth";
import {
    getFirestore
} from "firebase/firestore";
import {
    signInWithPopup,
} from "firebase/auth";
import {
    GoogleAuthProvider
} from "firebase/auth";

const firebaseConfig = {
   //for security reasons, I have removed the config details};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => signInWithPopup(auth, provider);