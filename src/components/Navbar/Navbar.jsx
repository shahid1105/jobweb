import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <nav className="md:mx-48 flex justify-between pt-16 px-3 job-web-nav">
        <div>
          <h1 className="job-web">JobWave</h1>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/">Home</Link>
          <Link to="/statistics">Statistics</Link>
          <Link to="applied">Applied Jobs</Link>
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
