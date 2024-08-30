"use client";
import React, { useState, useEffect } from "react";
import LandingPage from "../LandingPage";
import Walkthrough from "../Walkthrough";

const MainPage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowLoader(false);
    }, 3000);
  }, []);

  return (
    <div>
      {showLoader ? <LandingPage showLoader={showLoader} /> : <Walkthrough />}
    </div>
  );
};

export default MainPage;
