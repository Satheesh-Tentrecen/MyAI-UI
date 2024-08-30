"use client";
import Link from "next/link";
import React from "react";
import dummyData from "@/json/index.json";

const PolicyPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3  border-b border-slate-600 ">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Privacy</span>
        <span></span>
      </div>
      <div className="">
        {dummyData.policyPages.map((item, index) => (
          <Link
            href={item.url}
            className="flex justify-between mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <span className="text-sm">{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PolicyPage;
