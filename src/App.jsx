import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  /* DATI PER CHIAMATE AXIOS */
  const urlApi = "https://api.themoviedb.org/3";
  const apiKey = "api_key=ecc2f9c18e89d6d5b71e3d9673461c45";
  // const language = "language=it";
  const query = "query=scrubs";

  /* VARIABILE DI STATO */
  const [moviesList, setMoviesList] = useState([]);

  /* FUNZIONE ONCHANGE */
  const handleChangeSearch = (e) => {
    useEffect(() => {
      [...moviesList];
      e.target.name = e.target.value;
    }, []);
  };

  /* FUNZIONE ONCLICK BUTTON */
  const handleClicKButton = (e) => {
    e.preventDefault();
    useEffect(() => {
      axios.get(``).then((res) => {
        console.log(res.data);
      });
      setMoviesList(moviesList);
    }, []);
    return e.target.value;
  };
  return (
    <>
      <h1> BoolFlix</h1>
      <header>
        <div>
          <input
            onChange={handleChangeSearch}
            type="search"
            placeholder="search"
          />
          <button onClick={handleClicKButton}>Cerca</button>
        </div>
      </header>
    </>
  );
}

export default App;
