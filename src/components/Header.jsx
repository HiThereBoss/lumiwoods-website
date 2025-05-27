import { Link } from 'react-router-dom'

function Header() {
  return (
     <div className='w-full flex items-center justify-center-safe p-4'>
        <img 
          src='./src/assets/images/logo.png'
          className='text-custom-blue text-3xl absolute left-15 top-5 w-[60px] h-[60px] object-cover'
        />
        <nav>
          <ul className='flex space-x-4 mt-3'>
            <li>
              <Link to='/' className='text-custom-blue hover:text-orange-400 transition-colors duration-300'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='text-custom-blue hover:text-orange-400 transition-colors duration-300'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='text-custom-blue hover:text-orange-400 transition-colors duration-300'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header