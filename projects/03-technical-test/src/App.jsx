import { useEffect, useState } from 'react'

export function App () {
  const CAT_FACT_API = 'https://catfact.ninja/fact'
  const [fact, setFact] = useState('')

  useEffect(() => {
    fetch(CAT_FACT_API)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstWord = fact.split(' ', 1)
        console.log(firstWord)
      })
  }, [])
  return (
    <>
      <h1>Cat Facts</h1>
      <p> {fact} </p>
    </>
  )
}
