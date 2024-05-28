import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export default function RulesWarning() {
  const t = useTranslations("Warning");
  return (
    <section className="relative md:w-[100%] h-fit overflow-hidden text-white px-5 pt-10 pb-20 w-full">
      <Image
        src="/warning.svg"
        fill
        priority
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
        }}
        alt={""}
      />
      <h2 className="text-3xl font-bold">{t("title")}</h2>
      <p className="text-lg mt-5">
        {t.rich("paragraph", {
          br: (chunks) => <br />,
        })}
      </p>
      <br />
      <p>{t("noteReservation")}</p>
      <div className="relative overflow-hidden w-fit">
        <Link
          className="cursor-pointer group transition"
          href="https://gripnijmegen.dewi-online.nl/iframe/club/156/reservations/activities">
          <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-white/80 to-white/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold  ">
            {t("link")}
          </span>
        </Link>
      </div>
      <br />
      <p>{t("question")}</p>
      <Link
        className="cursor-pointer group transition"
        href="https://gripnijmegen.nl/boulderhal/contact/">
        <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-white/80 to-white/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold  ">
          {t("contact")} ›
        </span>
      </Link>
    </section>
  );
}
