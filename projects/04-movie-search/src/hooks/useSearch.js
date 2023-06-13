import { useEffect, useRef, useState } from 'react'

export function useSearch () {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
  const isFirstInput = useRef(true)

  useEffect(() => {
    if (isFirstInput.current) {
      isFirstInput.current = search === ''
      return
    }

    if (search === '') {
      setError('U cant search a empty movie')
      return
    }

    if (search.match(/^\d+$/)) {
      setError('U cant search a movie with numbers')
      return
    }

    if (search.length < 3) {
      setError('Search might be minimum three characters')
      return
    }

    setError(null)
  }, [search])

  return { search, setSearch, error }
}
