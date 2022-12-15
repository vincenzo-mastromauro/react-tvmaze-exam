import { Navigate } from "react-router-dom";
import { UserContext, AuthProviderType } from "../../utilities/AuthContext";

const Protected = ({ children }: AuthProviderType) => {
  const { currentUser } = UserContext();
  if (currentUser === undefined) {
    <h1>Sorry, still loading...</h1>;
  } else if (currentUser === null) {
    return <Navigate to='/login' replace />;
  }

  return <>{children}</>;
};

export default Protected;
