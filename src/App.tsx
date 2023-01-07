
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

import React from "react";
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
  return <RouterProvider router={router} />;
}

export default App;

