import Buttom from "@/components/buttom/Buttom";
import Image from "next/image";
import HeroIMg from "public/hero.png";
export default function Home() {
  return (
    <div className="flex gap-24">
      <div className="flex-1">
        <h1 className="text-[5rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-600 to-gray-950 dark:to-gray-200 leading-tight	">
          Better design for your digital products
        </h1>
        <h2 className="text-2xl my-3">
          Turning your idea into Reality. We bring together the teams from the
          global tech industry.
        </h2>
        <Buttom text={"See Our Work"} />{" "}
      </div>
      <div className="flex-1 relative">
        <Image
          src={HeroIMg}
          alt="Ilustrative hero image"
          className="w-full h-[500px] object-contain animate-[move_3s_ease-in-out_infinite]"
        />
      </div>
    </div>
  );
}
