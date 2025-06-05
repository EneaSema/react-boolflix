import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const appName = import.meta.env.VITE_NAME_APP;
  console.log(import.meta.env);
  const urlApi = import.meta.env.VITE_URL_API;
  const keyApi = import.meta.env.VITE_API_KEY;
  const query = "harry";

  const urlSearchMovies = `${urlApi}?api_key=${keyApi}&query=${query}`;
  console.log(urlSearchMovies);

  const [movies, setMovies] = useState([]);
  console.log(movies);

  useEffect(() => {
    axios.get(urlSearchMovies).then((resp) => {
      console.log(resp.data.results);
      setMovies(resp.data.results);
      console.log(movies);
    });
  }, []);
  return (
    <>
      <header>
        <div className="container my-3">
          <h1 className="my-3" my-3>
            {appName}
          </h1>
          <form className="form-search my-3">
            <input type="search" placeholder="search" />
            <input type="button" value="cerca" />
          </form>
        </div>
      </header>
      <main>
        <div className="container ">
          <div className="row">
            {movies.map((movies, i) => {
              return (
                <div className="col g-3">
                  <div className="card my-3 h-100 ">
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
    </>
  );
}

export default App;
