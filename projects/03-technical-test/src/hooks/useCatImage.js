import { useEffect, useState } from 'react'

const CAT_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [catImageUrl, setCatImageUrl] = useState()

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

  return { catImageUrl: `${CAT_IMAGE_URL}${catImageUrl}` }
}
