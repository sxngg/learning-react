const OMDBAPI_URL = 'http://www.omdbapi.com/?apikey='
const API_KEY = 'e44d5204'

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  try {
    const response = await fetch(`${OMDBAPI_URL}${API_KEY}&s=${search}`)
    const json = await response.json()

    const movies = json.Search

    return movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      image: movie.Poster
    }))
  } catch (e) {
    throw new Error('Error searching movies')
  }
}
