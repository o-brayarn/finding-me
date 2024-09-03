import { useNavigate } from "react-router-dom";

const Featured = () => {
  const navigate = useNavigate();
  const blogData = [
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
    {
      title:
        "Finding Me collaborates with Safaricom in Mental Health Awareness Month",
      illustration:
        "https://images.pexels.com/photos/3601097/pexels-photo-3601097.jpeg?auto=compress&cs=tinysrgb&w=600",
      content:
        "Finding Me Mental Health Society was yesterday at the forefront of Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
    },
  ];
  return (
    <div className="h-full xl:pt-28 pt-10">
      <div className="md:ms-10 md:me-10 ms-5 me-5 flex xl:flex-row flex-col-reverse justify-between gap-8">
        <div className="flex justify-center gap-12 flex-wrap ">
          {blogData.slice(0, 6).map((blog, i) => {
            return (
              <div
                key={i}
                className="flex items-center border border-[#087167] lg:w-1/4 md:w-2/5 sm:w-3/4 max-w-sm p-2 rounded-md shadow-xl mt-10"
              >
                <div className="max-w-sm">
                  <img src={blog.illustration} className="rounded-md" />
                  <h1 className="font-semibold text-start text-[14px] underline decoration-[#087167] pt-2 pb-2">
                    {blog.title}
                  </h1>
                  <p className="text-[12px]">
                    {blog.content.substring(0, 150)}...
                  </p>
                  <div className="flex justify-start items-center pt-4 pb-1">
                    <button className="border border-[#087167] shadow py-1.5 px-2 text-[13px] font-medium rounded-2xl">
                      Read More...
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col xl:justify-start justify-center xl:items-start items-center">
          <h1 className="mt-10 text-[18px] text-[#087167] font-semibold">
            Featured
          </h1>
          <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold mt-2">
            A lot is happening,{" "}
            <span className="text-[#087167]">and we are blogging about it</span>
            ...
          </h2>
          {/* <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio
            asperiores magni iste sit, voluptate eligendi aliquam distinctio nam
            excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Ad odio asperiores magni iste sit, voluptate eligendi aliquam
            distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Ad odio asperiores magni iste sit, voluptate
            eligendi aliquam distinctio nam excepturi.
          </p> */}
        </div>
      </div>

      <div className="flex justify-center items-center pt-10">
        <button
          className="bg-[#087167] text-[#FAF5E0] py-2 px-4 text-xl font-bold rounded-md  gap-2"
          onClick={() => navigate("/blog")}
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Featured;
