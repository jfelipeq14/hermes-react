// src/pages/layout/Sidebar.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Componente de un ítem de la barra lateral
export function SidebarItem({ name, href, icon }) {
  return (
    <div className="sidebar-item">
      <Link to={href} className="sidebar-link">
        <div className="sidebar-icon">{icon}</div>
        <div className="sidebar-text">{name}</div>
      </Link>
    </div>
  );
}

SidebarItem.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired
};

// Componente de la barra lateral
export default function Sidebar({ children }) {
  return (
    <div className="sidebar">
      {children}
    </div>
  );
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired
};
