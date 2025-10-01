import { FaChartBar, FaTags, FaMoneyBillWave } from "react-icons/fa";

const CapacityLeadPayment = () => {
  return (
    // 1. Main background color updated
    <div className="bg-[#676e7c]">
      <div className="container text-white p-8 md:p-12 font-sans">
        <div className="max-w-7xl mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold uppercase mb-2">
              CAPACITY - LEAD TIME - PAYMENT TERMS
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-300">
              FREQUENTLY ASKED QUESTIONS
            </p>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Base classes for all cards */}
            {/* 2. Added hover effects and smooth transition */}
            <div
              className="bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <FaChartBar className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Capacity</h3>
              <div className="text-left w-full space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    BULK PRODUCTION
                  </h4>
                  <p>Average: 10000 pcs per day</p>
                  <p>Basic style volume order: 14000 pcs per day</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    SAMPLE PRODUCTION
                  </h4>
                  <p>Proto Sample: Average 10 styles per day</p>
                  <p>Sales Sample: Average 100 pcs per day</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    FABRIC PRODUCTION
                  </h4>
                  <p>Knitting Capacity: Average 5000 kg/day</p>
                  <p>Dyeing Capacity: Average 4000 kg/day</p>
                  <p>Finished Fabric: Average 4000 kg/day</p>
                </div>
              </div>
            </div>

            <div
              className="bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <FaTags className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">Lead Time</h3>
              <div className="text-left w-full space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    Sample
                  </h4>
                  <p>Proto/First sample : 7 to 10 working days</p>
                  <p>Sales sample : 7 to 7 weeks</p>
                  <p>PP sample : 5 to 10 working days</p>
                  <p>Size-set Sample : 10 working days</p>
                  <p className="italic text-gray-400">
                    [after bulk fabric received]
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    Bulk order
                  </h4>
                  <p>Minimum 30 days - Maximum 120 days</p>
                  <p className="italic text-gray-400">
                    [Maximum depends on order size and number of styles]
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-slate-800 rounded-lg p-6 shadow-lg flex flex-col items-center text-center 
                       transition-all duration-300 ease-in-out cursor-pointer
                       hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="bg-red-600 p-4 rounded-full mb-4">
                <FaMoneyBillWave className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl font-bold mb-4 uppercase">
                Payment Terms
              </h3>
              <div className="text-left w-full space-y-4 text-gray-300">
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    Telegraphic Transfer (T/T):
                  </h4>
                  <p>
                    All kinds of bulk order and sample charges, small order
                    quantity, advance purchase product etc. to be paid through
                    bank to bank Telegraphic Transfer (T/T).
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1 text-white">
                    Letter of Credit (L/C):
                  </h4>
                  <p>Payment at sight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapacityLeadPayment;
