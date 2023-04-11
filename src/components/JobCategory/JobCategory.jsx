import React, { useEffect, useState } from "react";
import "./JObCategory.css";
import JobCard from "./JobCard";

const JobCategory = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    fetch("categoryData.json")
      .then((res) => res.json())
      .then((data) => setCategoryData(data));
  }, []);
  return (
    <div>
      <section className="job-category-container">
        <h1 className="job-category">Job Category List</h1>
        <p className="job-category-para">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:flex gap-3 md:mx-48 mt-8">
          {categoryData.map((data) => (
            <JobCard key={data.id} data={data}></JobCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default JobCategory;
