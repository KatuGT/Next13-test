import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

async function getPost(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);
  return {
    title: post.title,
  };
}

const BlogPost = async ({ params }) => {
  const post = await getPost(params.id);
  return (
    <div>
      <div className="flex items-center mb-5">
        <div className="flex-1">
          <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
          <p>{post.desc}</p>
          <div className="flex items-center gap-1 mt-4">
            <div className="rounded-full overflow-hidden h-[25px] aspect-square relative">
              <Image
                src={post.image}
                alt=""
                fill={true}
                sizes="25px"
                className="object-cover"
              />
            </div>
            <span>{post.username}</span>
          </div>
        </div>
        <div className="flex-1 w-auto relative h-[200px]">
          <Image
            src={post.image}
            fill={true}
            priority={true}
            sizes="100%"
            className="object-cover"
            alt=""
          />
        </div>
      </div>
      <article className="flex flex-col gap-4">
        <p>{post.content}</p>
      </article>
    </div>
  );
};

export default BlogPost;
