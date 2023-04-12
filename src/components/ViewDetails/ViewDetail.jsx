import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import "./ViewDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faMessage,
  faPhone,
  faBookBookmark,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import { addToDb } from "../../Utilities/FakeDB";

const ViewDetail = () => {
  const { detailsId } = useParams();

  const details = useLoaderData();

  const [detailsData, setDetailsData] = useState({});

  const {
    id,
    salary,
    jobName,
    jobDescription,
    jobResponsibility,
    educationalRequirements,
    experiences,
    contactInformation,
    location,
  } = detailsData;

  useEffect(() => {
    if (details) {
      const detailsDt = details.find((dt) => dt.id === detailsId);
      setDetailsData(detailsDt);
    }
  }, []);

  const handlerAppliedJob = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <h1 className="banner">JOB Details</h1>
      <div className="mx-48 mb-48">
        <div className="mt-14 details-container">
          <div>
            <p>
              <span className="text-xl font-bold">Job Description:</span>{" "}
              <span className="text-[#757575]">{jobDescription}</span>
            </p>
            <p className="mt-3">
              <span className="text-xl font-bold">Job Responsibility:</span>{" "}
              <span className="text-[#757575]">{jobResponsibility}</span>
            </p>
            <p className="text-xl font-bold mt-5">
              <span>Educational Requirements:</span>
            </p>
            <p className="text-[#757575]">{educationalRequirements}</p>
            <p className="text-xl font-bold mt-5">Experiences:</p>
            <p className="text-[#757575]">{experiences}</p>
          </div>
          <div className="side-card">
            <div className="p-8">
              <h1 className="contact-card mb-4">Job Details</h1>
              <hr className="mb-3" />
              <p>
                <FontAwesomeIcon className="pr-2" icon={faDollarSign} />{" "}
                <span className="common-class">Salary:</span>
                {salary}
              </p>
              <p>
                <FontAwesomeIcon className="pr-2" icon={faBookBookmark} />{" "}
                <span className="common-class">Job Title: </span>
                {jobName}
              </p>
              <h1 className="contact-card mb-2 mt-4">Contact Information</h1>
              <hr className="mb-3" />
              <p>
                <FontAwesomeIcon className="pr-2" icon={faPhone} />{" "}
                <span className="common-class">Phone:</span>
                {contactInformation?.phone}
              </p>
              <p>
                <FontAwesomeIcon className="pr-2" icon={faMessage} />{" "}
                <span className="common-class">Email: </span>
                {contactInformation?.email}
              </p>
              <p>
                <FontAwesomeIcon className="pr-2" icon={faLocationDot} />
                <span className="common-class">Address: </span>
                {location}
              </p>
            </div>
            <button
              onClick={() => handlerAppliedJob(id)}
              className="w-full mt-16 apply-btn">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
