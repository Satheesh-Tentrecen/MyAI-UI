"use client";
import Link from "next/link";
import React from "react";
import dummyData from "@/json/index.json";

const LinkedAccount = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Linked accounts</span>
        <span></span>
      </div>
      <div className="">
        {dummyData.accounts.map((item, index) => (
          <div
            className="flex justify-between mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>

            <label className="inline-flex items-center cursor-pointer outline-none border-none border-0">
              <input
                type="checkbox"
                value={item.isActive as any}
                className="sr-only peer "
              />
              <div className="relative w-11 h-6 bg-slate-800 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white   after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-500"></div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LinkedAccount;
