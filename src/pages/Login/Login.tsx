import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../utilities/firebase";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  return (
    <div className='login'>
      <div className='login__container'>
        <input
          type='text'
          className='login__textBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail'
        />
        <input
          type='password'
          className='login__textBox'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button className='login__btn' onClick={() => logInWithEmailAndPassword(email, password)}>
          Login
        </button>
        <button className='login__btn login__google' onClick={signInWithGoogle}>
          Login with Google
        </button>
        <div>
          <Link to='/reset'>Forgot Password</Link>
        </div>
        <div>
          Don't have an account? <Link to='/register'>Register now.</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
