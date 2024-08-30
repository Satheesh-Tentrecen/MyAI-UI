"use client";
import Link from "next/link";
import React from "react";
import dummyData from "@/json/index.json";

const ChooseRegion = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Region and language</span>
        <span></span>
      </div>
      <div className="">
        {dummyData.regionPages.map((item, index) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>
            <span className="text-xs text-blue-500">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseRegion;
