"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Walkthrough = () => {
  const [pgNum, setPgNum] = useState(0);

  return (
    <div className="flex items-center justify-center h-dvh flex-col animate__animated animate__bounceInRight">
      <div
        className={
          pgNum == 0
            ? "absolute left-0 transition-all"
            : "absolute -left-full transition-all"
        }
      >
        <div className="flex items-center justify-center flex-col w-dvw">
          <WalkthroughOne />
        </div>
      </div>
      <div
        className={
          pgNum == 1
            ? "absolute left-0 transition-all"
            : "absolute -left-full transition-all"
        }
      >
        <div className="flex items-center justify-center flex-col w-dvw">
          <WalkthroughTwo />
        </div>
      </div>
      <div
        className={
          pgNum == 2
            ? "absolute left-0 transition-all"
            : "absolute -left-full transition-all"
        }
      >
        <div className="flex items-center justify-center flex-col w-dvw">
          <WalkthroughThree />
        </div>
      </div>

      {pgNum == 2 ? (
        <Link
          href="/welcome"
          className={
            "text-white dark:text-white border border-sky-500 bg-none px-6 mt-10 py-3 rounded-md absolute bottom-20 bg-blue-400"
          }
        >
          Get&nbsp;started
        </Link>
      ) : (
        <button
          onClick={() => setPgNum(pgNum + 1)}
          className={`border border-sky-500 bg-none px-6 mt-10 py-3 rounded-md absolute bottom-20 `}
        >
          Next
        </button>
      )}
    </div>
  );
};

export const WalkthroughOne = () => {
  return (
    <>
      <Image height={200} width={200} alt="logo" src={"/img/walk1.svg"} />
      <span className="text-black dark:text-white  text-md text-center pt-3 font-semibold ">
        Walkthrough 1
      </span>
      <span className="text-black dark:text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.&nbsp;Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s
      </span>
    </>
  );
};

export const WalkthroughTwo = () => {
  return (
    <>
      <Image height={200} width={200} alt="logo" src={"/img/walk2.svg"} />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Walkthrough 2
      </span>
      <span className="text-black dark:text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s
      </span>
    </>
  );
};

export const WalkthroughThree = () => {
  return (
    <>
      <Image height={200} width={200} alt="logo" src={"/img/walk3.svg"} />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Walkthrough 3
      </span>
      <span className="text-black dark:text-white text-sm text-center pt-3 font-normal px-10">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text ever
        since the 1500s
      </span>
    </>
  );
};
export default Walkthrough;
