import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signInWithGoogle, signUpWithEmailAndPassword } from "../../../Firebase/firebaseAuth";
import { SiGoogle } from "react-icons/si";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const signUp = () => {
    if (!name) alert("Please enter name");
    signUpWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/profile");
  }, [user, loading]);

  return (
    <div className='login-wrapper' style={{ height: "100vh", alignContent: "center" }}>
      <h1>Sign in Now</h1>
      <div className='input-wrapper'>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='Full Name'
        />
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
      </div>
      <div className='buttons-wrapper'>
        <button onClick={signUp}>Sign Up</button>
        <button onClick={signInWithGoogle}>
          Sign Up with <SiGoogle />
        </button>
      </div>
    </div>
  );
}

export default SignUp;
