import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Pages/Auth/Login/Login";
import ProtectedRoute from "./Routes/ProtectedRouting";
import { RootState } from "./Redux/store";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "./Redux/themeToggle/themeToggle.slice";
import { UserContextProvider } from "./Context/UserContext";
import MovieList from "./Pages/Movie/MovieList/MovieList";
import HomePage from "./Pages/Home/Home";
import MovieDetail from "./Pages/Movie/MovieDetail/MovieDetail";
import ErrorPage from "./Pages/Error/Error";
import SignUp from "./Pages/Auth/SignUp/SignUp";
import "./Styles/global.scss";
import { CiDark, CiLight } from "react-icons/ci";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movieList",
    element: (
      <ProtectedRoute>
        <MovieList />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/movieList/:showId",
    element: (
      <ProtectedRoute>
        <MovieDetail />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  const themeColor = useSelector((state: RootState) => {
    return state.theme.themeColor;
  });

  const dispatch = useDispatch();

  return (
    <UserContextProvider>
      <section id='page-wrapper' className={`${themeColor ? "dark" : "light"}`}>
        <div className='toggle-wrapper'>
          <button onClick={() => dispatch(toggleTheme())}>
            {themeColor ? <CiDark /> : <CiLight />}
          </button>
        </div>
        <RouterProvider router={router} />
      </section>
    </UserContextProvider>
  );
}

export default App;
