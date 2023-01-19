// add to db - remove from db - get from db
import { getDatabase, ref, update, remove, set } from "firebase/database";
import { ShowType } from "../Models/Interfaces/interfaces";
import { app } from "./firebase";

export const db = getDatabase(app);

export const writeUser = (uid: string, email: string) => {
  const db = getDatabase(app);
  set(ref(db, "users/" + email), {
    email: email,
  });
};

export const addFavourite = (show: ShowType, uid: string) => {
  const db = getDatabase();
  update(ref(db, "users/" + uid + "/favorites"), { [show.id]: show });
};

export const removeFavourite = (show: ShowType, uid: string) => {
  const db = getDatabase();
  remove(ref(db, "users/" + uid + "/favorites/" + show.id));
};

export const addToWatch = (show: ShowType, uid: string) => {
  const db = getDatabase();
  update(ref(db, "users/" + uid + "/watching"), { [show.id]: show });
};

export const removeFromWatch = (uid: string) => {
  const db = getDatabase();
  remove(ref(db, "users/" + uid + "/watching/"));
};
