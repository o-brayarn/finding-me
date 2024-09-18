const Values = () => {
  const carouselData = [
    {
      index: "V",
      title: "Visionary",
      content:
        "We have a clear idea of the future we want. We uphold this ideal by encouraging our participants to embrace this belief to build the future they want by taking charge of their lives while coping with the stresses of life.",
    },
    {
      index: "O",
      title: "Openness",
      content:
        "Opening individuals to new experiences- uncomfortable and the unfamiliar- enabling them to pay attention to their inner feelings, and embracing their authentic selves.",
    },

    {
      index: "I",
      title: "Integrity",
      content: "We firmly adhere to the morals and standards we set.",
    },
    {
      index: "C",
      title: "Confidentiality",
      content:
        "Sincerity in how we treat each other every day and acceptance of everyone's right to privacy. We do not disclose matters discussed in forums/sessions.",
    },
    {
      index: "E",
      title: "Empathy",
      content:
        "We recognize, understand and acknowledge each person’s journey to self-discovery and healing.",
    },
    {
      index: "S",
      title: "Service",
      content:
        "We are keen on providing quality in what we do. We also empower individuals to speak up and participate in their care and the care of others through service to humanity.",
    },
  ];
  return (
    <div className="h-full">
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="mt-10 text-[#087167] text-[18px] font-semibold">
          Our Values
        </h1>
        <h2 className="sm:text-3xl text-2xl font-bold mt-2 ms-5">
          Rethinking mental health awareness
        </h2>
      </div>

      <div className="mt-10 flex justify-center flex-wrap gap-6">
        {carouselData.map((data, index) => {
          return (
            <div
              key={index}
              className="rounded-md border-2 border-b-[#087167]/[70%] border-l-[#087167]/[70%] mt-4 shadow-2xl backdrop-blur-3xl bg-[#FAFAFA] p-4 w-3/4 sm:w-3/4 md:w-2/5 lg:w-1/3 xl:w-1/4"
            >
              <div className="flex flex-col justify-center gap-3">
                <h1 className="text-2xl uppercase font-semibold text-[#087167]">
                  {data.title}
                </h1>
                <p>{data.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Values;
