import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import NextButton from "./NextButton";

const variants = {
  closed: {
    height: "100%",
  },
  open: {
    height: "0",
  },
};

export default function SlideThree(props: any) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="relative text-white px-5 pt-10 pb-20 w-full">
        <Image
          src="warning.svg"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          alt={""}
        />

        <h2 className="text-4xl font-bold">Ken de regels!</h2>
        <p className="text-lg mt-5">
          Voor je eigen veiligheid en de veiligheid van andere klimmers is het
          belangrijk dat iedereen de regels kent. Accordeer elk onderdeel om aan
          te geven dat je de tekst hebt gelezen en de regels begrijpt.
          <br />
          <br /> Je hoeft je maar één keer te registreren. Ben je eerder komen
          boulderen bij Grip? Dan hoef je je dus niet opnieuw te registeren. Let
          op! dit is geen reservering. Reserveren kan via onze website.
          <br />
          <br />
          Heb je een vraag? Neem contact op.
        </p>
      </div>

      <form className="mt-10 px-5 md relative h-full bg-white">
        <h1 className="text-5xl font-bold">Algemene voorwaarden</h1>

        <div className="relative">
          <div className="mt-3">
            <p>
              Alle bezoekers die gebruik maken van de aangeboden
              sportfaciliteiten van GRIP Boulderhal met een leeftijd van 16 jaar
              en ouder zijn verplicht deze algemene voorwaarden te ondertekenen.
              &ldquo;Bezoeker&ldquo; zoals gebruikt in deze overeenkomst
              verwijst naar personen die GRIP Boulderhal (&ldquo;GRIP&ldquo;)
              bezoeken, als zelfstandig boulderaar, deelnemer aan klim- of
              andere activiteiten of als begeleider. Als de Bezoeker minderjarig
              is (&ldquo;Minderjarige Bezoeker&ldquo;), moet ten minste één
              ouder of wettelijk aangestelde voogd (ouder en voogd worden in dit
              document &ldquo;Ouder&ldquo; genoemd) ondertekenen, als bewijs van
              hun instemming met deze algemene voorwaarden, voor zichzelf en,
              voor zover maximaal toegestaan door de Nederlandse wet, namens de
              minderjarige bezoeker die zijn of haar kind of voogdijkind is
              (gezamenlijk &ldquo;minderjarige bezoeker&ldquo;). Met het oog op
              het gebruik van de diensten en faciliteiten van de Boulderhal,
              erken, begrijp en stem ik, een volwassen bezoeker of ouder van een
              minderjarig bezoekend kind
            </p>
          </div>
          <motion.div
            initial={"closed"}
            variants={variants}
            animate={openModal ? "open" : "closed"}
            transition={{ duration: 2 }}
            className="bg-gradient-to-b z-20 absolute bottom-0 h-1/2 left-0 w-full from-transparent via-white/80 to-white"></motion.div>
        </div>
      </form>
      <div className="bg-white w-full my-5 px-5 relative z-30">
        <button
          onClick={(e) => {
            e.preventDefault();
            setOpenModal(true);
          }}
          className="border-[#6AACB8]  hover:bg-[#6AACB8] font-bold hover:text-white transition-all border-2  w-full py-2">
          Lees verder
        </button>
      </div>

      <NextButton handleNext={props.handleNext} />
    </>
  );
}
