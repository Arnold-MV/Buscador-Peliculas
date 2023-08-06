import Nav from './Nav'

const Header = () => {
  return (
    <header className='relative grid gap-2 py-4 text-white place-items-center'>
      <h1 className='text-3xl font-bold'>Buscador de Peliculas</h1>
      <Nav />
    </header>
  )
}

export default Header
