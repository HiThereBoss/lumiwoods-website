import { useState } from 'react';
import logo from '../assets/images/logo.png';
import NavLink from './NavLink.jsx';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative w-full h-[10vh] flex items-center justify-between px-4 bg-white shadow-md">
      {/* Logo */}
      <img
        src={logo}
        alt="Lumiwoods Logo"
        className="w-12 h-12 object-contain"
      />

      {/* Desktop nav */}
      <nav className="hidden md:flex space-x-4">
        {['/', '/about', '/preview', '/forEducators', '/forParents', '/contact'].map((path, i) => {
          const texts = ['Home','About','Preview','Educators','Parents','Contact'];
          return <NavLink key={path} to={path} text={texts[i]} />;
        })}
      </nav>

      {/* Mobile button */}
      <button
        className="md:hidden text-2xl p-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="absolute top-full right-0 w-3/4 bg-white shadow-lg md:hidden">
          <ul className="flex flex-col space-y-2 p-4">
            {['/', '/about', '/preview', '/forEducators', '/forParents', '/contact'].map((path, i) => {
              const texts = ['Home','About','Preview','Educators','Parents','Contact'];
              return (
                <li key={path} onClick={() => setIsOpen(false)}>
                  <NavLink to={path} text={texts[i]} />
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
