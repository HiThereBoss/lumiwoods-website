
import NavLink from './NavLink.jsx'

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
              <NavLink to='/' text='Home' />
            </li>
            <li>
              <NavLink to='/about' text='About' />
            </li>
            <li>
              <NavLink to='/contact' text='Contact' />
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header