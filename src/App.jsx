import axios from "axios";

import { useState, useEffect } from "react";

function App() {
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

  /* FUNZIONE CHANGE NELLA RICERCA */

  const handleChangeQuery = (e) => {
    return setQuery(e.target.value);
  };

  /* FUNZIONE CLICK NELLA RICERCA */

  const handleClickForm = (e) => {
    e.preventDefault();
    fechtOnClick();
  };

  return (
    <>
      <header>
        <div className="container m-3">
          <form className="form-search" onClick={handleClickForm}>
            <input
              type="text"
              value={query}
              onChange={handleChangeQuery}
              placeholder="Cerca film"
            />
            <button>Cerca</button>
          </form>
        </div>
      </header>
      <main>
        <div className="container m-3">
          <div className="row">
            {movies.map((movie, i) => {
              return (
                <div className="col-3 g-3">
                  <div className="card">
                    <div className="card-title m-2">
                      <h1>{movie.title}</h1>
                      <hr />
                      <h2>{movie.original_title}</h2>
                      <hr />
                    </div>
                    <div className="card-body m-2">
                      <ul>
                        <li>{movie.original_language}</li>
                        <hr />
                        <li>{movie.vote_average}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
