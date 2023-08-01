import { useState } from 'react'

export function useFetch () {
  const key = '4287ad07'
  const [datos, setDatos] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const searchMovies = (searchTerm) => {
    setLoading(true)
    setError(null)

    fetch(`https://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(searchTerm)}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.Response === 'True') {
          setDatos(data.Search)
        } else {
          setError(data.Error || 'Error fetching data')
        }
      })
      .catch((err) => {
        setError(err.message || 'Error fetching data')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return { datos, loading, error, searchMovies }
}
