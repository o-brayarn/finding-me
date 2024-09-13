import { useState } from "react";

const teamData = [
  {
    id: 1,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "twitter",
    linkedInUrl: "LI",
    src: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 3,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 4,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 5,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 6,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 7,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
  {
    id: 8,
    name: "Full name",
    role: "Co-founder",
    about:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad oetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate.",
    xaccount: "",
    linkedInUrl: "",
    src: "",
  },
];
const Team = () => {
  const [isExpanded, setIsExpanded] = useState({});
  return (
    <div className="bg-[#F5F5F5]">
      <div className="relative">
        <div className="h-full w-full brightness-[0.3]">
          <img
            src="/images/volunteer.png"
            alt=""
            className="object-cover sm:h-[470px] h-full w-dvw"
          />
        </div>
        <div className="absolute sm:top-[30%] top-[10%] text-[#FAF5E0] ms-5 flex flex-col justify-center items-center">
          <h1 className="md:text-3xl text-2xl font-semibold">OUR TEAM</h1>
          <p className="md:w-1/2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio
            asperiores magni iste sit, voluptate eligendi aliquam distinctio nam
            excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ad odio asperiores{" "}
          </p>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold text-center">Meet Our Team</h1>
        <div className="mt-10 flex justify-center gap-8 flex-wrap">
          {teamData &&
            teamData.map((team) => {
              return (
                <div
                  key={team.id}
                  className="lg:w-1/5 md:w-1/3 sm:w-1/2 w-3/4 border-2 p-2"
                >
                  <img src={team.src} alt={team.name} />
                  <div className="flex justify-between gap-4 mt-2">
                    <h1>
                      {team.name}, <span>{team.role}</span>
                    </h1>
                    <div className="flex gap-2">
                      <a> {team.xaccount}</a>
                      <a>{team.linkedInUrl}</a>
                    </div>
                  </div>

                  <p className="mt-2">
                    {isExpanded[team.id]
                      ? team.about
                      : team.about.substring(0, 120)}
                    ...
                  </p>

                  <button
                    className="text-[#087167]"
                    onClick={() =>
                      setIsExpanded((prev) => ({
                        ...prev,
                        [team.id]: !prev[team.id],
                      }))
                    }
                  >
                    {isExpanded[team.id] ? "Read Less" : "Read More"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Team;
