import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="site-header">
      <div className="nav-container">

        <NavLink
          to="/"
          className="logo"
          onClick={closeMenu}
        >
          <span className="logo-main">EXPLORE</span>
          <span className="logo-country">LESOTHO</span>
        </NavLink>

        <button
          type="button"
          className={`menu-toggle ${menuOpen ? "menu-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav
          className={
            menuOpen
              ? "navigation navigation-open"
              : "navigation"
          }
        >
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/attractions"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Attractions
          </NavLink>

          <NavLink
            to="/enquiry"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Enquiry
          </NavLink>
        </nav>

      </div>
    </header>
  );
}

export default Header;