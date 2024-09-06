import { IoChevronDown } from "react-icons/io5";

const blogData = [
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
  {
    title: "Aregan Ipsum Lorem",
    src: "",
    date: "April 6, 2023",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odio asperiores magni iste sit, voluptate eligendi aliquam distinctio nam excepturi.",
  },
];
const Blog = () => {
  return (
    <div>
      <div>
        <img src={blogData[0].src} alt={blogData[0].title.substring(0, 30)} />
        <div>
          <h1>{blogData[0].title}</h1>
          <h3>{blogData[0].date}</h3>
          <p>{blogData[0].content}</p>
        </div>
      </div>
      <div>
        <h1>
          Category <IoChevronDown />
        </h1>
        <div>
          <div>
            <img
              src={blogData[0].src}
              alt={blogData[0].title.substring(0, 30)}
            />
            <h1>{blogData[0].title}</h1>
            <h3>{blogData[0].date}</h3>
            <p>{blogData[0].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
