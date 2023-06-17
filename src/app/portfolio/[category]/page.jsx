import Buttom from "@/components/buttom/Buttom";
import Image from "next/image";
import React from "react";

const Category = ({ params }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-green-400">{params.category}</h2>
      <div>
        <div className="flex items-center [&:nth-child(even)]:flex-row-reverse gap-5 mb-10">
          <div className="flex-1">
            <h3 className="text-3xl font-bold">Creative Portfolio</h3>
            <p className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              officiis ratione ipsam ipsum et accusantium? Rem, ut ad laudantium
              consectetur maxime omnis pariatur, dignissimos laboriosam amet
              delectus beatae quisquam autem.
            </p>
            <Buttom text="See More" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              src={"/apps.jpg"}
              alt=""
              sizes="100%"

              fill={true}
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex items-center [&:nth-child(even)]:flex-row-reverse gap-5 mb-10">
          <div className="flex-1">
            <h3 className="text-3xl font-bold">Creative Portfolio</h3>
            <p className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt
              officiis ratione ipsam ipsum et accusantium? Rem, ut ad laudantium
              consectetur maxime omnis pariatur, dignissimos laboriosam amet
              delectus beatae quisquam autem.
            </p>
            <Buttom text="See More" />
          </div>
          <div className="flex-1 h-[500px] relative">
            <Image
              src={"/apps.jpg"}
              alt=""
              fill={true}
              sizes="100%"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
