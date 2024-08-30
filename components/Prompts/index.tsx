"use client";
import React from "react";
import Conversations from "../Conversatio";
import dummyData from "@/json/index.json";
import { useMyContext } from "@/context/my-context";
import { SuccessToast } from "@/service/toast";

const ExamplePrompts = ({ isChatStarted }: { isChatStarted: boolean }) => {
  const { setrIsChatStarted, setPrompt } = useMyContext();

  const handlePromptClick = (prompt: string) => {
    setPrompt(prompt);
    setrIsChatStarted(true);
  };

  const handleToast = () => {
    SuccessToast("Hi there");
  };

  return (
    <>
      {isChatStarted ? (
        <Conversations />
      ) : (
        <div className="flex flex-col w-full px-3">
          <span onClick={handleToast} className="text-md text-center mt-6">
            Your every day AI compansion
          </span>
          <div className="grid grid-cols-2 gap-4 mt-10">
            {dummyData.examplePrompts.map((item, index) => (
              <div
                onClick={() => handlePromptClick(item)}
                key={index}
                className="bg-white shadow-md dark:shadow-none dark:bg-slate-900 p-4 rounded-lg "
              >
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ExamplePrompts;
