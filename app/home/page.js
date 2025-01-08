import React from "react";
import Image from "next/image";

const Homepage = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white flex items-center justify-center min-h-screen h-[500px]">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            {/* Left Section */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Career Journey{" "}
                <span className="text-blue-500">Starts Here</span>
              </h1>
              <p className="text-gray-300 text-lg">
                Access genuine job openings, get timely reminders, and optimize
                your resume with our ATS scoring system.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  Find Jobs
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg">
                  Check ATS Score
                </button>
              </div>
            </div>

            {/* Right Section */}
            <div className="bg-gray-700 rounded-lg p-6 space-y-4">
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <span className="w-4 h-4 rounded-full bg-green-500"></span>
                <p className="text-gray-300">Latest Job Alerts</p>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <span className="w-4 h-4 rounded-full bg-yellow-500"></span>
                <p className="text-gray-300">Assessment Reminders</p>
              </div>
              <div className="flex items-center space-x-4 bg-gray-800 p-4 rounded-lg">
                <span className="w-4 h-4 rounded-full bg-blue-500"></span>
                <p className="text-gray-300">Resume Score: 92%</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-gray-800 py-16">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Our Platform
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Discover the features that make our job portal stand out
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Job Listings",
                description:
                  "Every job posting is thoroughly verified to ensure legitimacy and protect job seekers from scams.",
                icon: "check-circle",
              },
              {
                title: "Smart Reminders",
                description:
                  "Never miss an opportunity with timely notifications for job deadlines and upcoming assessments.",
                icon: "clock",
              },
              {
                title: "ATS Score Analysis",
                description:
                  "Get instant feedback on your resume's ATS compatibility and optimization suggestions.",
                icon: "chart-bar",
              },
              {
                title: "Quick Apply",
                description:
                  "Apply to multiple jobs with a single click using your optimized profile and resume.",
                icon: "bolt",
              },
              {
                title: "Smart Recommendations",
                description:
                  "Receive personalized job recommendations based on your skills and preferences.",
                icon: "light-bulb",
              },
              {
                title: "Learning Resources",
                description:
                  "Access curated learning materials to prepare for assessments and interviews.",
                icon: "book-open",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center shadow-lg"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src="/images/card.svg"
                    alt="Card Image"
                    width={30}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neuteal-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
