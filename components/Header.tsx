"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Header() {
  const [activeButton, setActiveButton] = useState("NL");

  const handleClick = (button: any) => {
    setActiveButton(button);
  };

  return (
    <header className="bg-[#F5F5F5] fixed w-full  z-50 ">
      <div className="flex justify-end px-3 py-2 relative lg:px-0 max-w-6xl mx-auto">
        <Image
          src="/gripLogo.svg"
          alt="logo"
          title="logo"
          width={400}
          height={400}
          className="w-36 lg:w-44 pt-2 absolute left-3 lg:left-0"
        />

        <div className="flex gap-1 h-fit">
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
    </header>
  );
}
