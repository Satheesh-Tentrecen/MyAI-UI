"use client";
import React, { useState, useRef } from "react";

const Attachments = ({
  showAttch,
  onClose,
}: {
  showAttch: boolean;
  onClose: () => void;
}) => {
  const fileInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const [file, setFile] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [docsData, setDocsData] = useState([
    {
      type: "pdf",
      extension: "pdf",
      icon: "bxs-file-pdf",
    },
    {
      type: "Excel",
      extension: "xlsx",
      icon: "bx-spreadsheet",
    },
    {
      type: "Word",
      extension: "docx",
      icon: "bxs-file-doc",
    },
    {
      type: "Notepad",
      extension: "txt",
      icon: "bxs-notepad",
    },
    {
      type: "One",
      extension: "one",
      icon: "bxs-hdd",
    },
    {
      type: "One note",
      extension: "one",
      icon: "bxs-dock-top",
    },
    {
      type: "Power point",
      extension: "txt",
      icon: "bxl-microsoft",
    },
    {
      type: "One Drive",
      extension: "txt",
      icon: "bxl-microsoft",
    },
  ]);

  const handleButtonClick = (index: number) => {
    if (fileInputRefs.current[index]) {
      fileInputRefs.current[index]?.click();
      onClose();
    }
  };

  const setFileInputRef = (el: HTMLInputElement | null, index: number) => {
    fileInputRefs.current[index] = el;
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    extension: string
  ) => {
    const files = Array.from(event.target.files || []);
    setFile(files);
    // important code
    // const file = event.target.files?.[0];
    // if (file && file.name.endsWith(`.${extension}`)) {

    // } else {
    //   console.error("Invalid file type");
    // }
  };

  return (
    <div
      className={
        showAttch
          ? "absolute bottom-0 transition-all w-full "
          : "absolute -left-full transition-all w-full"
      }
    >
      <div className="bg-slate-50 dark:bg-slate-900 py-6 w-full">
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 gap place-items-center ">
          {docsData.map((item, index) => {
            return (
              <div
                key={item.type}
                className="flex items-center justify-center flex-col"
              >
                <input
                  type="file"
                  ref={(el) => setFileInputRef(el, index)}
                  className="hidden"
                  accept={`.${item.extension}`}
                  name={item.type}
                  id={item.type}
                  onChange={(e) => handleFileChange(e, item.extension)}
                  multiple
                />
                <div
                  onClick={() => handleButtonClick(index)}
                  className="shadow shadow-slate-50 rounded-full w-12 h-12 flex items-center justify-center"
                >
                  <i className={`bx ${item.icon} text-2xl`}></i>
                </div>
                <span className="text-xs mt-2 capitalize">{item.type}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Attachments;
