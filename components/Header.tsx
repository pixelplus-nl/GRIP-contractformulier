import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="bg-[#F5F5F5] fixed w-full flex z-50  justify-end px-3 py-2">
      <Image
        src="/gripLogo.svg"
        alt="logo"
        title="logo"
        width={400}
        height={400}
        className="w-36 pt-2 absolute left-3"
      />

      <div className="flex gap-1 h-fit">
        <p className="font-bold">NL</p>
        <span>|</span>
        <p>EN</p>
      </div>
    </div>
  );
}
