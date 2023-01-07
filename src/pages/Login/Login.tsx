import { useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../utilities/firebase-config";
import * as firebaseui from "firebaseui";

const Login = () => {
  useEffect(() => {
    //firebaseui
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

    ui.start("#firebaseui-auth-container", {
      signInOptions: [
        {
          //sign in with Google
          provider: GoogleAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
        {
          //sign in with email ad password
          provider: EmailAuthProvider.PROVIDER_ID,
          requireDisplayName: false,
        },
      ],
      signInSuccessUrl: "/dashboard",
      signInFlow: "popup",
    });
  }, []);

  return (
    <>
      <div className='authWrapper'>
        <div id='firebaseui-auth-container'></div>
      </div>
    </>
  );
};

export default Login;
