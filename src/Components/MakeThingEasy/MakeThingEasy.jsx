import { LuMedal } from "react-icons/lu";
import image from "../../assets/makeThingEasy/easy-thumb.jpg";

const MakeThingEasy = () => {
  return (
    <div className="container">
      <div className="py-40 relative">
        <div className="flex gap-x-10">
          <div className="w-[40%]">
            <img src={image} alt="image" />
          </div>
          <div className="w-[58%] pl-5">
            <div className="pr-10 pb-10">
              <h3 className="text-5xl font-bold text-text-Primary pt-10">
                We Make Things Easy for Everyone{" "}
                <span className="text-background">for Everyone</span>
              </h3>
            </div>
            <ol className="relative border-s border-background">
              {/* Step 1 */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-background bg-text-White border-2 border-background rounded-full -start-5">
                  01
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-text-Primary">
                  This is a simple title for text one
                </h3>
                <p className="text-lg font-normal text-text-Secondary">
                  Porem Ipsum is the simpl dummy text of the printing and new
                  type setting industry.
                </p>
              </li>

              {/* Step 2 */}
              <li className="mb-10 ms-6">
                <span className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-background bg-text-White border-2 border-background rounded-full -start-5">
                  02
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-text-Primary">
                  This is a simple title for text two
                </h3>
                <p className="text-lg font-normal text-text-Secondary">
                  Next lorem Ipsum is the simpl dummy text of the printing and
                  new type setting industry.
                </p>
              </li>

              {/* Step 3 */}
              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-10 h-10 text-sm font-bold text-background bg-text-White border-2 border-background rounded-full -start-5">
                  03
                </span>
                <h3 className="mb-1 text-2xl font-semibold text-text-Primary">
                  This is a simple title for text three
                </h3>
                <p className="text-lg font-normal text-text-Secondary">
                  Darem Ipsum is the simpl dummy text of the printing and new
                  type setting industry.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="bg-background p-8 flex justify-between absolute -bottom-20 left-0 w-full">
          <div className="bg-text-White flex justify-center items-center gap-x-5 p-5">
            <span>
              <LuMedal className="h-10 w-10 text-background" />
            </span>
            <span>
              <h4 className="text-text-Primary text-2xl font-bold">
                25 Years of Experience
              </h4>
              <p className="text-text-Secondary text-lg">
                Lorem is the dummy text
              </p>
            </span>
          </div>
          <div className="bg-text-White flex justify-center items-center gap-x-5 p-5">
            <span>
              <LuMedal className="h-10 w-10 text-background" />
            </span>
            <span>
              <h4 className="text-text-Primary text-2xl font-bold">
                25 Years of Experience
              </h4>
              <p className="text-text-Secondary text-lg">
                Lorem is the dummy text
              </p>
            </span>
          </div>
          <div className="bg-text-White flex justify-center items-center gap-x-5 p-5">
            <span>
              <LuMedal className="h-10 w-10 text-background" />
            </span>
            <span>
              <h4 className="text-text-Primary text-2xl font-bold">
                25 Years of Experience
              </h4>
              <p className="text-text-Secondary text-lg">
                Lorem is the dummy text
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeThingEasy;
