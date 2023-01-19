import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../Firebase/firebaseDB";
import { firebaseDbMovie } from "../Models/Interfaces/interfaces";
import { CurrentUserConsumer } from "../Context/UserContext";

const useFavorite = (userId: string | null | undefined) => {
  const [favorite, setFavorite] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(db, "users/" + userId + "/favorites");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setFavorite(data);
        off(userShow);
      });
    } else return;
  }, [userId]);

  return favorite;
};
const useFavouriteCheck = (idShow: number) => {
  const { currentUser } = CurrentUserConsumer();
  const [favourite, setFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser) return;
    const userShowId = ref(db, "users/" + currentUser.uid + "/favorites/" + idShow);
    onValue(userShowId, (snapshot) => {
      const data = snapshot.val();
      setFavourite(!!data);
    });
  }, [currentUser]);
  return favourite;
};

export { useFavorite, useFavouriteCheck };
