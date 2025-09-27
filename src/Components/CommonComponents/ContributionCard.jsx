const ContributionCard = ({ icon, title, data }) => {
  return (
    <>
      <div className="flex flex-col px-3">
        <img src={icon} alt="Contributioncard1" className="h-15 w-15" />
        <h4 className="text-text-White font-bold text-2xl pt-2">{title}</h4>
        <ul className="text-text-White list-disc list-inside flex flex-col items-start">
          {data.map((list, index) => (
            <li key={index}>{list}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ContributionCard;
