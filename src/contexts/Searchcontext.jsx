import axios from "axios";

import { createContext, useContext, useState } from "react";

import itFlag from "../assets/img/it.png";
import usFlag from "../assets/img/us.png";
import unknownFlag from "../assets/img/unknown.jpg";

/* VARIABILI PER URL THEMOVIEDB */
const appName = import.meta.env.VITE_NAME_APP;
console.log(import.meta.env);
const urlApi = import.meta.env.VITE_URL_API_THEMOVIEDB;
const keyApi = import.meta.env.VITE_API_KEY;

const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  /* VARIABILE REACT PER IL CAMBIO DELLA RICERCA */
  const [query, setQuery] = useState("");
  /* DEFINISCO LA VARIABILE REATTIVA CHE RICEVERA LA RISPOSTA PER I MOVIES*/

  const [movies, setMovies] = useState([]);
  console.log(movies);

  /* DEFINISCO LA VARIABILE REATTIVA CHE RICEVERA LA RISPOSTA PER LE TV SERIES*/

  const [series, setSeries] = useState([]);
  console.log(series);

  /* FUNZIONE PER EFFETTUARE CHIAMATA PER ENTRAMBI */

  const search = (query) => {
    /* URL PER RICERCA MOVIES */
    const urlSearchMovies = `${urlApi}/search/movie?api_key=${keyApi}&query=${query}`;
    console.log(urlSearchMovies);

    /* CHIAMATA AXIOS PER MOVIES */

    axios
      .get(urlSearchMovies)
      .then((resp) => {
        console.log(resp.data.results);
        const result = resp.data.results.map((movie, i) => ({
          id: movie.id,
          title: movie.title,
          original_title: movie.original_title,
          original_language: movie.original_title,
          rating: movie.vote_average,
          flagLanguage: getFlag(movie.original_language),
        }));
        setMovies(result);
      })
      .catch((err) => {
        console.log(err);
      });

    /* URL PER RICERCA TVSERIES */

    const urlSearchTvSeries = `${urlApi}/search/tv?api_key=${keyApi}&query=${query}`;
    console.log(urlSearchTvSeries);

    /* CHIAMATA AXIOS PER TV SERIES */

    axios
      .get(urlSearchTvSeries)
      .then((resp) => {
        console.log(resp.data.results);
        const result = resp.data.results.map((serie, i) => ({
          id: serie.id,
          title: serie.name,
          original_title: serie.orginal.name,
          original_language: serie.original_title,
          rating: serie.vote_average,
          flagLanguage: getFlag(serie.original_language),
        }));
        setSeries(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const elements = {
    movies: movies,
    series: series,
    query: query,
    setQuery: setQuery,
    search: search,
  };

  /* FUNZIONE PER LA BANDIERA */
  const getFlag = (lan) => {
    if (lan === "it") {
      return itFlag;
    }
    if (lan === "en") {
      return usFlag;
    }
    return unknownFlag;
  };

  return (
    <SearchContext.Provider value={elements}>{children}</SearchContext.Provider>
  );
};

const useSearch = () => {
  return useContext(SearchContext);
};
export { SearchProvider, useSearch };
