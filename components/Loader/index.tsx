import React from "react";
import Image from "next/image";

const Loader = () => {
  return (
    <div className="flex flex-col items-center w-full px-3">
      <Image
        height={200}
        width={200}
        alt="logo"
        src={"/img/logo.svg"}
        priority
      />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Searching for connection
      </span>
    </div>
  );
};

export default Loader;
