"use client";

import { motion } from "framer-motion";
import { TfiClose } from "react-icons/tfi";

export default function ErrorModal(props: any) {
  return (
    <div className="fixed z-40 px-3 flex w-screen h-screen justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: "100vh" }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-screen h-screen flex fixed top-0 left-0 bg-black/50 backdrop-blur"></motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="relative z-50 bg-white p-10 rounded-2xl">
        <h1 className="text-4xl font-bold mb-5">
          {props.errorModal.title || props.title}
        </h1>
        <ul className={`list-disc ${props.ulMargin} max-w-2xl`}>
          {props.errorModal.body || props.body}
        </ul>

        <div className={`flex gap-3 mt-5 ${props.languageButtons}`}>
          <button
            onClick={() => props.setErrorModal(false)}
            className="bg-[#6AACB8] border-[#6AACB8] border-2 transition-all hover:bg-white hover:text-black px-2 py-1 w-full text-white">
            {props.cancel}
          </button>
          <button
            onClick={() => {
              const currentPathSegment = props.pathname.split("/")[1];
              currentPathSegment === "nl"
                ? props.changeLanguage("en")
                : props.changeLanguage("nl");
            }}
            className="bg-[#8CBE44] hover:text-black w-full
           text-white px-2 py-1 border-2 hover:bg-white border-[#8CBE44] transition-all">
            {props.proceed}
          </button>
        </div>

        <TfiClose
          onClick={() => props.setErrorModal(null)}
          className={`absolute ${props.crossButton} top-10 right-10 hover:opacity-30 cursor-pointer transition-all`}
          size={30}
          color="#C10000"
        />
      </motion.div>
    </div>
  );
}
