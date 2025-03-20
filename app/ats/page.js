import React from 'react';
import { FaGraduationCap, FaUser, FaUserTie } from 'react-icons/fa';

const levels = [
  {
    icon: <FaGraduationCap size={24} />, 
    title: 'Entry-level', 
    description: 'Students & recent graduates. Less than 2 years of work experience.'
  },
  {
    icon: <FaUser size={24} />, 
    title: 'Mid-level', 
    description: 'You have between 2 and 10 years of relevant work experience.'
  },
  {
    icon: <FaUserTie size={24} />, 
    title: 'Senior-level', 
    description: 'You have more than 10 years of relevant work experience.'
  }
];

const ATSScore = () => {
  return (
    <div className="min-h-screen bg-white-100 flex flex-col items-center p-6 mt-10">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-6 text-center">
        <h1 className="text-2xl font-bold text-[#393d47] mb-2">What best describes you?</h1>
        <p className="text-[#74757c] mb-6">Our AI will use this to personalize your resume review to you.</p>
        <div className="space-y-4">
          {levels.map((level, index) => (
            <div key={index} className="flex items-center justify-between bg-purple-50 p-4 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
              <div className="flex items-center space-x-4">
                <div className="text-[#393d47]">{level.icon}</div>
                <div className="text-left">
                  <h2 className="text-lg font-semibold text-[#393d47]">{level.title}</h2>
                  <p className="text-[#74757c] text-sm">{level.description}</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white rounded-lg text-sm">CHOOSE</button>
            </div>
          ))}
        </div>
        <p className="text-[#74757c] mt-6 text-sm">Choose just one option to continue. Don&apos;t worry; you can change your career level later.</p>
      </div>
    </div>
  );
}

export default ATSScore;
