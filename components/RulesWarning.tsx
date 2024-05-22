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

      <h2 className="text-4xl font-bold">{t("title")}</h2>
      <p className="text-lg mt-5">{t("paragraph")}</p>
      <br />
      <div className="relative text-lg overflow-hidden w-fit">
        <Link
          className="relative hover:opacity-70 transition-all"
          href="https://gripnijmegen.dewi-online.nl/iframe/club/156/reservations/activities">
          <motion.span
            transition={{ duration: 1, delay: 2 }}
            initial="hidden"
            animate={{
              width: ["0%", "100%"],
            }}
            className="border-b-2 border-white  absolute bottom-0 inline-block"></motion.span>
          {t("link")}
        </Link>
      </div>
      <br />
      <p className="text-lg">{t("contact")}</p>
    </section>
  );
}
