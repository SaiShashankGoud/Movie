import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyBpsOAaSi2sIApp1e-QVVmyiYmdWzSrpi4",
  authDomain: "netflix-clone-b7624.firebaseapp.com",
  projectId: "netflix-clone-b7624",
  storageBucket: "netflix-clone-b7624.appspot.com",
  messagingSenderId: "153690168223",
  appId: "1:153690168223:web:a00f5ba6e12aaf240a3baa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {  // Assuming collection name is 'users'
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log(error);
    //alert(error.message); // alert only the error message for better UX
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    //alert(error.message); // alert only the error message for better UX
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, db, login, signup, logout };
