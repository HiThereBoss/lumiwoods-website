import logo from '../assets/images/logo.png'
import NavLink from './NavLink.jsx'

export default function Header() {
  return (
    <div className="relative w-full h-[10vh] flex items-center justify-between px-4">
      <img
        src={logo}
        alt="Lumiwoods Logo"
        className="w-12 h-12 object-contain"
      />

      <nav>
        <ul className="flex space-x-4">
          <li><NavLink to="/" text="Home" /></li>
          <li><NavLink to="/about" text="About" /></li>
          <li><NavLink to="/preview" text="Preview" /></li>
          <li><NavLink to="/forEducators" text="For Educators" /></li>
          <li><NavLink to="/contact" text="Contact" /></li>
        </ul>
      </nav>
    </div>
  )
}
