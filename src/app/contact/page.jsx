import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Katu dev- Contact",
  description: "This desc",
};

const Contact = () => {

  return (
    <section>
      <h2 className="text-center text-4xl font-bold mb-4">
        Let´s Keep in Touch
      </h2>
      <div className="flex gap-20 items-center">
        <Image
          height={300}
          width={300}
          className="object-contain flex-1 animate-[move_3s_ease-in-out_infinite] "
          src="/contact.png"
          alt=""
        />
        <form className="flex-1 flex flex-col gap-4">
          <input
            placeholder="name"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
          />
          <input
            placeholder="email"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
            type="email"
          />
          <textarea
          placeholder="message"
            className="p-3 bg-transparent border-2 border-solid border-white rounded  "
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </form>
      </div>
    </section>
  );
};

export default Contact;
