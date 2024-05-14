import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import NextButton from "./NextButton";
import Warning from "./Warning";
import Footer from "./Footer";

const variants = {
  closed: {
    height: "50px",
  },
  open: {
    height: "auto",
  },
};

export default function SlideThree(props: any) {
  const [tandcChecked, settandChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const isButtonDisabled = !tandcChecked;
  return (
    <>
      <div className="md:flex md:px-5 px-0 gap-5">
        <div className="hidden md:block">
          <Warning />
        </div>

        <form className="mb-10 px-5 md:px-0 md:mt-0  max-w-5xl h-full bg-white">
          <h1 className="text-5xl font-bold">Algemene voorwaarden</h1>

          <motion.p
            initial={"closed"}
            variants={variants}
            animate={props.openModal ? "open" : "closed"}
            transition={{ duration: 1 }}
            className="overflow-hidden mt-3">
            Alle bezoekers die gebruik maken van de aangeboden sportfaciliteiten
            van GRIP Boulderhal met een leeftijd van 16 jaar en ouder zijn
            verplicht deze algemene voorwaarden te ondertekenen.
            &ldquo;Bezoeker&ldquo; zoals gebruikt in deze overeenkomst verwijst
            naar personen die GRIP Boulderhal (&ldquo;GRIP&ldquo;) bezoeken, als
            zelfstandig boulderaar, deelnemer aan klim- of andere activiteiten
            of als begeleider. Als de Bezoeker minderjarig is
            (&ldquo;Minderjarige Bezoeker&ldquo;), moet ten minste één ouder of
            wettelijk aangestelde voogd (ouder en voogd worden in dit document
            &ldquo;Ouder&ldquo; genoemd) ondertekenen, als bewijs van hun
            instemming met deze algemene voorwaarden, voor zichzelf en, voor
            zover maximaal toegestaan door de Nederlandse wet, namens de
            minderjarige bezoeker die zijn of haar kind of voogdijkind is
            (gezamenlijk &ldquo;minderjarige bezoeker&ldquo;). Met het oog op
            het gebruik van de diensten en faciliteiten van de Boulderhal,
            erken, begrijp en stem ik, een volwassen bezoeker of ouder van een
            minderjarig bezoekend kind
          </motion.p>
          <div className="bg-white relative">
            <button
              className="bg-[#6AACB8] text-white px-2 py-2 mt-3 font-bold"
              onClick={(e: any) => {
                e.preventDefault();
                props.setOpenModal(true);
              }}>
              Lees verder ›
            </button>
            <div className="mt-5 flex gap-2 items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, settandChecked)}
                id="tandcCheck"
                name="tandcCheck"
                type="checkbox"
              />
              <label htmlFor="tandcCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>

            <hr className="my-10" />
            <NextButton
              handleNext={props.handleNext}
              isButtonDisabled={isButtonDisabled}
            />
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
