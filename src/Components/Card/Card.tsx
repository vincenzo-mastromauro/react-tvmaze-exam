import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShowType } from "../../Api/_service";
import { addFavorite, removeFavorite } from "../../Firebase/realtimeDB";

type PropsCard = {
  el: ShowType;
};

const Card = ({ el }: PropsCard) => {
  //state is favorite or not
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isFavorite = localStorage.getItem(el.id.toString());
    if (isFavorite) {
      setIsFavorite(true);
    }
  }, [el.id]);
  //get uid from local storage
  const uid = localStorage.getItem("uid");

  //   change the uid to the uid of the local storage
  const handleAddFavorite = (show: ShowType) => {
    addFavorite(uid!, show);
    console.log(uid);
    setIsFavorite(true);
  };
  const handleRemoveFavorite = (show: ShowType) => {
    removeFavorite(uid!, show);
    setIsFavorite(false);
  };

  return (
    <div className='card'>
      <img id='movieImg' src={el.image} alt='movie' />
      <p title={el.title}>{<Link to={el.id.toString()}>{el.title}</Link>}</p>
      <div>
        <p>
          {isFavorite ? (
            <p onClick={() => handleRemoveFavorite(el)}>remove from favorite</p>
          ) : (
            <p onClick={() => handleAddFavorite(el)}>add to favorite</p>
          )}
          {/* <img src={StarIcon} alt='' onClick={} /> */}
        </p>
      </div>
    </div>
  );
};

export default Card;
