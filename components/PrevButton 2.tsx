import React from "react";

export default function PrevButton(props: any) {
  return (
    <div className=" z-40 relative w-full flex justify-start">
      <button
        onClick={props.handlePrev}
        className={`relative flex justify-center items-center ${
          props.isButtonDisabled ? "opacity-30" : ""
        }`}>
        <svg width="270.115" height="69.279" viewBox="0 0 265.115 69.279">
          <a className="group transition-all">
            <path
              id="Path_10"
              data-name="Path 10"
              d="M277.115,0H35.555L12,69.279H277.115Z"
              transform="translate(-12)"
              className={`stroke-[5px] ${
                props.isButtonDisabled ? "" : "group-hover:fill-[#8CBE44]"
              } stroke-[#8CBE44] fill-[#fff] transition-all border-2`}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className={`font-bold text-xl transition-all`}>
              {props.buttonText}
            </text>
          </a>
        </svg>
      </button>
    </div>
  );
}
