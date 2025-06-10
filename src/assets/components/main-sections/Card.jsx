export default function Card({ media }) {
  return (
    <>
      <div className="col-3 g-3">
        <div key={media.id} className="card">
          <div className="card-title m-2">
            <h1>{media.title}</h1>
            <hr />
            <h2>{media.original_title}</h2>
            <hr />
          </div>
          <div className="card-body m-2">
            <ul className=" list d-flex-column justify-content-between align-items-center ">
              <li>{media.original_language}</li>
              <hr />
              <li>
                <img src={media.flagLanguage} alt="" />
              </li>
              <hr />
              <li>{media.rating}</li>
              <li>
                <img src={media.poster} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
