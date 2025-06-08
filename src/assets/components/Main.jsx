import { useSearch } from "../../contexts/Searchcontext";

export default function Main() {
  const { movies } = useSearch();

  return (
    <main>
      <div className="container m-3">
        <div className="row">
          {movies.map((movie, i) => {
            return (
              <div className="col-3 g-3">
                <div key={movie.id} className="card">
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
  );
}
