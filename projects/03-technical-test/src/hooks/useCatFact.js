import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/randomFact'

export function useCatFact () {
  const [fact, setFact] = useState()

  useEffect(() => {
    getRandomFact().then(newFact => setFact(newFact))
  }, [])

  async function switchFact () {
    // getRandomFact().then(newFact => setFact(newFact))
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  return { fact, switchFact }
}
