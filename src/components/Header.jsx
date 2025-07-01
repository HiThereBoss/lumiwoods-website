import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import NavLink from './NavLink.jsx';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative z-50 w-full h-[10vh] flex items-center justify-between px-4 bg-white shadow-md">
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
        className="md:hidden text-2xl p-2 focus:outline-none"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <nav className="absolute top-full right-0 w-3/4 bg-white shadow-lg md:hidden z-50">
          <ul className="flex flex-col p-4 space-y-2">
            <li onClick={() => setIsOpen(false)}><NavLink to="/" text="Home" /></li>
            <li onClick={() => setIsOpen(false)}><NavLink to="/about" text="About" /></li>
            <li onClick={() => setIsOpen(false)}><NavLink to="/preview" text="Preview" /></li>
            <li onClick={() => setIsOpen(false)}><NavLink to="/forEducators" text="For Educators" /></li>
            <li onClick={() => setIsOpen(false)}><NavLink to="/forParents" text="For Parents" /></li>
            <li onClick={() => setIsOpen(false)}><NavLink to="/contact" text="Contact" /></li>
          </ul>
        </nav>
      )}
    </header>
  );
}