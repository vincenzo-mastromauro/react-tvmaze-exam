import { Link } from "react-router-dom";
import {
  addFavourite,
  addToWatch,
  removeFavourite,
  removeFromWatch,
} from "../../Firebase/firebaseDB";
import { CurrentUserConsumer } from "../../Context/UserContext";
import { ShowFav } from "../../Models/Interfaces/interfaces";
import { useFavouriteCheck } from "../../Hooks/useFavourite";
import { useWatchingCheck } from "../../Hooks/useWatching";

export const Card = (props: any) => {
  const { currentUser } = CurrentUserConsumer();

  const favorite = useFavouriteCheck(props.show.id);
  const watching = useWatchingCheck(props.show.id);

  const handleFavorite = (show: ShowFav) => {
    if (favorite) {
      removeFavourite(show, currentUser!.uid);
    } else {
      addFavourite(show, currentUser!.uid);
    }
  };
  const handleWatching = (show: ShowFav) => {
    if (watching) {
      removeFromWatch(currentUser!.uid);
    } else {
      removeFromWatch(currentUser!.uid);
      addToWatch(show, currentUser!.uid);
    }
  };

  return (
    <>
      <img src={props.show.image} alt={props.show.title} />
      <h3>{props.show.name}</h3>
      <p>{props.show.summary}</p>
      <Link to={`/movieList/${props.show.id}`}>Go To Detail</Link>
      {favorite ? (
        <button onClick={() => handleFavorite(props.show)}>Remove from Favourite</button>
      ) : (
        <button onClick={() => handleFavorite(props.show)}>Add to Favourite</button>
      )}
      {watching ? (
        <button onClick={() => handleWatching(props.show)}>Remove from Watching</button>
      ) : (
        <button onClick={() => handleWatching(props.show)}>Add to Watching</button>
      )}
    </>
  );
};

export default Card;
