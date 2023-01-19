import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import { db } from "../Firebase/firebaseDB";
import { firebaseDbMovie } from "../Models/Interfaces/interfaces";
import { CurrentUserConsumer } from "../Context/UserContext";

const useWatching = (userId: string | null | undefined) => {
  const [watch, setWatch] = useState<firebaseDbMovie>();

  useEffect(() => {
    if (userId) {
      const userShow = ref(db, "users/" + userId + "/watching");
      onValue(userShow, (snapshot) => {
        const data = snapshot.val();
        setWatch(data);

        off(userShow);
      });
    } else return;
  }, [userId]);

  return watch;
};
const useWatchingCheck = (idShow: number) => {
  const { currentUser } = CurrentUserConsumer();
  const [watch, setWatch] = useState<boolean>(false);

  useEffect(() => {
    if (!currentUser) return;
    const userShowId = ref(db, "users/" + currentUser.uid + "/watching/" + idShow);
    onValue(userShowId, (snapshot) => {
      const data = snapshot.val();
      setWatch(!!data);
    });
  }, [currentUser]);
  return watch;
};

export { useWatching, useWatchingCheck };
