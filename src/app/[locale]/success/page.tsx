import { useState } from "react";
import NextButton from "./NextButton";
import React from "react";
import Footer from "./Footer";
import { useTranslations, useMessages, AbstractIntlMessages } from "next-intl";

export default function Page(props: any) {
  const t = useTranslations("Success");

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 lg:justify-between lg:gap-10 xl:px-0 max-w-6xl mx-auto">

        
        <form className="px-5 h-full md:px-0 md:mt-0 max-w-3xl bg-white md:w-7/12">
        
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p>{t("body")}</p>
        
        
        </form>



      </div>
    </>
  );
}
