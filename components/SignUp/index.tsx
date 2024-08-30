"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { init_sign_up, check_req_feilds, setUserToLocal } from "@/functions";
import { ErrorToast, SuccessToast } from "@/service/toast";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState(init_sign_up);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let key = e.target.name;
    let value = e.target.value;
    setUserData({
      ...userData,
      [key]: value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const check_values = check_req_feilds(userData);
    if (check_values) {
      const response = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const res = await response.json();
      if (response.ok) {
        setUserToLocal(res.data.session_id);
        SuccessToast(res.message);
        setTimeout(() => router.push("/home"), 1500);
      } else ErrorToast(res.message);
    } else {
      ErrorToast("Plesae enter all the details!");
    }
  };

  return (
    <div className="flex flex-col items-center w-full px-3 animate__animated animate__bounceInLeft">
      <Image height={50} width={50} alt="logo" src={"/img/logo.svg"} priority />
      <span className="text-black dark:text-white text-md text-center pt-3 font-semibold">
        Create Your Account
      </span>
      <span className="text-black dark:text-white text-sm text-center pt-3 font-semibold">
        Create an account to view and manage <br /> your work
      </span>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          name="firstname"
          value={userData.firstname}
          placeholder="First name"
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastname"
          value={userData.lastname}
          placeholder="Last name"
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />

        <input
          type="email"
          name="email_id"
          value={userData.email_id}
          placeholder="Email address"
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />

        <input
          type="tel"
          name="mobile_number"
          value={userData.mobile_number}
          placeholder="Mobile number"
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder="Password"
          autoComplete=""
          className="border border-sky-500 bg-none bg-transparent outline-none w-full p-2 mt-6"
          onChange={handleChange}
        />

        <button
          type="submit"
          className=" text-center button-bg text-blue-600 dark:text-blue-200 w-full p-2 text-md mt-6"
        >
          Continue
        </button>
      </form>

      <span className="mt-6">
        <span>Already have an account ? </span>
        <Link className="text-blue-600 dark:text-blue-200" href={"/login"}>
          Log in
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

export default SignUpPage;
