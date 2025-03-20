'use client'

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

const JobDetailPage = () => {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/jobs/${jobId}`);
        console.log(response);
        if (!response.ok) {
          throw new Error('Failed to fetch job details');
        }
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [jobId]);

  if (loading) return <div className="text-center py-10">Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!job) return <div className="text-center">Job not found</div>;

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
//       <h1 className="text-3xl font-bold mb-4">{job.designation}</h1>
//       <p className="text-gray-700 text-lg">{job.companyName}</p>
//       <div className="flex flex-wrap gap-2 my-4">
//         <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded">{job.workMode}</span>
//         <span className="bg-green-100 text-green-600 py-1 px-3 rounded">{job.employmentType}</span>
//         <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded">{job.salaryRange}</span>
//         <span className="bg-purple-100 text-purple-600 py-1 px-3 rounded">{job.location}</span>
//       </div>
//       <p className="text-gray-600 mt-4">{job.description}</p>

//       <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//         Apply Now
//       </button>
//     </div>
//   );
return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{job.designation}</h1>
      <p className="text-lg text-gray-700 mb-2">{job.companyName}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {job.skillsRequired.map((skill, idx) => (
          <span key={idx} className="bg-blue-100 text-blue-600 py-1 px-3 rounded">{skill}</span>
        ))}
      </div>
      {job.preferredSkills.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-gray-800">Preferred Skills:</h3>
          <div className="flex flex-wrap gap-2">
            {job.preferredSkills.map((skill, idx) => (
              <span key={idx} className="bg-green-100 text-green-600 py-1 px-3 rounded">{skill}</span>
            ))}
          </div>
        </div>
      )}
      <p className="text-gray-600 my-2">Salary: <span className="text-green-600">{job.salaryRange}</span></p>
      <p className="text-gray-600 my-2">Posted on: {new Date(job.postedDate).toLocaleDateString()}</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Job Description:</h3>
      <p className="text-gray-700">{job.jobDescription}</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Responsibilities:</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {job.responsibilities.map((resp, idx) => (
          <li key={idx}>{resp}</li>
        ))}
      </ul>
      <h3 className="text-xl font-semibold mt-6 mb-2">Qualifications:</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {job.qualifications.map((qual, idx) => (
          <li key={idx}>{qual}</li>
        ))}
      </ul>
      <p className="text-gray-600 my-2">Registration Last Date: {new Date(job.registrationLastDate).toLocaleDateString()}</p>
      <h3 className="text-xl font-semibold mt-6 mb-2">Selection Process:</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {job.selectionProcess.map((step, idx) => (
          <li key={idx}>{step}</li>
        ))}
      </ul>
      <p className="text-gray-600 my-2">Application Process: {job.applicationProcess}</p>
      <p className="text-gray-600 my-2">Contact: <a href={`mailto:${job.contactEmail}`} className="text-blue-600 underline">{job.contactEmail}</a></p>
      <p className="text-gray-600 my-2">Company Website: <a href={job.companyWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{job.companyWebsite}</a></p>
      <button className="mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">Apply Now</button>
    </div>
  );
};



export default JobDetailPage;
