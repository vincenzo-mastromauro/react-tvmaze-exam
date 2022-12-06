import { useEffect } from "react";
import "firebaseui/dist/firebaseui.css";
import { EmailAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../firebase-config";
import * as firebaseui from "firebaseui";


const Login = () => {

  useEffect(() => {

    //firebaseui 
    const ui =
      firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

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
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Sign up or login to your account
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div id="firebaseui-auth-container"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
