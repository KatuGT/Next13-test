import Link from "next/link";
import React from "react";

const Buttom = ({ text, url = "/" }) => {
  return (
    <Link href={url}>
      <button className="text-xl cursor-pointer bg-green-600 p-3 text-white rounded">
        {text}
      </button>
    </Link>
  );
};

export default Buttom;
