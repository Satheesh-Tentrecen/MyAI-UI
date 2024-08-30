import React from "react";
import Image from "next/image";
import Link from "next/link";

const WelcomePage = () => {
  return (
    <div className="flex items-center justify-center h-dvh flex-col">
      <span className="text-lg">Welcome to Application</span>
      <Image
        height={100}
        width={100}
        alt="logo"
        src={"/img/logo.svg"}
        priority
      />
      <span className="text-sm">Log with your Open AI account to continue</span>
      <div className="flex items-center gap-4 w-full mt-10 px-3">
        <Link
          href="sign-up"
          className="button-bg text-black dark:text-blue-200 w-full p-2 text-md rounded-lg text-center"
        >
          Sign up
        </Link>
        <Link
          href="login"
          className="button-bg text-black dark:text-blue-200 w-full p-2 text-md rounded-lg text-center"
        >
          Log in
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
