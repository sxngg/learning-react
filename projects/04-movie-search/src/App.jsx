import './App.css'
import { useSearchMovie } from './hooks/useSearchMovie'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App () {
  const [sort, setSort] = useState(false)
  const { search, setSearch, error } = useSearch()
  const { listMovies, getMovies } = useSearchMovie({ search, sort })

  const debounceGetMovies = useCallback(
    debounce(search => {
      getMovies({ search })
    }, 300), [getMovies]
  )

  function handleSubmit (event) {
    event.preventDefault()
    getMovies({ search })
    /**
    event.preventDefault()
    /**
     * Este codigo es mejor que usar un useRef porque escala mejor en caso de tener más inputs.
     * Lo que hace es: new window.For... crea una nueva instancia del elemento que surgió en el evento
     * Object.fromEntries toma esta/s instancia/s y las convierte en un objeto
     * { query } es el destructuring que extrae la propiedad query de lo resultante del Object.fromEntries
    const { query } = Object.fromEntries(
      new window.FormData(event.target)
    )
    console.log(query)
    */
  }

  function handleChange (event) {
    const newSearch = event.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  function handleSort () {
    setSort(!sort)
  }

  return (
    <div className='page'>
      <header>
        <h1> Movie Search </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' />
          <input type='checkbox' onChange={handleSort} checked={sort} />
          <button type='submit'> Find </button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={listMovies}> </Movies>
      </main>
    </div>
  )
}
export default App
