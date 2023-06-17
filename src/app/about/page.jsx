import Buttom from "@/components/buttom/Buttom";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <div className="relative w-full h-[300px]">
        <Image
          src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image of about"
          fill={true}
          className="object-cover"
        />
        <div className="absolute bottom-0 bg-green-600 text-white p-1 m-4">
          <h2 className="text-4xl font-bold">Digital Storytellers</h2>
          <h3 className=" text-lg font-bold">Handcrafting award winning digital experiences</h3>
        </div>
      </div>
      <div className="flex gap-20 mt-4">
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl font-bold">Who we are?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            explicabo iste excepturi dolorem minima odit iusto cupiditate
            suscipit, at itaque magni quod officia corrupti sequi nihil quisquam
            ipsum temporibus ut!.             
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            explicabo iste excepturi dolorem minima odit iusto cupiditate
            suscipit, at itaque magni quod officia corrupti sequi nihil quisquam
            ipsum temporibus ut!.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque
            explicabo iste excepturi dolorem minima odit iusto cupiditate
            suscipit, at itaque magni quod officia corrupti sequi nihil quisquam
            ipsum temporibus ut!
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <h2 className="text-3xl font-bold">What we do?</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem vel
            magni temporibus reprehenderit officia porro error consequatur odit
            eum suscipit perferendis nesciunt expedita alias, quibusdam maxime,
            iusto atque? Placeat, vitae?
          </p>
          <Buttom text="Contact" url="contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
