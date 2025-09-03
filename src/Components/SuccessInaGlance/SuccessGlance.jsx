import { LuNotepadText } from "react-icons/lu";
import PageHeader from "../CommonComponents/PageHeader";

const SuccessGlance = () => {
  const stats = [
    {
      id: 1,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "1540+",
      label: "Completed Projects",
    },
    {
      id: 2,
      icon: <LuNotepadText className="w-20 h-20 text-background" />, // চাইলে অন্য icon নিতে পারো
      number: "980+",
      label: "Happy Clients",
    },
    {
      id: 3,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "25+",
      label: "Awards Won",
    },
    {
      id: 4,
      icon: <LuNotepadText className="w-20 h-20 text-background" />,
      number: "10+",
      label: "Years of Experience",
    },
  ];

  return (
    <div className="container">
      <div className="py-10">
        <div className="px-20 pb-10">
          <PageHeader
            title="Success In A Glance"
            desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"
          />
        </div>
        <div className="flex justify-between items-center gap-x-5 ">
          {stats.map((item) => (
            <div
              key={item.id}
              className="py-12 px-10 border border-text-Secondary flex flex-col items-center justify-center gap-5 w-4/1"
            >
              {item.icon}
              <div className="text-center">
                <h3 className="text-text-Primary text-5xl font-bold">
                  {item.number}
                </h3>
                <p className="text-text-Secondary text-xl">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessGlance;
