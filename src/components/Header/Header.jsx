import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="bg-color">
      <div className="pt-14">
        <section className="flex gap-y-14">
          <div className="one-step-div mt-16 md:ms-48">
            <h1 className="one-step-title">
              One Step Closer To Your{" "}
              <span className="dream-job">Dream Job</span>
            </h1>
            <p className="header-para">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <button className="get-btn">Get Started</button>
          </div>
          <div>
            <img
              className="header-img"
              src="../../../public/image/P3OLGJ1 copy 1.png"
              alt=""
            />
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;
