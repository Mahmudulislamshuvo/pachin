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
          <div
            className={`w-full md:w-[55%] px-10 py-15 bg-text-White shadow-section`}
          >
            <div className="relative rounded-8px bg-text-White dark:bg-dark-2">
              <div className="pb-10">
                <h4 className="text-3xl text-text-Primary font-bold">
                  Ready to Start Your Project?
                </h4>
                <p className="text-lg text-text-Secondary pt-3">
                  Fill out the form below and one of our experts will be in touch to schedule a free consultation.
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
                Let's Create Something Beautiful
              </h2>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-dark-6">
                We're passionate about creating beautiful and functional spaces. Contact us today to learn more about how we can help you bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;