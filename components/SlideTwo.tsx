import NextButton from "./NextButton";

import { useState } from "react";
import Footer from "./Footer";
import RulesWarning from "./RulesWarning";

export default function SlideTwo(props: any) {
  const [baseChecked, setBaseChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const isButtonDisabled = !baseChecked;

  return (
    <>
      <div className="md:flex mb-12 md:px-5 px-0 lg:gap-10 gap-5 max-w-5xl mx-auto">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <RulesWarning />
        </div>

        <form className="mb-10 px-5 md:px-0 md:mt-0 md:w-7/12 relative bg-white">
          <h1 className="text-5xl font-bold">Validiteit</h1>
          <ul className="list-disc px-5 mt-3">
            <li>
              Ik verklaar hierbij dat ik, of het minderjarige bezoekende kind
              voor wie ik deze overeenkomst onderteken, in goede gezondheid
              verkeer en geen mentale of fysieke beperking,
              verwonding, ziekte of kwaal heb waardoor ik niet deel kan nemen
              aan Boulderhalactiviteiten. Ik begrijp dat als mijn, of dat van
              het minderjarige bezoekende kind, mentale of fysieke toestand
              verandert zodanig dat ik, of het minderjarige bezoekende kind,
              niet meer in staat is deel te nemen aan activiteiten, ik of het
              minderjarige Bezoekende Kind, verplicht ben te stoppen met de
              activiteiten.
            </li>
            <li>
              Aanwijzingen van GRIP medewerkers volg ik te allen tijde op.
            </li>
            <li>
              GRIP is niet aansprakelijk wanneer ik of het minderjarige kind
              niet beschikt over een toereikende conditie of gezondheid of
              wanneer ik of het minderjarige kind niet de aanwijzingen van GRIP
              medewerkers opvolg.
            </li>
          </ul>

          <div className="mt-3 mb-10 flex gap-2 items-center">
            <input
              onChange={(e) => handleCheckboxChange(e, setBaseChecked)}
              id="secBaseCheck"
              name="secBaseCheck"
              type="checkbox"
            />
            <label htmlFor="secBaseCheck" className="font-bold text-lg">
              Ik ga akkoord
            </label>
          </div>
          <NextButton
            handleNext={props.handleNext}
            isButtonDisabled={isButtonDisabled}
            buttonText="Volgende stap ›"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
