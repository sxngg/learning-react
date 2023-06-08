import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/randomFact'

export function App () {
  const CAT_IMAGE_URL = 'https://cataas.com'
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3)
    console.log(threeFirstWords.join(' '))

    fetch(`${CAT_IMAGE_URL}/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => {
        const { url } = data
        setCatImageUrl(url)
      })
  }, [fact])

  async function handleClick () {
    // getRandomFact().then(newFact => setFact(newFact))
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return (
    <main>
      <h1>Cat Facts</h1>
      <button onClick={handleClick}> Get random fact </button>
      <section>
        <p> {fact} </p>
        <p>{catImageUrl && <img src={`${CAT_IMAGE_URL}${catImageUrl}`} alt={`Image extracted with three first words in the API: ${CAT_IMAGE_URL}`} />} </p>
      </section>
    </main>
  )
}
