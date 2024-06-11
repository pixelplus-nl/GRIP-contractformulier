export default function NextButton(props: any) {
  const handleNextClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    props.handleNext();
  };

  return (
    <div className=" z-40 relative w-full flex justify-end">
      <button
        disabled={props.isButtonDisabled === true}
        onClick={handleNextClick}
        className={`relative flex justify-center items-center ${
          props.isButtonDisabled ? "opacity-30" : ""
        }`}>
        <svg
          className="w-[12rem] md:w-full h-fit"
          width="240.963"
          height="70.701"
          viewBox="0 0 243.963 70.701">
          <a className="group transition-all">
            <path
              id="Path_1029"
              data-name="Path 1029"
              d="M41,0H257.924l24.038,70.7H41Z"
              transform="translate(-41)"
              className={`stroke-[5px] ${
                props.isButtonDisabled ? "" : "group-hover:fill-[#8CBE44]"
              } stroke-[#8CBE44] fill-[#fff] transition-all border-2`}
            />
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              className={`font-bold ${
                props.isButtonDisabled ? "" : "group-hover:fill-white"
              } text-xl transition-all`}>
              {props.buttonText}
            </text>
          </a>
        </svg>
      </button>
    </div>
  );
}
