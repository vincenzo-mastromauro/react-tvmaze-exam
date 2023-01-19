import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate } from "react-router-dom";
import { auth } from "../Firebase/firebaseAuth";

const ProtectedRoute = ({ children }: any) => {
  const [user, loading] = useAuthState(auth);
  if (!user && loading) {
    return <div>Loading...</div>;
  }
  if (!user && !loading) {
    return <Navigate to='/login' />;
  }

  return children;
};

export default ProtectedRoute;
