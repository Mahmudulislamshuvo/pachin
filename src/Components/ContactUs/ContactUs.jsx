const ContactUs = () => {
  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px] dark:bg-dark">
      <div className="container">
        <div className="md:flex justify-between">
          {/* Left Side - Form */}
          {/* =======================Todo: Shadow saved color can't be use========== */}
          <div
            className={`w-full md:w-[55%] px-10 py-15 bg-text-White shadow-section`}
          >
            <div className="relative rounded-8px bg-text-White dark:bg-dark-2">
              <div className="pb-10">
                <h4 className="text-3xl text-text-Primary font-bold">
                  Request A Quote
                </h4>
                <p className="text-lg text-text-Secondary pt-3">
                  Lorem Ipsum is simply dummy text.
                </p>
              </div>

              <form onSubmit={(e) => handleSubmit(e)}>
                {/* name */}
                <div className="flex justify-between gap-x-5">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full rounded-2px px-[14px] py-3 text-base  outline-hidden bg-bg-input shadow-box-shadow"
                  />

                  <input
                    type="email"
                    placeholder="Phone Number"
                    className="w-full rounded-px px-[14px] py-3 text-base  outline-hidden bg-bg-input shadow-box-shadow"
                  />
                </div>
                <div className="flex justify-between gap-x-5 mt-5">
                  <input
                    type="text"
                    placeholder="Email Address"
                    className="w-full rounded-px px-[14px] py-3 text-base  outline-hidden bg-bg-input shadow-box-shadow"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-px px-[14px] py-3 text-base  outline-hidden bg-bg-input shadow-box-shadow"
                  />
                </div>
                <div>
                  <div className="my-5">
                    <textarea
                      rows="6"
                      placeholder="Your Message"
                      className="w-full rounded-px px-[14px] py-3 text-base  outline-hidden bg-bg-input shadow-box-shadow"
                    ></textarea>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="space-x-2">
                    <input
                      name="checkbox"
                      id="checkbox"
                      type="checkbox"
                      //     className="w-5 h-5 appearance-none border-2 border-gray-400 rounded-sm
                      //  checked:border-black checked:bg-black
                      //  focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50
                      //  transition-colors duration-200 focus:outline-hidden"
                    />
                    <label htmlFor="checkbox" className="text-text-Primary">
                      Also subscribe us
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary py-3 px-5 transition bg-background rounded-24px text-text-White text-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* Right Side - Contact Info */}
          <div className="w-full md:w-[45%] px-8 py-10 bg-background text-text-White">
            <div className="mb-12 max-w-[570px] lg:mb-0">
              <span className="mb-4 block text-base font-semibold text-primary">
                Contact Us
              </span>
              <h2 className="mb-6 text-[32px] font-bold uppercase text-dark sm:text-[40px] lg:text-[36px] xl:text-[40px] dark:text-white">
                GET IN TOUCH WITH US
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eius tempor incididunt ut labore et dolore magna aliqua. Ut enim
                adiqua minim veniam quis nostrud exercitation ullamco
              </p>

              {/* Location */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2px bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  {/* Location Icon */}
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.39998 11.8002C0.899983 12.1502 0.749983 12.8502 1.04998 13.3502C1.39998 13.8502 2.09998 14.0002 2.59998 13.7002L3.44998 13.1502V25.8002C3.44998 27.5502 4.84998 28.9502 6.59998 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.69998C6.19998 26.7502 5.79998 26.3502 5.79998 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Our Location
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    99 S.t Jomblo Park Pekanbaru 28292. Indonesia
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2px bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  {/* Phone Icon */}
                  📞
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Phone Number
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    (+62)81 414 257 9980
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="mb-8 flex w-full max-w-[370px]">
                <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-2px bg-primary/5 text-primary sm:h-[70px] sm:max-w-[70px]">
                  📧
                </div>
                <div className="w-full">
                  <h4 className="mb-1 text-xl font-bold text-dark dark:text-white">
                    Email Address
                  </h4>
                  <p className="text-base text-body-color dark:text-dark-6">
                    info@yourdomain.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
