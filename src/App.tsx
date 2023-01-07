import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import ThemeToggler from "./components/themeToggler/themeToggler";

// import "./App.css";
// import { AuthProvider } from "./utilities/AuthContext";
// import Router from "./Router/router";

// const App = () => {
//   return (
//     <>
//       <AuthProvider>
//         <Router></Router>
//       </AuthProvider>
//     </>
//   );
// };

// export default App;

import MovieDetail from "./pages/movies/movieDetail/movieDetail";
import MovieList from "./pages/movies/movieList/movieList";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "../src/styles/App.scss";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MovieList />,
    },
    {
      path: "/:showId",
      element: <MovieDetail />,
    },
  ]);
  const themeColor = useSelector((state: RootState) => {
    return state.theme.themeColor;
  });

  return (
    <>
      <RouterProvider router={router} />
      <div className={`${themeColor ? "lightTheme" : "darkTheme"}`}>
        <ThemeToggler />
        <h1>test</h1>
      </div>
    </>
  );
}

export default App;
