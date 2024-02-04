/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function ListOfMovies({ movies }) {
  console .log(movies);
  return (
    <ul className="movies">
      {
      // eslint-disable-next-line react/prop-types
      movies.map( movie => {
        return (
          <li className='movie'
           key={movie.id}>
            <h2>{movie.title}</h2>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.title} />
          </li>
        );
      })
      }
    </ul>
  );
}
function NoResults() {
  return <p>No hay resultados</p>;
}

export function Movies({movies}) {

  const hasMovies = movies?.length > 0;

  return (
    hasMovies 
  ? <ListOfMovies movies={movies} /> 
  : <NoResults />
  );
}
