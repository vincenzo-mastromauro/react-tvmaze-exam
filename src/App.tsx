import "./App.css";
import { AuthProvider } from "./utilities/AuthContext";
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
