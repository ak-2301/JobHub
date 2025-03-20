'use client'

import React from "react";
import { useState,useEffect } from "react";
import { useRouter } from "next/navigation";
const JobCards = ({limit,isHomePage}) => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        //console.log(response);
        if (!response.ok) {
          throw new Error("Failed to fetch jobs");
        }
        const data = await response.json();
        setJobs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

 

  if (loading) {
    return <div className="text-center py-10">Loading jobs...</div>;
  }

  if (error) {
    return (
      <div className="text-center text-red-500 py-10">Error: {error}</div>
    );
  }


  const displayedJobs = limit ? jobs.slice(0, limit) : jobs;

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold text-gray-900">
            Featured Job Openings
          </h2>
          <p className="text-gray-600 mt-2">
            Latest verified opportunities from top companies
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedJobs.map((job) => (
            <div
              key={job.jobId}
              className="bg-white rounded-lg shadow p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center">
                  {/* <div className="bg-blue-100 text-blue-600 font-bold text-sm p-2 rounded">
                    {job.companyName}
                  </div> */}
                  <div
                    className={`text-xs font-medium p-1 rounded ${job.badgeColor}`}
                  >
                    {job.badge}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">
                  {job.designation}
                </h3>
                <p className="text-gray-500">{job.companyName}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="text-sm bg-blue-100 text-blue-600 py-1 px-3 rounded">
                    {job.workMode}
                  </span>
                  <span className="text-sm bg-green-100 text-green-600 py-1 px-3 rounded">
                    {job.employmentType}
                  </span>
                  <span className="text-sm bg-yellow-100 text-yellow-600 py-1 px-3 rounded">
                    {job.salaryRange}
                  </span>
                  <span className="text-sm bg-purple-100 text-purple-600 py-1 px-3 rounded">
                    {job.location}
                  </span>
                </div>
              </div>
              <button 
               onClick={() => router.push(`/jobs/${job.jobId}`)}
              className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                View More
              </button>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="text-center mt-10">
            <button
              onClick={() => router.push("/jobs")}
              className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800"
            >
              View More Jobs
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCards;
