import React from "react";
import { useCallback, useEffect, useState } from "react";
import { getShowsBySearch, ShowType } from "../../../api/_service";
import { Link, useSearchParams } from "react-router-dom";

const MovieList = () => {
  const [currentSearch, setCurrentSearch] = useSearchParams();
  const [shows, setShows] = useState<ShowType[]>([]);

  const handleOnSearchChange = useCallback(
    (query: string) => {
      setCurrentSearch({ search: query });
    },
    [setCurrentSearch]
  );

  const isSearchButtonDisabled = () => currentSearch.get("search")?.trim().length === 0;

  const handleOnSearch = useCallback(() => {
    getShowsBySearch(currentSearch?.get("search") || "").then((res) => setShows(res));
  }, [currentSearch]);
  useEffect(() => {
    const currentSearchStr = currentSearch?.get("search")?.trim();
    if (!!currentSearchStr && currentSearchStr.length > 0 && shows.length === 0) {
      handleOnSearch();
    }
    // eslint-disable-next-line
  }, [handleOnSearch]);

  return (
    <>
      <form
        autoComplete='off'
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input
          type='text'
          placeholder='culo..'
          onChange={(e) => handleOnSearchChange(e.target.value)}
          value={currentSearch.get("search")!}
          autoFocus
        />
        <button disabled={isSearchButtonDisabled()} onClick={handleOnSearch}>
          CULO
        </button>
      </form>
      {shows.map((el, id) => (
        <div key={id}>
          <div>
            <img src={el.image} alt='movie' />
            <p title={el.title}>{<Link to={el.id.toString()}>{el.title}</Link>}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
