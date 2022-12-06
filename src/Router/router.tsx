import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "../../src/pages/Dashboard/Dashboard";
import Login from "../../src/pages/Login/Login";
import Protected from "../../src/pages/Login/Protected";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
