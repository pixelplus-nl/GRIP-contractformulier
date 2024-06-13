import { useState } from "react";
import NextButton from "./NextButton";
import React from "react";
import Footer from "./Footer";
import RulesWarning from "./RulesWarning";
import { useTranslations, useMessages, AbstractIntlMessages } from "next-intl";

type DetailedMessages = {
  SlideOne: {
    listFirst: string[];
    listSecond: string[];
    listThird: string[];
    listFourth: string[];
    listFifth: string[];
  };
} & AbstractIntlMessages;

export default function SlideOne(props: any) {
  const [fallZonesChecked, setFallZonesChecked] = useState(false);
  const [baseChecked, setBaseChecked] = useState(false);
  const [etiquetteChecked, setEtiquetteChecked] = useState(false);
  const [minorChecked, setMinorChecked] = useState(false);
  const [emergencyChecked, setEmergencyChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const isButtonDisabled =
    !fallZonesChecked ||
    !baseChecked ||
    !etiquetteChecked ||
    !minorChecked ||
    !emergencyChecked;

  const t = useTranslations("SlideOne");

  const messages = useMessages() as DetailedMessages;
  const listFirst = messages.SlideOne.listFirst;
  const listSecond = messages.SlideOne.listSecond;
  const listThird = messages.SlideOne.listThird;
  const listFourth = messages.SlideOne.listFourth;
  const listFifth = messages.SlideOne.listFifth;

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 lg:justify-between lg:gap-10 xl:px-0 max-w-6xl mx-auto">
        <div className="md:w-5/12 md:max-w-[25rem]">
          <RulesWarning />
        </div>

        <form className="mt-10 px-5 md:px-0 md:w-7/12  md:mt-0 bg-white">
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <div className="mt-3">
            <p>{t("explanation")}</p>
            <p>{t("agreement")}</p>
          </div>

          <div className="my-5">
            <h2 className="text-3xl font-semibold">{t("subTitleFirst")}</h2>
            <ul className="list-disc px-5 mt-3">
              {listFirst.map((item: any, key: any) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>

            <div className="mt-3 flex gap-2 betterhover:hover:opacity-50 transition-all w-fit items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, setBaseChecked)}
                id="baseCheck"
                name="baseCheck"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                htmlFor="baseCheck"
                className="font-bold cursor-pointer text-lg">
                {t("checkButton")}
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-3xl font-semibold">{t("subTitleSecond")}</h2>
            <ul className="list-disc px-5 mt-3">
              {listSecond.map((item: any, key: any) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>

            <div className="mt-3 flex gap-2 betterhover:hover:opacity-50 w-fit transition-all  items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, setFallZonesChecked)}
                id="fallZonesCheck"
                name="fallZonesCheck"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                htmlFor="fallZonesCheck"
                className="font-bold cursor-pointer text-lg">
                {t("checkButton")}
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-3xl font-semibold">{t("subTitleThird")}</h2>
            <ul className="list-disc px-5 mt-3">
              {listThird.map((item: any, key: any) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>

            <div className="mt-3 flex gap-2 betterhover:hover:opacity-50 w-fit transition-all items-center">
              <input
                id="etiquetteCheck"
                name="etiquetteCheck"
                type="checkbox"
                className="cursor-pointer"
                onChange={(e) => handleCheckboxChange(e, setEtiquetteChecked)}
              />
              <label
                htmlFor="etiquetteCheck"
                className="font-bold cursor-pointer text-lg">
                {t("checkButton")}
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-3xl font-semibold">{t("subTitleFourth")}</h2>
            <ul className="list-disc px-5 mt-3">
              {listFourth.map((item: any, key: any) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>

            <div className="mt-3 flex gap-2 betterhover:hover:opacity-50 w-fit transition-all items-center">
              <input
                id="minorCheck"
                name="minorCheck"
                type="checkbox"
                className="cursor-pointer"
                onChange={(e) => handleCheckboxChange(e, setMinorChecked)}
              />
              <label
                htmlFor="minorCheck"
                className="font-bold cursor-pointer text-lg">
                {t("checkButton")}
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-3xl font-semibold">{t("subTitleFifth")}</h2>
            <ul className="list-disc px-5 mt-3">
              {listFifth.map((item: any, key: any) => {
                return <li key={key}>{item}</li>;
              })}
            </ul>

            <div className="mt-3 flex gap-2 betterhover:hover:opacity-50 transition-all w-fit items-center">
              <input
                id="emergencyCheck"
                name="emergencyCheck"
                type="checkbox"
                className="cursor-pointer"
                onChange={(e) => handleCheckboxChange(e, setEmergencyChecked)}
              />
              <label
                htmlFor="emergencyCheck"
                className="font-bold cursor-pointer text-lg">
                {t("checkButton")}
              </label>
            </div>
          </div>

          <hr className="my-10" />
          <NextButton
            handleNext={props.handleNext}
            isButtonDisabled={isButtonDisabled}
            buttonText={`${t("nextButton")} ›`}
          />
        </form>
      </div>
    </>
  );
}
