import NextButton from "./NextButton";

import { useEffect, useState } from "react";
import Footer from "./Footer";
import RulesWarning from "./RulesWarning";
import { useTranslations, useMessages, AbstractIntlMessages } from "next-intl";
import PrevButton, { PrevButtonMob } from "./PrevButton";

type DetailedMessages = {
  SlideTwo: {
    listFirst: string[];
  };
} & AbstractIntlMessages;

export default function SlideTwo(props: any) {
  const [baseChecked, setBaseChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const isButtonDisabled = !baseChecked;

  const t = useTranslations("SlideTwo");

  const messages = useMessages() as DetailedMessages;
  const listFirst = messages.SlideTwo.listFirst;

  return (
    <>
      <div className="md:flex min-h-screen mb-12 md:px-5 px-0 xl:px-0 lg:gap-10 gap-5 lg:justify-between  max-w-6xl mx-auto">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <RulesWarning />
        </div>

        <form className="mb-10 px-5 md:px-0 md:mt-0 md:w-7/12 relative bg-white">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <ul className="list-disc px-5 mt-3">
            {listFirst.map((item: any, key: any) => {
              return <li key={key}>{item}</li>;
            })}
          </ul>

          <div className="mt-3 mb-10 betterhover:hover:opacity-50 w-fit transition-all flex gap-2 items-center">
            <input
              onChange={(e) => handleCheckboxChange(e, setBaseChecked)}
              id="secBaseCheck"
              name="secBaseCheck"
              type="checkbox"
              className="cursor-pointer"
            />
            <label
              htmlFor="secBaseCheck"
              className="font-bold cursor-pointer text-lg">
              {t("checkButton")}
            </label>
          </div>
          <div className="flex">
            <PrevButtonMob
              handlePrev={props.handlePrev}
              buttonText={`‹ ${t("prevButton")}`}
            />
            <PrevButton
              handlePrev={props.handlePrev}
              buttonText={`‹ ${t("prevButton")}`}
            />
            <NextButton
              handleNext={props.handleNext}
              isButtonDisabled={isButtonDisabled}
              buttonText={`${t("nextButton")} ›`}
            />
          </div>
        </form>
      </div>
    </>
  );
}
