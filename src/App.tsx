// import SignIn from "./authentication/SignIn";
// import SignUp from "./authentication/SignUp";
// import AuthDetails from "./pages/Profile/Profile";

// import MovieList from "./pages/MovieList/MovieList";
// import MovieDetail from "./pages/MovieDetail/MovieDetail";

// // import Error from "./pages/Error/Error";

// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <SignIn />,
//       // errorElement: <Error />,
//     },
//     {
//       path: "/signup",
//       element: <SignUp />,
//       // errorElement: <Error />,
//     },
//     {
//       path: "/profile",
//       element: <AuthDetails />,
//       // errorElement: <Error />,
//     },
//     {
//       path: "/movies",
//       element: <MovieList />,
//       // errorElement: <Error />,
//       children: [
//         {
//           path: "/movies/:showId",
//           element: <MovieDetail />,
//           // errorElement: <Error />,
//         },
//       ],
//     },
//     // {
//     //   path: "/:showId",
//     //   element: <MovieDetail />,
//     //   errorElement: <Error />,
//     // },
//   ]);

//   return (
//     <RouterProvider router={router} />
//     // <div className='App'>
//     //   <SignIn />
//     //   <SignUp />
//     //   <Logout />
//     //   <AuthDetails />
//     // </div>
//   );
// }

// export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/Home";
import LoginPage from "./Pages/Login/Login";
import { initializeApp } from "firebase/app";
import MovieList from "./Pages/Movie/MovieList/MovieList";
import { config } from "./Firebase/firebase";
import AuthRoute from "./Routes/ProtectedRouting";
import MovieDetail from "./Pages/Movie/MovieDetail/MovieDetail";

export const app = initializeApp(config.firebaseConfig);

export interface IApplicationProps {}

const Application: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <AuthRoute>
              <HomePage />
            </AuthRoute>
          }
        />
        <Route path='/movieList' element={<MovieList />} />
        <Route path='/movieList/:showId' element={<MovieDetail />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Application;
