"use client";
import Link from "next/link";
import React from "react";
import dummyData from "@/json/index.json";

const FeedbackPage = () => {
  return (
    <div>
      <div className="flex justify-between items-center p-3 border-b border-slate-600">
        <Link href={"/home"}>
          <i className="bx bx-chevron-left text-4xl font-bold"></i>
        </Link>
        <span className="text-md">Feedback</span>
        <span></span>
      </div>
      <div className="">
        {dummyData.feedbackPages.map((item, index) => (
          <div
            className="flex justify-between items-center mt-3 border-b border-slate-600 px-3 py-4"
            key={index}
          >
            <div className="flex items-center gap-2">
              <i className={`bx ${item.icon}`}></i>
              <span className="text-md">{item.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackPage;
