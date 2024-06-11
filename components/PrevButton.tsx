import React from "react";

export default function PrevButton(props: any) {
  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.handlePrev();
  };

  return (
    <div className="hidden lg:flex  relative w-full items-end justify-start">
      <button
        onClick={handlePrevClick}
        className={`relative flex justify-center items-center ${
          props.isButtonDisabled ? "opacity-30" : ""
        }`}>
        <svg
          width="228.807"
          height="61.659"
          viewBox="0 0 228.807 61.659"
          className=" h-fit">
          <a className="group transition-all">
            <path
              id="Path_10"
              data-name="Path 10"
              d="M240.807,0H32.329L12,61.659H240.807Z"
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

export function PrevButtonMob(props: any) {
  const handlePrevClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.handlePrev();
  };

  return (
    <div className="lg:hidden  relative w-full flex items-end justify-start">
      <button
        onClick={handlePrevClick}
        className={`relative flex justify-center items-center ${
          props.isButtonDisabled ? "opacity-30" : ""
        }`}>
        <svg
          width="135.819"
          height="44.627"
          viewBox="0 0 130.819 44.627"
          className=" h-fit">
          <a className="group transition-all">
            <path
              id="Path_10"
              data-name="Path 10"
              d="M171.819,0H54.051L41,44.627H171.819Z"
              transform="translate(-41)"
              className={`stroke-[4px] group-hover:fill-[#8CBE44] stroke-[#8CBE44] fill-[#fff] transition-all border-2`}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className={`font-bold text-sm group-hover:fill-white  transition-all`}>
              {props.buttonText}
            </text>
          </a>
        </svg>
      </button>
    </div>
  );
}
