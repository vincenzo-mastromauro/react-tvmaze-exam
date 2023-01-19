import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { writeUser } from "../../../Firebase/firebaseDB";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../../../Firebase/firebaseAuth";
import NetflixLogo from "../../../Assets/images/netflix-logo-full.svg";
import { SiGoogle } from "react-icons/si";
function Login() {
  const [email, setEmail] = useState<string>("1@1.it");
  const [password, setPassword] = useState("123456789");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      console.log("loading");
      return;
    }
    if (user) {
      navigate("/movieList");
      writeUser(user.email!, user.uid);
    }
  }, [user, loading]);

  return (
    <>
      <div className='hero'>
        <h1>Search That Movie</h1>
        <p>A Service Provided By:</p>
        <img src={NetflixLogo} alt='logo of netflix' />
      </div>
      <div className='login-wrapper'>
        <h1>Login</h1>
        <div className='input-wrapper'>
          <label>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='insert email here'
          />
          <label>Password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='insert password here'
          />
        </div>
        <div className='buttons-wrapper'>
          <button onClick={() => logInWithEmailAndPassword(email, password)}>Login</button>
          <button onClick={signInWithGoogle}>
            Login with <SiGoogle />
          </button>
        </div>
        <div>
          Don't have an account? <Link to='/signup'>Register now.</Link>
        </div>
      </div>
    </>
  );
}

export default Login;
