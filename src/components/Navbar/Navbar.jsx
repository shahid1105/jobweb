import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="md:mx-48 lg:mx-48 md:flex lg:flex md:justify-between lg:justify-between md:pt-16 lg:pt-16 md:px-3 lg:px-3 job-web-nav">
        <div>
          <h1 className="job-web">JobWave</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="/applied">Applied Jobs</Link>
          <Link to="/blog">Blog</Link>
        </div>
        <div>
          <button className="btn-star">Star Applying</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
