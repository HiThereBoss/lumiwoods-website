import { NavLink as RouterNavLink } from 'react-router-dom'

export default function NavLink({ to, text }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-MG-700 hover:text-MG-800 transition-all duration-300 hover:font-bold ${isActive ? 'font-bold cursor-default pointer-events-none border-b-2 border-MG-500' : ''}`
      }
    >
      {text}
    </RouterNavLink>
  )
}
