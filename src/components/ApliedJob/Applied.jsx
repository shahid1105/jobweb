import React, { useState } from "react";
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
  // const [filterData, setFilterData] = useState(jobCard);

  // const remoteHandler = () => {
  //   const remote = filterData.filter((job) => job.remote == "remote");
  //   setFilterData(remote);
  // };
  // const onSiteHandler = () => {};

  return (
    <div>
      <h3 className="banner">Applied Job</h3>
      <div className="md:mx-48 lg:mx-48">
        <div className="mt-14 flex gap-5 justify-end">
          <button onClick={() => remoteHandler()} className="filter-btn">
            Remote
          </button>
          <button className="filter-btn">On Site</button>
        </div>
        {jobCard.map((card) => (
          <AppliedJobCard key={card.id} card={card}></AppliedJobCard>
        ))}
      </div>
    </div>
  );
};

export default Applied;
