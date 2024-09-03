import React from "react";

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
  // {
  //   name: "Ondiek Manganga",
  //   content:
  //     " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
  //   profession: "Actor",
  //   date: "12-12-2023",
  //   avatar:
  //     "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   name: "Ondiek Manganga",
  //   content:
  //     " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
  //   profession: "Actor",
  //   date: "12-12-2023",
  //   avatar:
  //     "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   name: "Ondiek Manganga",
  //   content:
  //     " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
  //   profession: "Actor",
  //   date: "12-12-2023",
  //   avatar:
  //     "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   name: "Ondiek Manganga",
  //   content:
  //     " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
  //   profession: "Actor",
  //   date: "12-12-2023",
  //   avatar:
  //     "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
  // {
  //   name: "Ondiek Manganga",
  //   content:
  //     " This was one of the most transformative journeys i have ever taken as an individual. I got to understand my phsychological self and how to take care of my mental health.",
  //   profession: "Actor",
  //   date: "12-12-2023",
  //   avatar:
  //     "https://images.pexels.com/photos/27296449/pexels-photo-27296449/free-photo-of-a-woman-in-a-blue-dress-posing-for-a-photo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  // },
];
const Feedback = () => {
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

      <div className="flex">
        {testimonialsData?.map((testimonial, i) => {
          return (
            <div
              key={i}
              className="container mx-auto sm:mx-20 ms-5 flex justify-center"
            >
              <div className="">
                <p className="md:w-1/2">{testimonial?.content}</p>
                <p>
                  {testimonial?.name}, {testimonial?.profession}{" "}
                </p>
                <p className="text-[14px]">{testimonial?.date}</p>
              </div>
              <div className="max-w-[400px] max-h-[400px] bg-black overflow-hidden rounded-2xl">
                <img
                  className="rounded-2xl bg-cover"
                  src={testimonial?.avatar}
                  alt="user"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Feedback;
