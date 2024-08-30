"use client";
import Link from "next/link";
import React from "react";
import dummyData from "@/json/index.json";

const AboutPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">About</span>
        <span></span>
      </div>
      <div className="">
        {dummyData.aboutPage.map((item, index) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <Link href={item.url} className="flex items-center gap-2">
              <span className="text-md">{item.name}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
