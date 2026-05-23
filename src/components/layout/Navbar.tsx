import { Cpu, Database, Globe2, ScrollText, Users } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { navigationItems } from '@/data/navigation';

const navIcons = {
  '/': Database,
  '/technology': Cpu,
  '/people': Users,
  '/history': ScrollText,
} as const;

export function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="brand" aria-label="Antigods Archive home">
        <Globe2 size={24} aria-hidden="true" />
        <span>
          ANTIGODS<span className="brand-slash">/</span>ARCHIVES
        </span>
      </NavLink>

      <nav className="nav-links" aria-label="Primary navigation">
        {navigationItems.map((item) => {
          const Icon = navIcons[item.path as keyof typeof navIcons];

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              <Icon size={16} aria-hidden="true" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </nav>
    </nav>
  );
}
