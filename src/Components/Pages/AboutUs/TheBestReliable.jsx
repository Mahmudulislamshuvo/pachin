import { IoCall } from "react-icons/io5";

const TheBestReliable = () => {
  return (
    <div className="container">
      <div className="py-30 flex gap-x-10">
        {/* left */}
        <div className="w-[52%]">
          <div className="">
            <h5 className="text-text-Secondary uppercase">
              Welcome to the Pachin
            </h5>
            <h3 className="text-4xl font-bold uppercase pt-3 pb-5">
              The Best{" "}
              <span className="text-background">Reliable Solution</span> for
              Industrial Works
            </h3>
            <div className="h-1 w-15 bg-background rounded-24px"></div>
          </div>
          <div className="space-y-5 text-text-Secondary text-lg py-10 ">
            <p>
              Rorem Ipsum is simply dummy text of the printin and type setting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </p>
            <p>
              Printer took a galley of type and scrambled it to make a type
              speci menu book. It has survived not only five centuries, but also
              the leap intoelectronic typesetting, remaining essentially
              unchanget was popularised.
            </p>
          </div>
          <div className="flex gap-x-10">
            <div className="px-10 py-5 border rounded-6px w-full relative">
              <p>Phone:</p>
              <p>+123 4567 8910</p>
              <div className="bg-background p-3 rounded-24px inline-block">
                <IoCall className="h-5 w-5 p-3 text-text-White" />
              </div>
            </div>
            <div className="px-10 py-5 border rounded-6px w-full relative">
              <p>Phone:</p>
              <p>+123 4567 8910</p>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-[45%] bg-blue-400">iosdhfyiuh</div>
      </div>
    </div>
  );
};

export default TheBestReliable;
