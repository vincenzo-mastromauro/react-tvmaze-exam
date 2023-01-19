import React from "react";
import { CurrentUserConsumer } from "../../Context/UserContext";
import { auth, logout } from "../../Firebase/firebaseAuth";
import { useFavorite } from "../../Hooks/useFavourite";
import { useWatching } from "../../Hooks/useWatching";

const HomePage = (props: any) => {
  const { currentUser } = CurrentUserConsumer();
  const favorites = useFavorite(currentUser?.uid);
  const currentlyWatching = useWatching(currentUser?.uid);

  console.log(favorites);
  return (
    <>
      <h1>Hello, {auth.currentUser?.displayName || "User"} </h1>
      <h2>Favorites</h2>
      {favorites &&
        Object.keys(favorites).map((key, index) => {
          return (
            <div>
              <p>{favorites[key].id}</p>
              <p>{favorites[key].name}</p>
              <img src={favorites[key].image} alt='' />
            </div>
          );
        })}
      <h2>Currently Watching</h2>
      {currentlyWatching && (
        <div>
          {Object.keys(currentlyWatching).map((key, index) => {
            return (
              <div>
                <p>{currentlyWatching[key].id}</p>
                <p>{currentlyWatching[key].name}</p>
                <img src={currentlyWatching[key].image} alt='' />
              </div>
            );
          })}
        </div>
      )}
      <button style={{ width: "100%" }} onClick={logout}>
        Sign out
      </button>
    </>
  );
};

export default HomePage;
