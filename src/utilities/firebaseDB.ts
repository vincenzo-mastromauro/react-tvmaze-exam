// add to db - remove from db - get from db
import { getDatabase, ref, update, remove, onValue } from "firebase/database";
import { ShowType } from "../api/_service";
import { app } from "./firebase";

//using local storage

const db = getDatabase(app);

// add to db
export const addFavorite = (uid: string, data: ShowType) => {
  const showID = data.id;
  //checks if the imgage is null or not
  if (typeof data.image === "undefined") {
    //if image is undefined
    data.image = "https://picsum.photos/200/300";
  }
  update(ref(db, `users/${uid}/shows/${showID}`), data);
};
// remove to db
export const removeFavorite = (uid: string, data: ShowType) => {
  const showID = data.id;
  remove(ref(db, `users/${uid}/shows/${showID}`));
};
//get from db
export const takeFavorites = (uid: string, callback: any) => {
  onValue(ref(db, `users/${uid}/shows`), (snapshot) => {
    const data = snapshot.val();
    callback(data);
  });
};
