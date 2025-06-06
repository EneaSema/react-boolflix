import axios from "axios";

import { useState } from "react";

import { createContext, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  /* VARIABILI PER URL MOVIE */
  const appName = import.meta.env.VITE_NAME_APP;
  console.log(import.meta.env);
  const urlApi = import.meta.env.VITE_URL_API;
  const keyApi = import.meta.env.VITE_API_KEY;

  /* VARIABILE REACT PER IL CAMBIO DELLA RICERCA */
  const [query, setQuery] = useState("");

  /* URL PER RICERCA */
  const urlSearchMovies = `${urlApi}/search/movie?api_key=${keyApi}&query=${query}`;
  console.log(urlSearchMovies);

  /* DEFINISCO LA VARIABILE REATTIVA CHE RICEVERA LA RISPOSTA*/

  const [movies, setMovies] = useState([]);
  console.log(movies);

  /* CHIAMATA AXIOS */

  const fechtOnClick = () => {
    axios.get(urlSearchMovies).then((resp) => {
      console.log(resp.data.results);
      setMovies(resp.data.results);
    });
  };
  return;
  <SearchContext.Provider value={""}>{children}</SearchContext.Provider>;
}

function useSearch() {
  const context = useContext(SearchContext);
  return context;
}
export { SearchProvider, useSearch };
