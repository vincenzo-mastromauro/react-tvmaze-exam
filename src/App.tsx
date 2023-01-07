import "./App.css";
import SignIn from "./authentication/SignIn";
import SignUp from "./authentication/SignUp";
import AuthDetails from "./pages/Profile/Profile";

function App() {
  return (
    <div className='App'>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  );
}

export default App;
