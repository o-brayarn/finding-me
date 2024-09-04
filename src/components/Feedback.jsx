import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

const testimonialsData = [
  {
    name: "Ondiek Manganga",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Actor",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Kev",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Professional Therapist",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Chris",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Student",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Ivan Maganga",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Activist",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Judy Maganga",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Freelancer",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    name: "Christine Manganga",
    content:
      " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
    profession: "Writer",
    date: "12-12-2023",
    avatar:
      "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
];
const Feedback = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? testimonialsData.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonialsData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="mt-10 flex flex-col justify-center items-center">
        <h1 className="mt-10 text-[#087167] text-[18px] font-semibold">
          Testimonials
        </h1>
        <h2 className="sm:text-3xl text-2xl font-bold mt-2">
          What Our Mentees Say...
        </h2>
        <p className="sm:text-[20px] sm:text-center md:w-4/5 ms-5 me-5">
          Every month, Finding Me receives comments, letters and e-mails about
          the positive experience from the individuals who have gone through our
          mental awareness programme . . .
        </p>
      </div>

      <div className="w-full md:w-4/5 py-8 px-4 m-auto relative group border rounded-md mt-2">
        <div className="w-full rounded-2xl duration-500">
          <div className="m-auto sm:mx-20 ms-5 flex md:flex-row flex-col-reverse lg:justify-between justify-center items-center gap-8 flex-wrap">
            <div className="lg:w-2/3 md:w-4/5">
              <h1 className="text-xl font-bold py-4">
                {testimonialsData[currentIndex].profession}
              </h1>
              <p className="h-1/2 border-b-2 border-black pb-8">
                {testimonialsData[currentIndex].content}
              </p>
              <p className="font-bold">{testimonialsData[currentIndex].name}</p>
              <p className="text-[14px]">
                {testimonialsData[currentIndex].date}
              </p>
            </div>
            <div className="flex items-center lg:w-1/4 md:1/5 overflow-hidden sm:rounded-md rounded-full">
              <img
                src={testimonialsData[currentIndex].avatar}
                className="max-w-[400] max-h-[400px] sm:rounded-md rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-black bg-[#087167]/20 p-2 rounded-full text-2xl cursor-pointer">
          <BsChevronCompactLeft size={30} onClick={prevSlide} />
        </div>
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-black bg-[#087167]/20 p-2 rounded-full text-2xl cursor-pointer">
          <BsChevronCompactRight size={30} onClick={nextSlide} />
        </div>
        <div className="flex justify-center">
          {testimonialsData.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="text-2xl cursor-pointer"
              onClick={() => setCurrentIndex(slideIndex)}
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedback;
