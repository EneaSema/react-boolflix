import axios from "axios";

import { createContext, useContext, useState } from "react";

/* VARIABILI PER URL MOVIE */
const appName = import.meta.env.VITE_NAME_APP;
console.log(import.meta.env);
const urlApi = import.meta.env.VITE_URL_API;
const keyApi = import.meta.env.VITE_API_KEY;

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  /* VARIABILE REACT PER IL CAMBIO DELLA RICERCA */
  const [query, setQuery] = useState("");

  /* URL PER RICERCA */
  const urlSearchMovies = `${urlApi}/search/movie?api_key=${keyApi}&query=${query}`;
  console.log(urlSearchMovies);

  /* DEFINISCO LA VARIABILE REATTIVA CHE RICEVERA LA RISPOSTA*/

  const [movies, setMovies] = useState([]);
  console.log(movies);

  /* CHIAMATA AXIOS */

  const fetchMovies = () => {
    axios
      .get(urlSearchMovies)
      .then((resp) => {
        console.log(resp.data.results);
        setMovies(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const elements = {
    movies: movies,
    query: query,
    setQuery: setQuery,
    fetchMovies: fetchMovies,
  };

  return (
    <SearchContext.Provider value={elements}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};
export { SearchProvider, useSearch };
