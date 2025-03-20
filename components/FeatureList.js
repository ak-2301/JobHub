const features = [
  {
    name: "Smart Reminders",
    description: "Get notifications before deadlines and important events",
    color: "blue",
  },
  {
    name: "Customizable Alerts",
    description: "Choose how and when you want to be notified",
    color: "green",
  },
  {
    name: "Instant Updates",
    description: "Real-time notifications for new opportunities",
    color: "purple",
  },
];

const FeaturesList = () => {
  return (
    <div>
      {features.map((feature, idx) => (
        <div key={idx} className="flex items-center mb-4">
          <div
            className={`w-8 h-8 bg-${feature.color}-100 text-${feature.color}-600 flex items-center justify-center rounded-full mr-3`}
          >
            <span className="text-lg font-semibold">✓</span>
          </div>
          <div>
            <h4 className="font-semibold">{feature.name}</h4>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturesList;
