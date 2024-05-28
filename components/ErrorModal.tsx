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
          {props.errorModal.title}
        </h1>
        <ul className="list-disc ml-5 max-w-2xl">
          {props.errorModal.body}
        </ul>

        <TfiClose
          onClick={() => props.setErrorModal(null)}
          className="absolute top-10 right-10 hover:opacity-30 cursor-pointer transition-all"
          size={30}
          color="#C10000"
        />
      </motion.div>
    </div>
  );
}
