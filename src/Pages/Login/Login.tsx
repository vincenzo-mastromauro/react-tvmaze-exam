import React, { useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export interface ILoginPageProps {}

const LoginPage: React.FunctionComponent<ILoginPageProps> = (props) => {
  const auth = getAuth();
  const navigate = useNavigate();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState("1@1.it");
  const [password, setPassword] = useState("123456789");

  const signInWithGoogle = async () => {
    setAuthing(true);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((response) => {
        localStorage.setItem("uid", response.user.uid);
        console.log(localStorage.getItem("uid"));
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        setAuthing(false);
      });
  };
  const signInWithEmail = async () => {
    setAuthing(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        localStorage.setItem("uid", userCredential.user.uid);
      })
      .catch((error) => {
        console.log(error.code);
      });
  };
  return (
    <div>
      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => signInWithEmail()} disabled={authing}>
        aaa
      </button>

      <p>Login Page</p>
      <button onClick={() => signInWithGoogle()} disabled={authing}>
        Sign in with Google
      </button>
    </div>
  );
};
export default LoginPage;
