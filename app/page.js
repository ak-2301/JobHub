import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";

import FeaturesList from "@/components/FeatureList";
import NotificationCard from "@/components/NotificationCard";
import JobCards from "@/components/JobCards";
import Link from "next/link";
import { FaCheckCircle, FaClock, FaChartBar, FaBolt, FaLightbulb, FaBookOpen } from 'react-icons/fa';
import Testimonial from "@/components/Testimonial";
import FAQs from "@/components/Faq";

const features = [
  { title: "Verified Job Listings", description: "Every job posting is thoroughly verified to ensure legitimacy and protect job seekers from scams.", icon: <FaCheckCircle className="text-blue-500" />, bgColor: "bg-blue-100" },
  { title: "Smart Reminders", description: "Never miss an opportunity with timely notifications for job deadlines and upcoming assessments.", icon: <FaClock className="text-green-500" />, bgColor: "bg-green-100" },
  { title: "ATS Score Analysis", description: "Get instant feedback on your resume's ATS compatibility and optimization suggestions.", icon: <FaChartBar className="text-purple-500" />, bgColor: "bg-purple-100" },
  { title: "Quick Apply", description: "Apply to multiple jobs with a single click using your optimized profile and resume.", icon: <FaBolt className="text-red-500" />, bgColor: "bg-red-100" },
  { title: "Smart Recommendations", description: "Receive personalized job recommendations based on your skills and preferences.", icon: <FaLightbulb className="text-yellow-500" />, bgColor: "bg-yellow-100" },
  { title: "Learning Resources", description: "Access curated learning materials to prepare for assessments and interviews.", icon: <FaBookOpen className="text-indigo-500" />, bgColor: "bg-indigo-100" },
];

export default function Home() {
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
                <Link href="/jobs">Find Jobs</Link>
                </button>
                <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg">
                  <Link href="/ats">Check ATS Score</Link>
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
{/* 
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
                 icon: <FaCheckCircle className="text-blue-500" />, bgColor: "bg-blue-100" ,
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
                className=" p-6 rounded-lg text-center shadow-lg"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <Image
                    src="/images/card.svg"
                    alt="Card Image"
                    width={30}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3 text-left">
                  {feature.title}
                </h3>
                <p className="text-neuteal-600 text-left">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div> */}


<div className="bg-white text-gray-800 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#393d47]">
          Why Choose Our Platform
        </h2>
        <p className="text-[#74757c] text-center mb-12">
          Discover the features that make our job portal stand out
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 flex items-start">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-lg text-center shadow-lg">
              <div className={`${feature.bgColor} w-16 h-12 rounded-lg flex items-center justify-center mr-2 mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#393d47] mb-3 text-left">
                {feature.title}
              </h3>
              <p className="text-[#74757c] text-left">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
        
      <JobCards  limit={3} isHomePage={true} className="mb-5"/>
      


      <div className="mt-5 flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-16 p-6 min-h-screen">
        {/* Left Section */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Stay Informed, Never Miss Out
          </h1>
          <p className="text-gray-600">
            Get timely reminders for job applications and assessments
          </p>

          {/* Notification Cards */}
          <div className="space-y-4">
            <NotificationCard
               title="Software Engineer Position"
               description="Application deadline in 2 days"
               linkText="View Details"
               linkHref="#"
               color="blue"
            />
           
            <NotificationCard
              title="Technical Assessment"
              description="Scheduled for tomorrow at 2 PM"
              linkText="Prepare Now"
              linkHref="#"
              color="green"
            />
            <NotificationCard
              title="Resume Update Reminder"
              description="Update your skills section for better matches"
              linkText="Update Now"
              linkHref="#"
              color="purple"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-lg shadow-md ">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Notification Features
          </h2>
          <FeaturesList />
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
            Set Up Notifications
          </button>
        </div>
      </div>
      
      <Testimonial/>
      <FAQs/>
      <Footer />
    
    </>
  );
}
