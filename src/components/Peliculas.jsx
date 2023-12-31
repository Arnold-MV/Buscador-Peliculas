import React from 'react'

const Peliculas = ({ datos, selectedMovieType }) => {
  return (
    <main className='flex justify-center w-full p-3'>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
        className='justify-center w-full gap-6'
      >
        {datos.map((movie) => {
          if (!selectedMovieType || movie.Type === selectedMovieType) {
            return (
              <li className='flex flex-col items-center' key={movie.imdbID}>
                <img src={movie.Poster} alt={movie.Title} />
                <div className='text-center'>
                  <h3>{movie.Title}</h3>
                  <div>
                    <span>
                      {movie.Year} - {movie.Type}
                    </span>
                  </div>
                </div>
              </li>
            )
          }
          return null
        })}
      </ul>
    </main>
  )
}

export default Peliculas
