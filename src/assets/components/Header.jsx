import { useSearch } from "../../contexts/Searchcontext";

export default function Header() {
  const { query, setQuery, fetchMovies } = useSearch();
  /* FUNZIONE CHANGE NELLA RICERCA */

  const handleChangeQuery = (e) => {
    return setQuery(e.target.value);
  };

  /* FUNZIONE CLICK NELLA RICERCA */

  const handleSubmitForm = (e) => {
    e.preventDefault();
    fetchMovies();
  };

  return (
    <header>
      <div className="container m-3">
        <form className="form-search" onSubmit={handleSubmitForm}>
          <input
            type="text"
            value={query}
            onChange={handleChangeQuery}
            placeholder="Cerca film"
          />
          <button type="submit">Cerca</button>
        </form>
      </div>
    </header>
  );
}
