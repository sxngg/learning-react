// import { useEffect, useRef, useState } from 'react'
import './App.css'
import { useSearchMovie } from './hooks/useSearchMovie'
import { Movies } from './components/Movies'
import { useSearch } from './hooks/useSearch'
// import responseMovies from './mocks/with-results.json'
// import withoutMovies from './mocks/no-results.json'

function App () {
  // const [movieSearched, setMovieSearched] = useState('Harry')
  // const [query, setQuery] = useState('')
  const { search, setSearch, error } = useSearch()
  const { listMovies } = useSearchMovie(search)

  function handleSubmit (event) {
    event.preventDefault()
    console.log({ search })
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
  }

  return (
    <div className='page'>
      <header>
        <h1> Movie Search </h1>
        <form className='form' onSubmit={handleSubmit}>
          <input style={{ border: '1px solid transparent', borderColor: error ? 'red' : 'transparent' }} onChange={handleChange} value={search} name='query' />
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
