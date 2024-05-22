"use client";

import { Link as ScrollLink } from "react-scroll";

export default function ScrollToLink(props: any) {
  return (
    <div className="group transition hidden md:block duration-800 ease-out z-30 absolute bottom-10 right-20">
      <ScrollLink
        smooth={true}
        duration={800}
        to="content"
        className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-white/80 to-white/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold text-white ">
        {props.text}
      </ScrollLink>
    </div>
  );
}
