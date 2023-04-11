import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const ViewDetail = () => {
  const { detailsId } = useParams();

  const details = useLoaderData();
  console.log(details, "loader data");

  const [detailsData, setDetailsData] = useState({});
  console.log(detailsData);
  useEffect(() => {
    if (details) {
      const detailsDatas = details.find((dt) => dt.id === detailsId);
      setDetailsData(detailsDatas);
    }
  }, []);

  return (
    <div className="mx-48">
      <h1 className="text-center mt-10 text-[#9ca2ea] text-4xl">JOB Details</h1>
    </div>
  );
};

export default ViewDetail;
