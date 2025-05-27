import { NavLink as RouterNavLink } from 'react-router-dom'

function NavLink({ to, text }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-custom-blue transition-all duration-300 hover:font-bold${isActive ? ' font-bold cursor-default pointer-events-none' : ''}`
      }
    >
      {text}
    </RouterNavLink>
  )
}

export default NavLink