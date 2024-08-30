"use client";
import { MyProvider } from "@/context/my-context";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MyProvider>{children}</MyProvider>
      <ToastContainer />
    </>
  );
};

export default Layout;
