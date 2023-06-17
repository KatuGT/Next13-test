import Buttom from "@/components/buttom/Buttom";
import Image from "next/image";
import React from "react";

async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache: "no-store",
  });
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getPosts();
  console.log(data);
  return (
    <div>
      {data?.map((post) => (
        <div key={post.id} className="flex items-center gap-7 mb-10">
          <div className="flex-1 h-[300px] relative">
            <Image
              priority={true}
              src={post.image}
              alt=""
              sizes="100%"
              fill={true}
              className="object-cover"
            />
          </div>
          <div className="flex-[2]">
            <h3 className="text-3xl font-bold">{post.title}</h3>
            <p className="my-4">{post.desc}</p>
            <Buttom text="See More" url={`/blog/${post._id}`} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
