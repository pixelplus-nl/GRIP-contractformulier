import Button from "@/components/Button";
import ScrollToLink from "@/components/ScrollToLink";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Home() {
  const landing = useTranslations("Landing");
  const localActive = useLocale();

  return (
    <main>
      <div className="relative flex justify-center items-end h-[35rem] md:h-screen">
        <div className=" absolute right-0 w-full h-full">
          <Image
            src="/impression_img01.png"
            fill
            placeholder="blur"
            blurDataURL="data:..."
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: -1,
              objectPosition: "right",
            }}
            alt={""}
          />
        </div>
        <ScrollToLink text={landing("heroScrollLink")} />
        <div className="w-full absolute bottom-0 right-0 h-full bg-gradient-to-r md:from-[#8CBE44] md:via-[#8CBE44]/90 md:to-[#8CBE44]/40 from-[#8CBE44]  via-[#8CBE44]/90 to-[#8CBE44]/60"></div>

        <div className="relative max-w-[23rem] md:max-w-[38rem] flex mb-40 md:mb-80 flex-col items-center gap-10">
          <h1 className="text-white text-4xl md:text-6xl text-center">
            <b>{landing("titleBold")}</b> {landing("titleMedium")}
          </h1>
          <div className="w-52">
            <Button
              specs="group-hover:fill-[#8CBE44] stroke-[#fff] fill-[#fff]"
              textColor="group-hover:fill-white"
              linkTo={`${localActive}/wizard`}
              text={landing("buttonText")}
            />
          </div>
        </div>
      </div>

      <div id="content" className="px-5 md:px-10 py-10 md:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto md:flex gap-10">
          <div className="relative w-full rounded-3xl overflow-hidden  hidden md:block">
            <Image
              src="/impression_img02.png"
              fill
              placeholder="blur"
              blurDataURL="data:..."
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
              alt={""}
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold">{landing("subTitle")}</h2>
            <p className="mt-3">{landing("paragraph")}</p>

            <div className="w-48 my-5">
              <Button
                specs="group-hover:fill-[#8CBE44] stroke-[#8CBE44] fill-[#fff]"
                textColor="group-hover:fill-white"
                linkTo={`${localActive}/wizard`}
                text={landing("buttonText")}
              />
            </div>

            <p>{landing("contactCta")}</p>
            <Link
              className="cursor-pointer group transition"
              href="https://gripnijmegen.nl/boulderhal/contact/">
              <span className="inline-block h-6 bg-left-bottom bg-gradient-to-r from-black/80 to-black/80 bg-[length:100%_2px] bg-no-repeat group-hover:bg-[length:0%_2px] transition-all duration-500 ease-out cursor-pointer font-semibold  ">
                {landing("contactCtaLink")} ›
              </span>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
