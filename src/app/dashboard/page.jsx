"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useSWR from "swr";

const Dashboard = () => {
  const session = useSession();
  const router = useRouter();

  const fetcher = (...url) => fetch(...url).then((res) => res.json());

  const { data, mutate, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user?.name}`,
    fetcher
  );
  console.log(data);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router.push("/dashboard/login");
  }

  const handlePost = async (e) => {
    e.preventDefault();

    const title = e.target[0].value;
    const desc = e.target[1].value;
    const image = e.target[2].value;
    const content = e.target[3].value;
    const username = session?.data?.user?.name;

    try {
      await fetch("/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          desc,
          image,
          content,
          username,
        }),
      });
      mutate();
      e.target.reset()
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`api/posts/${id}`, { method: "DELETE" });
      mutate()
    } catch (error) {
      console.error(error);
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="flex">
        <div className="flex-1 flex flex-col gap-4">
          {!isLoading ? (
            data.map((post) => (
              <div key={post?.id} className="flex gap-4 justify-around">
                <Image alt="" src={post?.image} width={100} height={100} />
                <p> {post?.title}</p>
                <span
                  onClick={() => handleDelete(post._id)}
                  className="text-red-600 cursor-pointer"
                >
                  X
                </span>
              </div>
            ))
          ) : (
            <p className="text-center">Loading...</p>
          )}
        </div>
        <form onSubmit={handlePost} className="flex-1 flex flex-col gap-4">
          <input
            name="title"
            placeholder="Title"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          />
          <input
            name="desc"
            placeholder="Description"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          />

          <input
            type="url"
            name="image"
            placeholder="url image"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          />
          <textarea
            placeholder="Content"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
            name="content"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button className="text-xl cursor-pointer bg-green-600 p-3 text-white rounded">
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
