import background from "../../assets/Images/BackgroundImage.jpg";

// Data for the table rows
const machineData = [
  {
    si: "01",
    type: "Plane Machine (Full Auto)",
    brand: "Juki, Brother, Sewpower",
    origin: "Japan, China",
    number: 45,
  },
  {
    si: "02",
    type: "Over lock Machine (Auto)",
    brand: "Pegasus, Siruba, Juki, Yamoto",
    origin: "Japan",
    number: 40,
  },
  {
    si: "03",
    type: "Flat Lock Machine",
    brand: "Pegasus, Siruba, Juki, Yamoto",
    origin: "Japan",
    number: 25,
  },
  {
    si: "04",
    type: "Feed of the Arm",
    brand: "Zusan",
    origin: "China",
    number: "02",
  },
  {
    si: "05",
    type: "Vertical Machine",
    brand: "Juck",
    origin: "China",
    number: "04",
  },
  {
    si: "06",
    type: "Rib Cutter",
    brand: "Juki",
    origin: "China",
    number: "05",
  },
  {
    si: "07",
    type: "Chain Stretch",
    brand: "Juki",
    origin: "China",
    number: "05",
  },
  {
    si: "08",
    type: "Cutting Machine",
    brand: "Blue Streak II (Eastman)",
    origin: "USA",
    number: "05",
  },
  {
    si: "09",
    type: "Button hole Machine",
    brand: "Juki",
    origin: "Japan",
    number: "03",
  },
  {
    si: "10",
    type: "Button Stitch Machine",
    brand: "Juki",
    origin: "Japan",
    number: "03",
  },
  {
    si: "11",
    type: "Bar Tack Machine",
    brand: "Juki",
    origin: "Japan",
    number: "02",
  },
  {
    si: "12",
    type: "Snap Button Machine",
    brand: "Zusan",
    origin: "China",
    number: "05",
  },
  {
    si: "13",
    type: "Thread Trimming Machine",
    brand: "Max",
    origin: "China",
    number: "05",
  },
  {
    si: "14",
    type: "Kansai (PDM)",
    brand: "Kansai",
    origin: "Japan",
    number: "03",
  },
  {
    si: "15",
    type: "Piping Cutter Machine",
    brand: "Max",
    origin: "China",
    number: "02",
  },
  {
    si: "16",
    type: "LPG Based Steam Boiler 160kg Steam & 12 Nos Iron Vacuum Table",
    brand: "Mura",
    origin: "Japan",
    number: "01",
  },
  {
    si: "17",
    type: "Diesel Based Power Generator 50 KVA",
    brand: "FG Wilson",
    origin: "UK",
    number: "01",
  },
  {
    si: "18",
    type: "Air Compressor (37 KW)",
    brand: "SCR",
    origin: "UK",
    number: "01",
  },
  {
    si: "19",
    type: "Thread Sucker",
    brand: "Dukema",
    origin: "S. Korea",
    number: "01",
  },
  { si: "20", type: "Plottar Maize", brand: "", origin: "", number: "01" },
  {
    si: "21",
    type: "Automate Cutting And Printing With marker plotter Machine",
    brand: "",
    origin: "",
    number: "",
  },
];

const MachineTable = () => {
  // 🎯 CALCULATION: Summing the 'number' property from all objects in machineData.
  const totalMachines = machineData.reduce((sum, machine) => {
    const machineCount = machine.number;
    const numericCount = parseInt(machineCount, 10) || 0;
    return sum + numericCount;
  }, 0);

  return (
    <div className=" p-4 sm:p-6 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Title Bar */}
        <h2 className="mb-8 lg:mb-16 text-3xl font-bold tracking-tight leading-tight text-center text-text-Primary md:text-6xl">
          AUTOMATE CUTTING AND PRINTING{" "}
          <span className="text-background">WITH MARKER PLUTTER MACHINE</span>
        </h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto shadow-md relative">
          {/* Background Image */}
          <img
            src={background}
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover z-0"
          />
          {/* Dark overlay for better contrast */}
          <div className="absolute z-0"></div>

          {/* Table */}
          <table className="w-full text-sm text-left text-zinc-200 relative z-10 backdrop-blur-md  rounded-lg overflow-hidden">
            {/* Table Header */}
            <thead className="text-xs text-white uppercase ">
              <tr>
                <th scope="col" className="px-6 py-3 text-center">
                  SI
                </th>
                <th scope="col" className="px-6 py-3">
                  Machine Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Brand
                </th>
                <th scope="col" className="px-6 py-3">
                  Origin
                </th>
                <th scope="col" className="px-6 py-3 text-center">
                  Number
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {machineData.map((machine) => (
                <tr
                  key={machine.si}
                  className="bg-zinc-900/70 border-b border-zinc-700 hover:bg-zinc-700/70 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-center font-medium">
                    {machine.si}
                  </td>
                  <td className="px-6 py-4">{machine.type}</td>
                  <td className="px-6 py-4">{machine.brand}</td>
                  <td className="px-6 py-4">{machine.origin}</td>
                  <td className="px-6 py-4 text-center font-medium">
                    {machine.number}
                  </td>
                </tr>
              ))}
            </tbody>

            {/* Table Footer */}
            <tfoot>
              <tr className="font-semibold text-white bg-zinc-800/80">
                <td
                  colSpan="4"
                  className="px-6 py-4 text-right text-base uppercase"
                >
                  Total Machine
                </td>
                <td className="px-6 py-4 text-center text-base">
                  {totalMachines}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MachineTable;
