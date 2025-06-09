import Productions from "./Productions";
import { useSearch } from "../../../contexts/Searchcontext";

export default function Main() {
  const { movies, series } = useSearch();
  return (
    <main>
      <Productions results={movies} />
      <hr />
      <Productions results={series} />
    </main>
  );
}
