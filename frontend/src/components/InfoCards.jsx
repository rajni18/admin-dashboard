const InfoCards = ({ card }) => {
  const baseStyle =
    "p-6 rounded-2xl border transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between";

  const variants = {
    "Total Users":
      "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-600/10 dark:border-blue-500/30 dark:text-blue-300",

    "Active Users":
      "bg-green-50 border-green-200 text-green-900 dark:bg-green-600/10 dark:border-green-500/30 dark:text-green-300",

    "Inactive Users":
      "bg-red-50 border-red-200 text-red-900 dark:bg-red-600/10 dark:border-red-500/30 dark:text-red-300",

    "New Signups":
      "bg-violet-50 border-violet-200 text-violet-900 dark:bg-violet-600/10 dark:border-violet-500/30 dark:text-violet-300",
  };

  const cardStyle = variants[card.title];

  return (
    <div className={`${baseStyle} ${cardStyle}`}>
      {/* Title */}
      <h3 className="text-sm font-semibold opacity-80">{card.title}</h3>

      {/* Value */}
      <p className="text-3xl font-bold mt-2">{card.value}</p>

    </div>
  );
};

export default InfoCards;
