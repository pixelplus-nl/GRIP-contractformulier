"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useLocale } from "next-intl";

export default function Header() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const [activeLanguage, setActiveLanguage] = useState(localActive);
  const pathname = usePathname();

  const onSelectLanguage = (language: string) => {
    startTransition(() => {
      setActiveLanguage(language);
      const segments = pathname.split("/");
      segments[1] = language;
      const newPath = segments.join("/");
      router.replace(newPath);
    });
  };

  return (
    <header className="bg-[#F5F5F5] fixed w-full  z-50 ">
      <div className="flex justify-end px-3 py-2 relative xl:px-0 max-w-6xl mx-auto">
        <Image
          src="/gripLogo.svg"
          alt="logo"
          title="logo"
          width={400}
          height={400}
          className="w-36 lg:w-44 pt-2 absolute left-3 xl:left-0"
        />

        <div className="flex gap-1 h-fit">
          <button
            type="button"
            defaultValue={localActive}
            disabled={isPending}
            className={`font-bold ${
              activeLanguage === "nl" ? "font-bold" : "font-normal"
            }`}
            onClick={() => {
              onSelectLanguage("nl");
            }}>
            NL
          </button>
          <span>|</span>
          <button
            type="button"
            disabled={isPending}
            className={`font-bold ${
              activeLanguage === "en" ? "font-bold" : "font-normal"
            }`}
            onClick={() => {
              onSelectLanguage("en");
            }}>
            EN
          </button>
        </div>
      </div>
    </header>
  );
}
