import axios from "axios";

import { useState, useEffect } from "react";

export default function Searchbar() {
  const appName = import.meta.env.VITE_NAME_APP;
  console.log(import.meta.env);
  const urlApi = import.meta.env.VITE_URL_API;
  const keyApi = import.meta.env.VITE_API_KEY;
  const query = "harry";

  /* CREAZIONE URL PER CHIAMATA API */
  const urlSearchMovies = `${urlApi}?api_key=${keyApi}&query=${query}`;
  console.log(urlSearchMovies);

  const [movies, setMovies] = useState([]);
  console.log(movies);

  const handleChange = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    return setMovies(e.target.value);
  };
  const handleClickButton = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    return setMovies(e.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1 className="my-3" my-3>
          {appName}
        </h1>
        <form className="form-search my-3">
          <input
            value={movies}
            onChange={handleChange}
            type="text"
            placeholder="search"
          />
          <input
            name={movies}
            onClick={handleClickButton}
            type="button"
            value="cerca"
          />
        </form>
      </div>
    </>
  );
}
