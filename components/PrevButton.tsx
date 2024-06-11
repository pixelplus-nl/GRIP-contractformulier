import React from "react";

export default function PrevButton(props: any) {
  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.handlePrev();
  };

  return (
    <div className="relative w-full flex items-end justify-start">
      <button
        onClick={handlePrevClick}
        className={`relative flex justify-center items-center ${
          props.isButtonDisabled ? "opacity-30" : ""
        }`}>
        <svg
          width="305.115"
          height="69.279"
          className="w-[10rem] md:w-[14rem] h-fit"
          viewBox="0 0 265.115 69.279">
          <a className="group transition-all">
            <path
              id="Path_10"
              data-name="Path 10"
              d="M277.115,0H35.555L12,69.279H277.115Z"
              transform="translate(-12)"
              className={`stroke-[4px] group-hover:fill-[#8CBE44] stroke-[#8CBE44] fill-[#fff] transition-all border-2`}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className={`font-bold text-xl group-hover:fill-white  transition-all`}>
              {props.buttonText}
            </text>
          </a>
        </svg>
      </button>
    </div>
  );
}
