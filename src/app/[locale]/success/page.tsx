"use client";

import { useEffect, useState } from "react";
import React from "react";
import { useTranslations, useMessages, AbstractIntlMessages } from "next-intl";
import { IoCheckmark } from "react-icons/io5";
import Link from "next/link";

export default function Page(props: any) {
  const [email, setEmail] = useState<any>("");
  const t = useTranslations("Success");

  useEffect(() => {
    // Check if email is stored in local storage
    if (localStorage.getItem("email")) {
      setEmail(localStorage.getItem("email"));
    }
  }, [email]);

  return (
    <div className="h-screen bg-[#6aacb8] px-5 flex justify-center items-center">
      <div className=" bg-white">
        <div className="bg-[#8CBE44] w-full flex justify-center  md:py-5 items-center">
          <IoCheckmark color="#fff" className="size-24" />
        </div>
        <div className="px-5 my-10">
          <h1 className="text-4xl font-bold mb-5">{t("title")}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: t.raw("body") }}
            className="max-w-lg mt-5"></div>
          <span className="font-bold">{email}</span>
          
          <div
            dangerouslySetInnerHTML={{ __html: t.raw("addInfo") }}
            className="max-w-lg mt-3 [&>a]:hover:no-underline [&>a]:underline"></div>

          <p className="font-bold mt-5">{t("noteReservation")}</p>
          <div className="relative overflow-hidden w-fit">
            <Link
              target="_blank"
              className="cursor-pointer group transition"
              href="https://gripnijmegen.dewi-online.nl/iframe/club/156/reservations/activities">
              <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-[#6aacb8]/80 to-[#6aacb8]/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer">
                {t("link")}
              </span>
            </Link>
          </div>

          <p className="font-bold mt-3">{t("question")}</p>
          <Link
            target="_blank"
            className="cursor-pointer group transition"
            href="https://gripnijmegen.nl/boulderhal/contact/">
            <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-[#6aacb8]/80 to-[#6aacb8]/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer  ">
              {t("contact")} ›
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
