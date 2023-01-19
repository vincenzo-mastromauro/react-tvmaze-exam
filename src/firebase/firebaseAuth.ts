import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { app } from "./firebase";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const user = {
  uid: "",
  email: "",
};

const logInWithEmailAndPassword = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const signUpWithEmailAndPassword = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    user.uid = res.user.uid;
    user.email = res.user.email!;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    user.uid = res.user.uid;
    user.email = res.user.email!;
  } catch (err: any) {
    console.error(err);
    alert(err.message);
  }
};

const logout = () => {
  signOut(auth);
};

export { auth, signInWithGoogle, logInWithEmailAndPassword, signUpWithEmailAndPassword, logout };
