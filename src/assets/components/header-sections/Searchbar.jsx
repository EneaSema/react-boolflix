import { useState } from "react";
import { useSearch } from "../../../contexts/Searchcontext";

export default function Searchbar() {
  const { query, setQuery, search } = useSearch();

  /* FUNZIONE CHANGE NELLA RICERCA */

  const handleChangeQuery = (e) => {
    return setQuery(e.target.value);
  };

  /* FUNZIONE CLICK NELLA RICERCA */

  const handleSubmitForm = (e) => {
    e.preventDefault();
    search(query);
  };
  return (
    <form className="form-search" onSubmit={handleSubmitForm}>
      <input
        type="text"
        value={query}
        onChange={handleChangeQuery}
        placeholder="Cerca film"
      />
      <button type="submit">Cerca</button>
    </form>
  );
}
