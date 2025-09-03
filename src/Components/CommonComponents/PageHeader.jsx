const PageHeader = ({
  title = "Welcome to Pachin Ltd.",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting",
  titlecss = "text-text-Primary",
  desccss = "text-text-Secondary",
}) => {
  return (
    <>
      <div className="text-center space-y-5">
        <h2 className={`text-5xl font-bold ${titlecss}`}>{title}</h2>
        <p className={`text-lg px-60 ${desccss}`}>{desc}</p>
      </div>
    </>
  );
};

export default PageHeader;
