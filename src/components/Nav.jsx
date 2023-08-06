import { BiLogoGmail, BiLogoGithub, BiLogoLinkedin } from 'react-icons/bi'

const Nav = () => {
  return (
    <nav>

      <ul className='flex gap-3 text-3xl md:gap-5'>
        <li className='hover:text-slate-500'><a href='https://github.com/Arnold-MV' target='_blank' rel='noopener noreferrer'><BiLogoGithub /></a></li>
        <li className='hover:text-slate-500'><a href='mailto:arnold.vilela.98@gmail.com' target='_blank' rel='noopener noreferrer'><BiLogoGmail /></a></li>
        <li className='hover:text-slate-500'><a href='https://www.linkedin.com/in/arnold-anderson-martinez-villela/' target='_blank' rel='noopener noreferrer'><BiLogoLinkedin /></a></li>
      </ul>

    </nav>
  )
}

export default Nav
