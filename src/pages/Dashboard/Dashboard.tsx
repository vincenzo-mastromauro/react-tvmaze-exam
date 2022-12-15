import { UserContext } from "../../utilities/AuthContext";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const { currentUser, logOut } = UserContext();

  return (
    <>
      <Navbar></Navbar>
      <div>you are in your dashboard {currentUser?.email}</div>
      <button onClick={logOut}>LOG OUT</button>
    </>
  );
};

export default Dashboard;
