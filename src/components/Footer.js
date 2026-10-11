import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span>EXPLORE</span>
            <strong>LESOTHO</strong>
          </Link>

          <p>
            Discover the mountains, culture and unforgettable
            experiences of the Kingdom in the Sky.
          </p>
        </div>


        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>Explore</h3>

          <Link to="/">Home</Link>
          <Link to="/attractions">Attractions</Link>
          <Link to="/enquiry">Visitor Enquiry</Link>
        </div>


        {/* EXPERIENCES */}
        <div className="footer-column">
          <h3>Experiences</h3>

          <span>Nature</span>
          <span>Culture</span>
          <span>Adventure</span>
          <span>Sightseeing</span>
        </div>


        {/* DESTINATION */}
        <div className="footer-column">
          <h3>Destination</h3>

          <p>
            Kingdom of Lesotho
            <br />
            Southern Africa
          </p>

          <Link to="/enquiry" className="footer-enquiry-link">
            Plan Your Visit →
          </Link>
        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Explore Lesotho.
          All rights reserved.
        </p>

        <p>
          The Kingdom in the Sky
        </p>

      </div>

    </footer>
  );
}

export default Footer;