import React from "react";
import JobCards from "@/components/JobCards";
import Link from "next/link";

const Jobs = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-full flex justify-end mr-5 mt-5">
        <Link href="/admin/create">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600">
            Create Job
          </button>
        </Link>
      </div>
      <JobCards isHomePage={false} />
    </div>
  );
};

export default Jobs;
