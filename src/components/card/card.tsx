import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShowType } from "../../api/_service";
import { addFavorite, removeFavorite } from "../../utilities/firebaseDB";

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

  //change the uid to the uid of the local storage
  const handleAddFavorite = (show: ShowType) => {
    addFavorite("6qppjjuc6JREBaZmZTTgvCeChPR2", show);
    setIsFavorite(true);
  };
  const handleRemoveFavorite = (show: ShowType) => {
    removeFavorite("6qppjjuc6JREBaZmZTTgvCeChPR2", show);
    setIsFavorite(false);
  };

  return (
    <div className='card'>
      <img id='movieImg' src={el.image} alt='movie' />
      <p title={el.title}>{<Link to={el.id.toString()}>{el.title}</Link>}</p>
      <div>
        <p>
          {isFavorite ? (
            <div style={{ color: "white" }} onClick={() => handleRemoveFavorite(el)}>
              remove from favorite
            </div>
          ) : (
            <div style={{ color: "white" }} onClick={() => handleAddFavorite(el)}>
              add to favorite
            </div>
          )}
          {/* <img src={StarIcon} alt='' onClick={} /> */}
        </p>
      </div>
    </div>
  );
};

export default Card;
