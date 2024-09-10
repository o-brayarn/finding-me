const Contact = () => {
  return (
    <div className="md:ps-10 ps-5 sm:pe-0 pe-5">
      <h1 className="mt-10 md:text-3xl text-2xl font-bold text-[#087167]">
        Contact Us
      </h1>
      <div className="flex justify-start xl:gap-36 lg:gap-20 md:gap-8 gap-4 flex-wrap mt-5">
        <div className="lg:w-[50%] md:w-[38%]">
          <h1 className="md:text-2xl text-xl font-semibold lg:w-[70%]">
            Interested to learn more about Finding Me Mental Health Wellness?
          </h1>
          <p className="mt-3">
            Our team of experts is committed to helping you understand the
            complexities of your mental health and that of those around you.
            Contact us today to learn more about our mental health programs and
            how we can help you navigate them.
          </p>
        </div>

        <div className="shadow-2xl rounded-xl p-4 pb-10 md:mb-0 mb-4 xl:w-1/4 me-10">
          <h1 className="text-2xl font-semibold">Get in touch</h1>
          <div className="mb-4">
            <h2 className="text-lg font-medium">By Phone</h2>
            <p>
              Call us on{" "}
              <span className="font-semibold">(+274)701 103 302 </span>
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium">Email</h2>
            <p>
              Send an email to{" "}
              <span className="font-semibold">hello@findingme.org</span>
            </p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium">Instant Messaging</h2>
            <p>
              Connect via WhatsApp{" "}
              <span className="font-semibold">(+274)701 103 302 </span>
            </p>
          </div>
          <div className="">
            <h2 className="text-lg font-medium">Say Hello</h2>
            <p>Office D3 -Ngong Lane Plaza</p>
            <p>Ngong Road, Nairobi</p>
            <p>Kenya</p>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h1 className="text-2xl font-semibold">Drop us a line...</h1>
        <p className="md:w-2/3">
          Please send us an email with a bit about yourself and how we can be of
          help. We will be in touch as soon as possible with some ideas.
        </p>
        <form className="flex flex-col sm:gap-8 gap-4 ms-2 me-5 md:mt-10 mt-5">
          <div className="flex sm:flex-row flex-col justify-start gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="md:w-1/3 pb-2 pt-2 ps-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="md:w-1/3 pb-2 pt-2 ps-2 border rounded-md"
            />
          </div>
          <div className="flex sm:flex-row flex-col justify-start gap-4">
            <input
              type="text"
              placeholder="Email"
              className="md:w-1/3 pb-2 pt-2 ps-2 border rounded-md"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="md:w-1/3 pb-2 pt-2 ps-2 border rounded-md"
            />
          </div>
          <textarea
            placeholder="How can we help you?"
            className="ps-2 sm:h-[240px] h-[120px] sm:w-2/3 border focus:border-hidden rounded-md pt-2"
          />
          <input
            type="button"
            value="Get in touch"
            className="bg-[#087167] w-fit px-4 py-2 rounded-xl text-[#FAF5E0]"
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
