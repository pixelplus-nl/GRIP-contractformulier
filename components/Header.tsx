"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  // State to track which button has the 'font-bold' class
  const [activeButton, setActiveButton] = useState("NL");

  // Function to handle button click
  const handleClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <div className="bg-[#F5F5F5] fixed w-full flex z-50 justify-end px-3 py-2">
      <Image
        src="/gripLogo.svg"
        alt="logo"
        title="logo"
        width={400}
        height={400}
        className="w-36 pt-2 absolute left-3"
      />

      <div className="flex gap-1 h-fit">
        {/* Render buttons with conditional styling */}
        <button
          className={`font-bold ${
            activeButton === "NL" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleClick("NL")}>
          NL
        </button>
        <span>|</span>
        <button
          className={`font-bold ${
            activeButton === "EN" ? "font-bold" : "font-normal"
          }`}
          onClick={() => handleClick("EN")}>
          EN
        </button>
      </div>
    </div>
  );
}
