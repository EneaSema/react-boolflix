import axios from "axios";

import { useState, useEffect } from "react";

export default function Main() {
  /* VARIABILI PRESE DA ENV */

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
    return setMovies(e.target.value);
  };

  useEffect(() => {
    axios.get(urlSearchMovies).then((resp) => {
      console.log(resp.data.results);
      setMovies(resp.data.results);
      console.log(movies);
    });
  }, []);
  return (
    <main>
      <div className="container ">
        <div className="row">
          {movies.map((movies, i) => {
            return (
              <div className="col g-3">
                <div key={movies.id} className="card my-3 h-100 ">
                  <div className="card-title my-2">
                    <h1>{`Titolo:${movies.title}`}</h1>
                    <h2>{`Titolo originale:${movies.original_title}`}</h2>
                  </div>
                  <div className="card-body my-2">
                    <p>
                      {`Lingua originale:${movies.original_language}`}
                      <br />
                      {`Voto:${movies.vote_average}`}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
