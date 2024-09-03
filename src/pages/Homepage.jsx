import { Approach, Featured, Feedback, Hero, Values } from "../components";

const Homepage = () => {
  return (
    <div className="h-full w-full bg-[#F5F5F5]">
      <Hero />
      <Approach />
      <Values />
      <Featured />
      <Feedback />
    </div>
  );
};

export default Homepage;
