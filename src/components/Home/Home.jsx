import React, { useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import Feature from "../Feature/Feature";
import JobCategory from "../JobCategory/JobCategory";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const features = useLoaderData();

  //   const [seeMore, setSeeMore] = useState(true);
  //   const [featuresAll, setFeaturesAll] = useState();

  //   if (seeMore) {
  //     seeMore = seeMore.slice(0, 4);
  //     setFeaturesAll(seeMore);
  //   } else {
  //     setSeeMore();
  //   }

  //   const seeMoreHandler = () => {}; onClick={() => seeMoreHandler(true)}

  return (
    <div>
      <Header></Header>
      <section>
        <JobCategory></JobCategory>
      </section>

      <section className="featured-container">
        <h1 className="featured-job">Featured Jobs</h1>
        <p className="feature-para">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="md:mx-48 mt-8 job-card-container">
          {features.map((feature) => (
            <Feature key={feature.id} feature={feature}></Feature>
          ))}
        </div>
        <div className="see-more-btn-div mt-10 mb-10">
          <button className="see-more-btn">See More</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
