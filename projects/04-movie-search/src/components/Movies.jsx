function ListOfMovies ({ movies }) {
  return (
    <ul className='movies'>
      {
        movies.map(movie => (
          <li className='movie' key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
            <img src={movie.image} alt={movie.image} />
          </li>
        ))
      }
    </ul>
  )
}

function NoMovieResults () {
  return (
    <p> Not results </p>
  )
}

export function Movies ({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
      ? <ListOfMovies movies={movies}> </ListOfMovies>
      : <NoMovieResults />
  )
}
