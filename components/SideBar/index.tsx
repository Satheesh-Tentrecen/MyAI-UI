import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getSessionId, removeUserToLocal, signout_formdata } from "@/functions";
import { useRouter } from "next/navigation";
import { ErrorToast, SuccessToast } from "@/service/toast";

const SideBar = () => {
  const router = useRouter();
  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    const session_id = getSessionId();
    if (session_id) {
      const response = await fetch("api/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id }),
      });

      const data = await response.json();
      if (response.ok) {
        removeUserToLocal();
        setTimeout(() => router.push("/login"), 1500);
        SuccessToast(data.message);
      } else ErrorToast(data.message);
    } else {
      ErrorToast("Invalid email or password");
    }
  };

  return (
    <div className="w-72 dark:bg-slate-800 h-dvh z-10 bg-slate-50">
      <div className="flex items-center bg-blue-500 gap-2 px-3  py-2">
        <Image
          height={28}
          width={28}
          alt="logo"
          src={"/img/logo.svg"}
          priority
        />
        <span className="text-md dark:text-black text-white">Test user</span>
      </div>
      <div className=" bg-white dark:bg-slate-900 px-3  py-2">
        <span className="text-md font-semibold">Account</span>
      </div>
      <div className=" flex items-center justify-between px-3  py-2">
        <div className="flex items-center gap-3">
          <i className="bx bx-paper-plane"></i>
          <span className="text-sm">info@gmail.com</span>
        </div>

        <button
          onClick={handleLogout}
          className="text-xs text-blue-500 font-semibold"
        >
          Sign out
        </button>
      </div>
      <div className=" flex items-center gap-3 px-3 py-2">
        <i className="bx bx-paper-plane"></i>
        <span className="text-sm">Phone number</span>
      </div>
      <div className=" bg-white dark:bg-slate-900 px-3  py-2">
        <span className="text-md font-semibold">Preferences</span>
      </div>
      <Link href="/theme" className=" flex items-center gap-3 px-3 py-2">
        <i className="bx bx-sun"></i>
        <span className="text-sm">Theme</span>
      </Link>
      <Link
        href="region-and-language"
        className="flex items-center gap-3 px-3 py-2"
      >
        <i className="bx bx-planet"></i>
        <span className="text-sm">Region and language</span>
      </Link>
      <Link href="/accounts" className=" flex items-center gap-3 px-3 py-2">
        <i className="bx bxs-user-voice"></i>
        <span className="text-sm">Linked Accounts</span>
      </Link>
      <Link href="/privacy" className=" flex items-center gap-3 px-3 py-2">
        <i className="bx bx-lock-alt"></i>
        <span className="text-sm">Privacy</span>
      </Link>
      <div className=" bg-white dark:bg-slate-900 px-3  py-2">
        <span className="text-md font-semibold">Advanced</span>
      </div>
      <Link href="/feedback" className=" flex items-center gap-3 px-3 py-2">
        <i className="bx bxs-hand-right"></i>
        <span className="text-sm">Feedback</span>
      </Link>
      <Link href="/about" className="flex items-center gap-3 px-3 py-2">
        <i className="bx bx-info-circle"></i>
        <span className="text-sm">About</span>
      </Link>
    </div>
  );
};

export default SideBar;
