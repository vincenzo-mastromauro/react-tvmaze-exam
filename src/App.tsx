import "./App.css";
import { AuthProvider } from "./pages/Login/AuthContext";
import Router from "./Router/router";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </>
  );
};

export default App;
