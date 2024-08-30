import Image from "next/image";
import React from "react";

const SelectedImages = ({
  files,
  handleRemoveImg,
  imgHeight = 50,
  imgWidth = 50,
  showClose = false,
}: {
  files: File[];
  handleRemoveImg: (a: number) => void;
  imgHeight?: number;
  imgWidth?: number;
  showClose?: boolean;
}) => {
  return (
    <div className="flex items-center flex-wrap -z-10">
      {files.map((file, index) => {
        const objectUrl = URL.createObjectURL(file);
        return (
          <div
            key={file.name}
            className="flex items-center justify-start gap-3 mb-3 px-3 relative h-20 w-20"
          >
            {showClose ? (
              <span
                onClick={() => handleRemoveImg(index)}
                className="absolute top-1 w-5 h-5 bg-slate-50 shadow-md dark:bg-slate-600 left-1 rounded-full flex items-center justify-center"
              >
                <i className="bx bx-x"></i>
              </span>
            ) : (
              <></>
            )}
            <Image
              height={imgHeight}
              width={imgWidth}
              alt="img"
              src={objectUrl}
              className="shadow-lg"
            />
          </div>
        );
      })}
    </div>
  );
};

export default SelectedImages;
