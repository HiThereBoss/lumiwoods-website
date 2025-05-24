import { Link } from 'react-router-dom'

function Header() {
  return (
     <div className='w-full bg-black flex justify-between items-center p-4'>
        <h1 className='text-white text-2xl'>ZenKids</h1>
        <nav>
          <ul className='flex space-x-4'>
            <li>
              <Link to='/' className='text-white hover:text-gray-400'>Home</Link>
            </li>
            <li>
              <Link to='/about' className='text-white hover:text-gray-400'>About</Link>
            </li>
            <li>
              <Link to='/contact' className='text-white hover:text-gray-400'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
  )
}

export default Header