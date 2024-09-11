// src/components/CardMenu.jsx
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Componente CardMenu
const CardMenu = ({ title, logo, href }) => (
  <div className="card-menu">
    <Link to={href} className="card-link">
      <div className="card-logo">{logo}</div>
      <div className="card-title">{title}</div>
    </Link>
  </div>
);

CardMenu.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.element.isRequired,
  href: PropTypes.string.isRequired
};

export default CardMenu;

