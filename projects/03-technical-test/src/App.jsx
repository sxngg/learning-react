import './App.css'
import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

export function App () {
  const { fact, switchFact } = useCatFact()
  const { catImageUrl } = useCatImage({ fact })

  function handleClick () {
    switchFact()
  }

  return (
    <main>
      <h1>Cat Facts</h1>
      <button onClick={handleClick}> Get random fact </button>
      <section>
        {fact && <p>{fact}</p>}
        {catImageUrl && <img src={catImageUrl} alt={`Image extracted with three first words in the API: ${fact}`} />}
      </section>
    </main>
  )
}
