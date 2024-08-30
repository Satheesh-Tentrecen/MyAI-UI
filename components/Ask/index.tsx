"use client";
import Image from "next/image";
import React, { useState, useRef, FormEvent, useEffect } from "react";
import Attachments from "../Attachments";
import VoiceTrans from "../VoiceTranscriber";
import { useMyContext } from "@/context/my-context";
import dummyData from "@/json/index.json";
import { ErrorToast, SuccessToast } from "@/service/toast";
import SelectedImages from "../SelectedImages";

const Ask = () => {
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { setrIsChatStarted, setPrompt, files, setFiles } = useMyContext();
  const [search, setSearch] = useState("");
  const [showAttch, setShowAttch] = useState(false);
  const [showVoice, setShowVoice] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef?.current?.click();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setFiles(files);
    setrIsChatStarted(true);
  };

  const handleInputChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handelSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setrIsChatStarted(true);
    setPrompt(search);
    setSearch("");
  };

  const handleRemoveImg = (index: number) => {
    const updFiles = files.splice(index, 1);
    setFiles([...files]);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setShowAttch(false);
      setShowVoice(false);
    }
  };

  //need to do with NextAPI
  const UploadFile = async (e: React.FormEvent) => {
    e.preventDefault();
    const file = files[0];
    if (files.length) {
      const formData = new FormData();
      const user_uuid = "4e216b58-fc19-4002-940e-56511dac4cb9"; //this will come from localStorage
      formData.append("uuid", user_uuid);
      formData.append("file", file);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}api/upload_file`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response?.json();
      if (response.ok) SuccessToast(data.message);
      else ErrorToast(data.message);
    } else {
      ErrorToast("Please add atleast one file");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="absolute bottom-0 bg-gradient-blue ">
        <div className="flex gap-2 overflow-y-scroll w-dvw mb-3 pl-3">
          {dummyData.categories.map((item: string) => {
            return (
              <span
                key={item}
                className="border border-slate-400 py-1 px-2 rounded-md"
              >
                {item}
              </span>
            );
          })}
        </div>

        {/* <SelectedImages files={files} handleRemoveImg={handleRemoveImg} /> */}

        <div className="flex items-center justify-start gap-3 mb-3 px-3">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex item-center justify-center p-2">
            <Image
              height={50}
              width={50}
              alt="logo with text"
              src={"/img/message.svg"}
            />
          </div>

          <div className="border border-slate-60 items-center flex rounded-md pr-2">
            <form onSubmit={handelSubmit}>
              <input
                type="text"
                className="p-2 bg-transparent outline-none w-full"
                placeholder="Ask me anything..."
                value={search}
                onChange={handleInputChage}
              />
              <button type="submit" className="hidden">
                Submit
              </button>
            </form>
            <div className="flex items-center gap-3 flex-1">
              <input
                type="file"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
                multiple
                accept="image/*"
              />

              <i
                onClick={handleButtonClick}
                className="bx bxs-camera text-2xl"
              ></i>
              <i
                onClick={() => setShowAttch(!showAttch)}
                className="bx bx-link-alt text-2xl"
              ></i>
              <i
                onClick={() => setShowVoice(!showVoice)}
                className="bx bxs-microphone text-2xl"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <div ref={sidebarRef}>
        <Attachments
          showAttch={showAttch}
          onClose={() => setShowAttch(!showAttch)}
        />
        <VoiceTrans
          showTrans={showVoice}
          onClose={() => setShowVoice(!showVoice)}
        />
      </div>
    </>
  );
};

export default Ask;
