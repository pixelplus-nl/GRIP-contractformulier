import Button from "@/components/Button";
import ScrollToLink from "@/components/ScrollToLink";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const landing = useTranslations("Index");

  console.log();
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
        <ScrollToLink />
        <div className="w-full absolute bottom-0 right-0 h-full bg-gradient-to-r md:from-[#8CBE44] md:via-[#8CBE44]/80 md:to-[#8CBE44]/40 from-[#8CBE44]  via-[#8CBE44]/90 to-[#8CBE44]/60"></div>

        <div className="relative max-w-xs md:max-w-xl flex mb-32 md:mb-60 flex-col items-center gap-10">
          <h1 className="text-white text-4xl md:text-6xl text-center">
            <b>{landing("titleBold")}</b> {landing("titleMedium")}
          </h1>
          <div className="w-48">
            <Button
              specs="group-hover:fill-[#8CBE44] stroke-[#fff] fill-[#fff]"
              textColor="group-hover:fill-white"
              linkTo="/wizard"
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
            <h2 className="text-4xl font-semibold">
              Wat gebeurt er met mijn inschrijfgegevens?
            </h2>
            <p className="mt-3">
              je inschrijfgegevens worden gebruikt ten behoeve van identificatie
              aan de incheckbalie en door onze administratie, om producten zoals
              lidmaatschappen, strippenkaarten en tegoeden te kunnen koppelen,
              maar ook om aan te kunnen tonen dat jij de persoon bent die aan de
              vereisten van onze verzekeraar voldoet om bij ons te mogen
              boulderen. We gebruiken je gegevens ook om contact op te kunnen
              nemen in geval van nood, zorg en bij bijvoorbeeld achtergelaten
              waardevolle spullen.
              <br /> We respecteren jouw privacy en zullen jouw gegevens nooit
              ongevraagd verspreiden, delen of publiceren. Onze database is
              afgeschermd van de buitenwereld en we hanteren een helder
              AVG-protocol.
            </p>

            <div className="w-48 my-5">
              <Button
                specs="group-hover:fill-[#8CBE44] stroke-[#8CBE44] fill-[#fff]"
                textColor="group-hover:fill-white"
                linkTo="/wizard"
              />
            </div>

            <div>
              <p>Heb je een vraag of lukt het niet om te registeren?</p>
            </div>
            <Link className="cursor-pointer" href="#">
              Neem contact op ›
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
