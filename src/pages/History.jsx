const historyData = [
  {
    year: 2022,
    details: [
      {
        month: "October",
        content:
          "After experiencing depression in 2020 and struggling to get individuals who may understand what she had gone through without feeling judged, Florence Kimuyu identifies a need for non-judgmental, peer-sharing spaces for youth to discuss mental health issues. In 2022, Florence approached Wangui Maina, a self-development enthusiast, and Mary Owino, a passionate youth and mental health advocate, to create a mental health community.",
      },
    ],
  },
  {
    year: 2023,
    details: [
      {
        month: "January",
        content:
          "Finding Me is founded by Florence Kimuyu, Wangui Maina, and Mary Owino as “Finding Me Mental Health Wellness.” We had our first virtual online forum.",
      },
      {
        month: "February",
        content:
          "Finding Me roles out its 12-Week Self Awareness programme. The programme has 15 cohort members for its pilot programme. Victrine Amondi Oluoch joins Finding Me officially as its Founding Counselling Psychologist.",
      },
    ],
  },
];
const History = () => {
  return (
    <div className="w-full">
      <div className="relative">
        <div className="h-full w-full brightness-[0.3]">
          <img
            src="/images/volunteer.png"
            alt=""
            className="object-cover sm:h-[470px] h-full w-dvw"
          />
        </div>
        <div className="w-full absolute sm:top-[50%] top-[40%] text-[#FAF5E0] ps-5 flex justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-semibold">
            HISTORY OF FINDING ME
          </h1>
        </div>
      </div>

      <div className=" md:pt-10 pt-5 md:ms-10 ms-5 me-5">
        {historyData &&
          historyData.map((data, i) => {
            return (
              <div key={i}>
                <div className="flex justify-center items-center">
                  <h1 className="text-xl flex justify-center items-center font-bold border-8 border-[#087167] h-20 w-20 rounded-full ">
                    {data.year}
                  </h1>
                </div>
                {data.details &&
                  data.details.map((detail, i) => {
                    return (
                      <div
                        key={i}
                        className="lg:w-1/3 md:w-1/2 shadow-2xl p-4 mt-5"
                      >
                        <h1 className="text-xl font-semibold pb-2 pt-2">
                          {detail.month} {data.year}
                        </h1>
                        <p>{detail.content}</p>
                      </div>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default History;
