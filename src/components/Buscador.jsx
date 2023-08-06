import React, { useState } from 'react'
import { useSearch } from '../hooks/useSearch'
import { useFetch } from '../hooks/useFetch'
import Peliculas from './Peliculas'

const Buscador = () => {
  const { search, updateSearch } = useSearch()
  const { datos, loading, error, searchMovies } = useFetch()

  const [selectedMovieType, setSelectedMovieType] = useState('') // Estado para el tipo de película

  const handleTypeChange = (event) => {
    setSelectedMovieType(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    searchMovies(search, selectedMovieType) // Utilizamos la función searchMovies del hook useFetch para realizar la búsqueda
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className='flex items-center justify-center gap-2'>
        <div className='flex flex-col gap-3 xs:flex-row xs:gap-2'>
          <input
            onChange={handleChange}
            value={search}
            name='query'
            placeholder='Avengers, Star Wars, The Matrix...'
            className='px-2 text-gray-700 rounded-md outline-none bg-slate-200'
            type='text'
          />
          <select className='text-gray-700 rounded-md outline-none bg-slate-200' value={selectedMovieType} onChange={handleTypeChange}>
            <option value=''>Todas</option>
            <option value='movie'>movie</option>
            <option value='series'>series</option>
            <option value='episode'>episode</option>
          </select>
        </div>
        <button
          type='submit'
          className='px-3 font-semibold transition-all rounded-sm bg-slate-500 hover:bg-slate-600'
        >
          Buscar
        </button>
      </form>
      {loading && <p className='text-center'>Cargando...</p>}
      {error && <p className='text-center text-red-600'>Error: {error}</p>}
      <Peliculas selectedMovieType={selectedMovieType} datos={datos} />
    </>
  )
}

export default Buscador
