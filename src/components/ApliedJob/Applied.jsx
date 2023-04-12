import React from "react";
import { getStoredData } from "../../Utilities/FakeDB";
import { useLoaderData } from "react-router-dom";
import "./Applied.css";
import AppliedJobCard from "../AppliedJobCard/AppliedJobCard";

const Applied = () => {
  const jobData = useLoaderData();

  let jobCard = [];
  const appliedJobs = getStoredData();

  for (const id in appliedJobs) {
    const foundJobData = jobData.find((appliedJob) => appliedJob.id === id);
    if (foundJobData) {
      jobCard.push(foundJobData);
    }
  }
  console.log(jobCard);
  return (
    <div>
      <h3 className="banner">Applied Job</h3>
      <div className="md:mx-48 lg:mx-48">
        {jobCard.map((card) => (
          <AppliedJobCard key={card.id} card={card}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default Applied;
