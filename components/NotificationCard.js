const NotificationCard = ({ title, description, linkText, linkHref, color }) => {
    return (
      <div
        className={`p-4 rounded-lg shadow-md bg-${color}-100 border-l-4 border-${color}-500`}
      >
        <h3 className="font-semibold text-lg text-${color}-800">{title}</h3>
        <p className="text-${color}-700 text-sm">{description}</p>
        <a
          href={linkHref}
          className={`text-${color}-600 font-medium hover:underline text-sm mt-2 block`}
        >
          {linkText} →
        </a>
      </div>
    );
  };
  
  export default NotificationCard;