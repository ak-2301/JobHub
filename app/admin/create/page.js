"use client"

import React, { useState } from 'react';


const CreateJobs = () => {

  const [formData, setFormData] = useState({
    jobId: '',
    companyName: '',
    designation: '',
    experienceRequired: '',
    employmentType: '',
    workMode: '',
    location: '',
    skillsRequired: '',
    preferredSkills: '',
    salaryRange: '',
    jobDescription: '',
    responsibilities: '',
    qualifications: '',
    registrationLastDate: '',
    selectionProcess: '',
    applicationProcess: '',
    contactEmail: '',
    companyWebsite: '',
    postedDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/jobs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          skillsRequired: formData.skillsRequired.split(',').map(skill => skill.trim()),
          preferredSkills: formData.preferredSkills.split(',').map(skill => skill.trim()),
          responsibilities: formData.responsibilities.split(',').map(resp => resp.trim()),
          qualifications: formData.qualifications.split(',').map(qual => qual.trim()),
          selectionProcess: formData.selectionProcess.split(',').map(proc => proc.trim()),
        })
      });
      if (response.ok) {
        alert('Job created successfully!');
        //setFormData(initialFormData);
        window.location.href = '/admin/jobs';  // Alternative redirection
        
      } else {
        alert('Failed to create job.');
      }
    } catch (error) {
      console.error('Error creating job:', error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md max-w-4xl w-full space-y-4">
        <h1 className="text-2xl font-bold text-center mb-4">Create Job</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Job Details Section */}
          <div>
            {['jobId', 'companyName', 'designation', 'experienceRequired', 'location', 'skillsRequired', 'preferredSkills','companyWebsite'].map((field) => (
              <div key={field} className="flex flex-col mb-2">
                <label className="text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border rounded p-2 mt-1 text-sm"
                  required
                />
              </div>
            ))}

            {/* Employment Type Dropdown */}
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">Employment Type:</label>
              <select
                name="employmentType"
                value={formData.employmentType}
                onChange={handleChange}
                className="border rounded p-2 mt-1 text-sm"
                required
              >
                <option value="" disabled>Select Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Contractual">Contractual</option>
              </select>
            </div>

            {/* Work Mode Dropdown */}
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">Work Mode:</label>
              <select
                name="workMode"
                value={formData.workMode}
                onChange={handleChange}
                className="border rounded p-2 mt-1 text-sm"
                required
              >
                <option value="" disabled>Select Work Mode</option>
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
              </select>
            </div>
          </div>

          {/* Application Details Section */}
          <div>
            {/* Other Fields */}
            {['salaryRange', 'qualifications', 'registrationLastDate', 'selectionProcess', 'applicationProcess'].map((field) => (
              <div key={field} className="flex flex-col mb-2">
                <label className="text-sm font-medium capitalize">{field.replace(/([A-Z])/g, ' $1').trim()}:</label>
                <input
                  type="text"
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="border rounded p-2 mt-1 text-sm"
                  required
                />
              </div>
            ))}
            {/* Job Description (Large Textarea) */}
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">Job Description:</label>
              <textarea
                name="jobDescription"
                value={formData.jobDescription}
                onChange={handleChange}
                rows="6"
                className="border rounded p-2 mt-1 text-sm resize-none"
                required
              />
            </div>

            {/* Responsibilities (Large Textarea) */}
            <div className="flex flex-col mb-2">
              <label className="text-sm font-medium">Responsibilities:</label>
              <textarea
                name="responsibilities"
                value={formData.responsibilities}
                onChange={handleChange}
                rows="6"
                className="border rounded p-2 mt-1 text-sm resize-none"
                required
              />
            </div>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Create Job</button>
      </form>
    </div>
  );
}

export default CreateJobs;
