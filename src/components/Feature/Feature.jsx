import React from "react";
import "./Feature.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Feature = ({ feature }) => {
  const {
    id,
    companyLogo,
    jobName,
    companyName,
    fulltime,
    remote,
    location,
    salary,
  } = feature;
  return (
    <div>
      <div className="feature-job-card">
        <img src={companyLogo} alt="" />
        <h1 className="mt-3 mb-3 job-name">{jobName}</h1>
        <h3 className="company-name">{companyName}</h3>
        <div className="flex gap-5 mt-3">
          <h4 className="fulltime-remote">{fulltime}</h4>
          <h4 className="fulltime-remote">{remote}</h4>
        </div>
        <div className="flex gap-5 mt-3">
          <h4 className="flex gap-2 items-center">
            <FontAwesomeIcon icon={faLocationDot} />
            {location}
          </h4>
          <h4>Salary: {salary}</h4>
        </div>
        <div className="mt-3">
          <Link to="/viewDetails">
            <button className="btn-view">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
