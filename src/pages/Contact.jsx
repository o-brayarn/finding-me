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

      <div>
        <h1>Drop us a line...</h1>
        <p>
          Please send us an email with a bit about yourself and how we can be of
          help. We will be in touch as soon as possible with some ideas.
        </p>
        <form></form>
      </div>
    </div>
  );
};

export default Contact;
