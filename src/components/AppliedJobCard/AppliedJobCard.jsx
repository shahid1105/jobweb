import React from "react";
import "./AppliedJobCard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const AppliedJobCard = ({ card }) => {
  const {
    id,
    companyLogo,
    jobName,
    companyName,
    fulltime,
    remote,
    location,
    salary,
  } = card;

  return (
    <div className="mt-14">
      <div className="card-container p-10">
        <div className="flex gap-10">
          <img className="card-img" src={companyLogo} alt="" />
          <div>
            <h1 className="job-title">{jobName}</h1>
            <p className="job-company-name">{companyName}</p>
            <div className="flex gap-5 mt-3">
              <h4 className="job-full-part-time">{fulltime}</h4>
              <h4 className="job-full-part-time">{remote}</h4>
            </div>
            <div className="flex gap-5 mt-3">
              <h4 className="flex gap-2 items-center">
                <FontAwesomeIcon icon={faLocationDot} />
                {location}
              </h4>
              <h4>Salary: {salary}</h4>
            </div>
          </div>
        </div>
        <div className="card-btn-div">
          <Link to={`/viewDetails/${id}`}>
            <button className="card-view-btn">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobCard;
