import Link from "next/link";
import React from "react";

const Portfolio = () => {
  return (
    <div>
      <h2 className="my-3 text-xl font-bold">Choos a gallery</h2>
      <div className="flex gap-10">
        <Link
          href="/portfolio/Illustrations"
          className="bg-illustrations group rounded border-4 border-solid border-gray-500 h-[400px] w-[300px] relative bg-cover"
        >
          <span className="absolute group-hover:text-green-400 bottom-0 right-0 m-4 text-3xl font-bold ">Illustrations</span>
        </Link>

        <Link
          href="/portfolio/Websites"
          className="bg-websites group rounded border-4 border-solid border-gray-500 h-[400px] w-[300px] relative bg-cover"
        >
          <span className="absolute group-hover:text-green-400 bottom-0 right-0 m-4 text-3xl font-bold ">Websites</span>
        </Link>

        <Link
          href="/portfolio/Apps"
          className="bg-apps group rounded border-4 border-solid border-gray-500 h-[400px] w-[300px] relative bg-cover"
        >
          <span className="absolute group-hover:text-green-400 bottom-0 right-0 m-4 text-3xl font-bold ">Apps</span>
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
