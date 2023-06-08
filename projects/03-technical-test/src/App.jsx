import { useEffect, useState } from 'react'
import './App.css'

export function App () {
  const CAT_FACT_API = 'https://catfact.ninja/fact'
  const CAT_IMAGE_URL = 'https://cataas.com'
  const [fact, setFact] = useState()
  const [catImageUrl, setCatImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_FACT_API)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
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

  return (
    <main>
      <h1>Cat Facts</h1>
      <section>
        <p> {fact} </p>
        <p>{catImageUrl && <img src={`${CAT_IMAGE_URL}${catImageUrl}`} alt={`Image extracted with three first words in the API: ${CAT_IMAGE_URL}`} />} </p>
      </section>
    </main>
  )
}
