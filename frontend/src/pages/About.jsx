const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-text-muted">
        <p>
          ABOUT <span className="text-text-dark font-semibold">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        {/* Left - Image */}
        <div className="w-full md:max-w-[360px]">
          <div className="w-full h-80 bg-primary-light rounded-lg flex items-center justify-center">
            <div className="flex gap-4">
              <div className="w-20 h-32 bg-primary/30 rounded-full"></div>
              <div className="w-20 h-36 bg-primary/20 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Right - Text */}
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-text-muted">
          <p>
            Welcome to SukritiHealth, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At SukritiHealth, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            SukritiHealth is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you&apos;re booking your first appointment or managing
            ongoing care, SukritiHealth is here to support you every step of the
            way.
          </p>
          <b className="text-text-dark">Our Vision</b>
          <p>
            Our vision at SukritiHealth is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="text-text-muted">
          WHY <span className="text-text-dark font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>EFFICIENCY:</b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className="border border-border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>CONVENIENCE:</b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className="border border-border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer">
          <b>PERSONALIZATION:</b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
