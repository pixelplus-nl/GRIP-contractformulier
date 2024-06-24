import { useTranslations } from "next-intl";

export default function CustomPagination(props: any) {
  const t = useTranslations("Pag");
  return (
    <div className="pt-24 items-center pb-12 gap-20 flex justify-center">
      <button
        className={`${
          props.activeIndex > 0 ? "visible" : "invisible"
        } text-5xl w-4 cursor-pointer betterhover:hover:-translate-x-1 transition-all text-[#8cbe44]`}
        onClick={props.handlePrev}>
        ‹
      </button>

      <span className="font-semibold text-xl pt-2">
        {t("step")}{" "}
        <span className="text-[#8cbe44]">{props.activeIndex + 1}/4</span>
      </span>

      <button
        className={`${
          props.activeIndex < 3 && props.slideChecked === true
            ? "visible"
            : "invisible"
        } text-5xl w-4 cursor-pointer betterhover:hover:translate-x-1 transition-all text-[#8cbe44]`}
        onClick={props.handleNext}>
        ›
      </button>
    </div>
  );
}
