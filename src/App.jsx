function App() {
  const appName = import.meta.env.VITE_NAME_APP;
  console.log(import.meta.env);
  const urlApi = import.meta.env.VITE_URL_API;
  const keyApi = import.meta.env.VITE_API_KEY;
  const query = "Harry";

  const urlSearchMovies = "{`${urlApi}?${keyApi}`}";
  return (
    <>
      <h1>{appName}</h1>

      {/* <header>
        <div>
          <input value={moviesList}
            onChange={handleChangeSearch}
            type="search"
            placeholder="search"
          />
          <button name={moviesList} onClick={handleClicKButton}>Cerca</button>
        </div>
      </header> */}
    </>
  );
}

export default App;
