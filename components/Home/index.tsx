"use client";
import React from "react";
import NavBar from "../Nav";
import ExamplePrompts from "../Prompts";
import Ask from "../Ask";
import { useMyContext } from "@/context/my-context";

const HomePage = () => {
  const { isChatStarted } = useMyContext();
  return (
    <>
      <NavBar />
      <ExamplePrompts isChatStarted={isChatStarted} />
      <Ask />
    </>
  );
};

export default HomePage;
