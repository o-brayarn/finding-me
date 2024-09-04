import {
  Approach,
  CallToAction,
  Featured,
  Feedback,
  Hero,
  SocialProof,
  Values,
} from "../components";

const Homepage = () => {
  return (
    <div className="h-full w-full bg-[#F5F5F5]">
      <Hero />
      <SocialProof />
      <Approach />
      <Values />
      <Featured />
      <Feedback />
      <CallToAction />
    </div>
  );
};

export default Homepage;
