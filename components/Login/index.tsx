"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ErrorToast, SuccessToast } from "@/service/toast";
import { init_login, login_formdata, setUserToLocal } from "@/functions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(init_login);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.email_id && userData.password) {
      const response = await fetch("api/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/form-data",
        },
        body: JSON.stringify(userData),
      });

      const res = await response.json();
      if (response.ok) {
        //need to check this as for error also 204 ok response is coming from backend
        setUserToLocal(res.data.session_id);
        SuccessToast(res.message);
        setTimeout(() => router.push("/home"), 1500);
      } else ErrorToast(res.message);
    } else {
      ErrorToast("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-3">
      <Image height={50} width={50} alt="logo" src={"/img/logo.svg"} priority />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Welcome back
      </span>
      <form onSubmit={handleLogin}>
        <input
          value={userData.email_id}
          type="email_id"
          name="email_id"
          placeholder="Email address"
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />
        <input
          name="password"
          value={userData.password}
          type="password"
          placeholder="Password"
          autoComplete=""
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />

        <button
          type="submit"
          className="text-center button-bg text-blue-600 dark:text-blue-200 w-full p-2 text-md mt-6"
        >
          Continue
        </button>
      </form>
      <span className="mt-6">
        <span>Didn’t have an account ? </span>
        <Link className="text-blue-600 dark:text-blue-200" href={"/sign-up"}>
          Sign up
        </Link>
      </span>

      <div className={`my-3 flex items-center w-full mt-10`}>
        <span className="flex-1 border border-slate-400 w-full mr-1"></span>
        <p className={`mb-0 text-center font-semibold`}>OR</p>
        <span className="flex-1 border border-slate-400 w-full ml-1"></span>
      </div>

      <div className="flex items-center w-full bg-slate-100 px-3 py-2 gap-5 text-black mt-10">
        <Image
          className="rounded-full"
          src="/img/google.svg"
          height={20}
          width={20}
          alt="google logo"
        />
        <span>Continue with Google</span>
      </div>

      <div className="flex items-center w-full bg-slate-100 px-3 py-2 gap-5 text-black mt-4">
        <Image
          className=""
          src="/img/microsoft.svg"
          height={20}
          width={20}
          alt="google logo"
        />
        <span>Continue with Google</span>
      </div>
    </div>
  );
};

export default LoginPage;
