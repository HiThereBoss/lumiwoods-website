import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import NavLink from './NavLink.jsx';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-[100] w-full h-[10vh] flex items-center justify-between px-4 bg-parchment shadow-md">
      {/* Logo */}
      <img
        src={logo}
        alt="Lumiwoods Logo"
        className="w-12 h-12 object-contain"
      />

      {/* Desktop navigation */}
      <nav className="hidden md:flex space-x-4">
        <NavLink to="/" text="Home" />
        <NavLink to="/about" text="About" />
        <NavLink to="/preview" text="Preview" />
        <NavLink to="/forEducators" text="For Educators" />
        <NavLink to="/forParents" text="For Parents" />
        <NavLink to="/contact" text="Contact" />
      </nav>

      {/* Mobile menu toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-2xl p-2 text-gamebrown focus:outline-none"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="absolute top-full right-0 w-3/4 bg-parchment shadow-xl border border-[#E3D6C5] md:hidden z-[99]">
          <ul className="flex flex-col p-4 space-y-3">
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/preview', label: 'Preview' },
              { path: '/forEducators', label: 'For Educators' },
              { path: '/forParents', label: 'For Parents' },
              { path: '/contact', label: 'Contact' },
            ].map(({ path, label }) => (
              <li key={path} onClick={() => setIsOpen(false)}>
                <NavLink to={path} text={label} />
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
