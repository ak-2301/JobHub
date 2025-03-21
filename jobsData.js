 const jobs = [
    {
      id: 1,
      company: "Microsoft",
      role: "Senior Software Engineer",
      type: "Remote",
      employment: "Full-time",
      salary: "$120k-$150k",
      badge: "New",
      badgeColor: "bg-green-100 text-green-600",
    },
    {
      id: 2,
      company: "Facebook",
      role: "Product Designer",
      type: "Hybrid",
      employment: "Full-time",
      salary: "$90k-$120k",
      badge: "Featured",
      badgeColor: "bg-blue-100 text-blue-600",
    },
    {
      id: 3,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 4,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 5,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 6,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 7,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 8,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 9,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
    {
      id: 10,
      company: "Google",
      role: "Data Scientist",
      type: "On-site",
      employment: "Full-time",
      salary: "$130k-$160k",
      badge: "Urgent",
      badgeColor: "bg-yellow-100 text-yellow-600",
    },
  ];

  {limit && jobs.length > limit && (
    <div className="text-center mt-10">
      <button className="bg-black text-white py-2 px-6 rounded hover:bg-gray-800">
        View More Jobs
      </button>
    </div>
  )}
