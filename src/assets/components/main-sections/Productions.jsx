import Card from "./Card";

export default function Productions({ results }) {
  return (
    <section>
      <div className="container m-3">
        <div className="row">
          {results.map((result) => {
            return <Card media={result} />;
          })}
        </div>
      </div>
    </section>
  );
}
