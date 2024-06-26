export default function Button(props: any) {
  return (
    <div className="relative flex justify-center items-center">
      <svg width="260.963" height="70.701" viewBox="0 0 243.963 70.701">
        <a className="group transition-all" href={props.linkTo}>
          <path
            id="Path_1029"
            data-name="Path 1029"
            d="M41,0H257.924l24.038,70.7H41Z"
            transform="translate(-41)"
            className={`${props.specs} stroke-[5px] transition-all border-2`}
          />
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className={`font-bold ml-5 text-lg transition-all ${props.textColor}`}>
            {props.text} ›&nbsp;&nbsp;&nbsp;
          </text>
        </a>
      </svg>
    </div>
  );
}
