import { NavLink as RouterNavLink } from 'react-router-dom';

export default function NavLink({ to, text }) {
  return (
    <RouterNavLink
      to={to}
      className={({ isActive }) =>
        `text-gamebrown hover:text-forestgreen transition-all duration-300 hover:font-semibold ${
          isActive
            ? 'font-bold cursor-default pointer-events-none border-b-2 border-forestgreen'
            : ''
        }`
      }
    >
      {text}
    </RouterNavLink>
  );
}
