import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/movies'

export function useSearchMovie ({ search, sort }) {
  const [listMovies, setListMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
    if (search === previousSearch.current) return
    try {
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setListMovies(newMovies)
    } catch (e) {
      throw new Error('Error with searching')
    }
  }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...listMovies].sort((a, b) => a.title.localeCompare(b.title))
      : listMovies
  }, [sort, listMovies])

  return { listMovies: sortedMovies, sortedMovies, getMovies }
}
