import { motion } from "framer-motion";
import { useState } from "react";
import NextButton from "./NextButton";
import Warning from "./RulesWarning";
import Footer from "./Footer";
import { useTranslations } from "next-intl";

const variants = {
  closed: {
    height: "50px",
  },
  open: {
    height: "auto",
  },
};

export default function SlideThree(props: any) {
  const [tandcChecked, settandChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const t = useTranslations("SlideThree");

  const isButtonDisabled = !tandcChecked;
  return (
    <>
      <div className="md:flex  mb-12 md:px-5 px-0 lg:gap-10 gap-5 xl:px-0 lg:justify-between max-w-6xl mx-auto">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <Warning />
        </div>

        <form className=" px-5 md:px-0 md:mt-0 md:w-7/12 h-full bg-white">
          <h1 className="text-4xl font-bold">{t("title")}</h1>

          <motion.div
            initial={"closed"}
            variants={variants}
            dangerouslySetInnerHTML={{ __html: t.raw("paragraph") }}
            animate={props.openModal ? "open" : "closed"}
            transition={{ duration: 5 }}
            className="overflow-hidden mt-3"></motion.div>
          <div className="bg-white relative">
            <button
              className="bg-[#F5F5F5]  w-full text-black  transition-all hover:text-[#6AACB8] px-2 py-2 mt-3 font-bold"
              onClick={(e: any) => {
                e.preventDefault();
                props.setOpenModal(true);
              }}>
              {t("readMoreButton")} ›
            </button>
            <p className="mt-5">{t("acceptText")}</p>
            <div className="mt-5 flex hover:opacity-50 w-fit gap-2 items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, settandChecked)}
                id="tandcCheck"
                name="tandcCheck"
                type="checkbox"
                className="cursor-pointer"
              />
              <label
                htmlFor="tandcCheck"
                className="font-bold cursor-pointer text-lg">
                Ik ga akkoord
              </label>
            </div>

            <hr className="my-10" />
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
