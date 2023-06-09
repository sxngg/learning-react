import { useEffect, useState } from 'react'

const OMDBAPI_URL = 'http://www.omdbapi.com/?apikey='
const API_KEY = 'e44d5204'
// const movieSearched = 'Harry'

export function useSearchMovie (movieSearched) {
  const [listMovies, setListMovies] = useState([])

  useEffect(() => {
    fetch(`${OMDBAPI_URL}${API_KEY}&s=${movieSearched}`)
      .then(res => res.json())
      .then(data => {
        const { Search } = data
        setListMovies(Search)
      })
  }, [movieSearched])

  return { listMovies }
}
