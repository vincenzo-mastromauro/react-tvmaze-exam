import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, Link } from "react-router-dom";
import { auth, sendPasswordReset } from "../../utilities/firebase";
import "./Reset.css";

function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, loading]);
  return (
    <div className='reset'>
      <div className='reset__container'>
        <input
          type='text'
          className='reset__textBox'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='E-mail'
        />
        <button className='reset__btn' onClick={() => sendPasswordReset(email)}>
          Send password reset email
        </button>
        <div>
          Don't have an account? <Link to='/register'>Register now.</Link>
        </div>
        <div>
          Already have an account? <Link to='/'>Login now.</Link>
        </div>
      </div>
    </div>
  );
}

export default Reset;
