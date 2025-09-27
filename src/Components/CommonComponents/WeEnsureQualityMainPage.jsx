import image1 from "../../assets/Images/Mehedi_Fpunder.jpg";

const WeEnsureQualityMainPage = () => {
  return (
    <div className="bg-bg-blog">
      <div className="container">
        <div className="py-10 md:py-30 flex flex-col md:flex-row items-center gap-10">
          {/* left */}
          <div className="w-full md:w-[45%] flex justify-center">
            <div className="relative">
              <img
                src={image1}
                alt="WeEnsure1"
                className="h-[300px] w-[260px] md:h-[500px] md:w-[400px] object-cover"
              />
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-[52%] md:text-left p-5 md:p-0">
            <div>
              <h5 className="text-text-Secondary uppercase">
                Founder and Managing Director
              </h5>
              <h3 className="text-2xl md:text-4xl font-bold uppercase pt-3 pb-5">
                <span className="text-background">MEHEDHI HASAN</span>
              </h3>
              <div className="h-1 w-15 bg-background rounded-24px mx-auto md:mx-0"></div>
            </div>
            <div className="space-y-5 text-text-Secondary text-base md:text-lg py-10">
              <p>
                With over a decade of experience in the RMG sector, I have had
                the privilege of witnessing its growth, challenges, and immense
                potential. As the Managing Director of Style Museum, I believe
                that the future of Bangladesh’s RMG industry depends on how
                boldly we embrace technology and digitalization. At Style
                Museum, we have made it our mission to lead with
              </p>
              <p>
                innovation—integrating data-driven solutions and environmentally
                conscious practices into every step of our journey. Our vision
                is not just to produce garments, but to set an example for
                sustainable and future-ready manufacturing. We know that
                quality, innovation, and sustainability go hand in hand. And
                with the dedication of our team, we aim to redefine what the RMG
                sector in Bangladesh can achieve on the global stage.
              </p>
            </div>
            {/* <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-5">
              <div className="flex items-center gap-x-5">
                <img
                  src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                  alt="project manager"
                  className="h-15 w-15 rounded-full object-cover"
                />
                <div>
                  <h5 className="text-xl md:text-2xl text-text-Primary font-bold">
                    Rastab Lezoka
                  </h5>
                  <p className="text-text-Secondary">Project Managers</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeEnsureQualityMainPage;
