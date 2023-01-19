import { useEffect, useState } from "react";
import { getShowsBySearch, Show } from "../../../Api/_service";
import { useSearchParams } from "react-router-dom";
import Card from "../../../Components/Card/Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [show, setShow] = useState<Show[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSearch = () => {
    getShowsBySearch(searchParams?.get("search") || "").then((res) => setShow(res));
  };

  useEffect(() => {
    handleSearch();
  }, [searchParams]);

  const getQuery = (e: any) => {
    setQuery(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div id='test'>
      <h1>TV Maze</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}>
        <input type='text' onChange={getQuery} value={query} autoFocus />
        <button onClick={() => setSearchParams({ search: query })}>Search</button>
      </form>

      {show.map((el, i) => (
        <Card show={el} key={el.id} />
      ))}
    </div>
  );
};

export default Search;
