import { useCallback, useEffect, useState } from "react";

import { getShowsBySearch, ShowType } from "../../../api/_service";

import { Link, useSearchParams } from "react-router-dom";

import Navbar from "../../../components/navbar/navbar";

import NetflixLogo from "../../../assets/images/netflix-logo-full.svg";
import Capybara from "../../../assets/images/capybara.png";
import SearchIcon from "../../../assets/svg/search.svg";
import StarIcon from "../../../assets/svg/star.svg";

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
    scrollDown();
  }, [currentSearch]);
  useEffect(() => {
    const currentSearchStr = currentSearch?.get("search")?.trim();
    if (!!currentSearchStr && currentSearchStr.length > 0 && shows.length === 0) {
      handleOnSearch();
    }
    // eslint-disable-next-line
  }, [handleOnSearch]);

  const scrollDown = () => {
    window.scrollTo(0, 700);
    console.log("scrolling down");
  };
  return (
    <>
      <Navbar />
      <div className='form-container'>
        <div className='hero'>
          <h1>
            Search that <i>Movie</i>
          </h1>
          <span>
            A Service Provided By <img src={NetflixLogo} alt='netflix logo' id='logo' />
          </span>
        </div>
        <form
          id='search-form'
          autoComplete='off'
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input
            type='text'
            placeholder='Type a movie name'
            onChange={(e) => handleOnSearchChange(e.target.value)}
            value={currentSearch.get("search")!}
            autoFocus
          />
          <button disabled={isSearchButtonDisabled()} onClick={handleOnSearch} value='ciao'>
            <img src={SearchIcon} alt='search icon' />
          </button>
        </form>
      </div>
      <div className='cards-container'>
        {shows.map((el, id) => (
          <div key={id} className='card'>
            <img id='movieImg' src={el.image} alt='movie' />
            <p title={el.title}>{<Link to={el.id.toString()}>{el.title}</Link>}</p>
            <div>
              <p>
                <img src={StarIcon} alt='' />
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieList;
