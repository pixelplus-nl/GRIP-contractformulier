import { useState } from "react";
import NextButton from "./NextButton";
import React from "react";
import Footer from "./Footer";
import RulesWarning from "./RulesWarning";

export default function SlideOne(props: any) {
  const [fallZonesChecked, setFallZonesChecked] = useState(false);
  const [baseChecked, setBaseChecked] = useState(false);
  const [etiquetteChecked, setEtiquetteChecked] = useState(false);
  const [minorChecked, setMinorChecked] = useState(false);
  const [emergencyChecked, setEmergencyChecked] = useState(false);

  const handleCheckboxChange = (event: any, setCheckedState: any) => {
    setCheckedState(event.target.checked);
  };

  const isButtonDisabled =
    !fallZonesChecked ||
    !baseChecked ||
    !etiquetteChecked ||
    !minorChecked ||
    !emergencyChecked;

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 lg:gap-10 max-w-5xl mx-auto">
        <div className="md:w-5/12 md:max-w-[25rem]">
          <RulesWarning />
        </div>

        <form className="mt-10 px-5 md:px-0 md:w-7/12  md:mt-0 bg-white">
          <h1 className="text-5xl font-bold">Algemene voorwaarden</h1>

          <div className="my-5">
            <h2 className="text-4xl font-semibold">
              Basisveiligheid en omgangsvormen
            </h2>
            <ul className="list-disc px-5 mt-3">
              <li>
                Zorg voor je eigen veiligheid en veroorzaak geen onveilige
                situaties voor anderen.
              </li>
              <li>Draag geen sieraden.</li>
              <li>
                Verlaat de mat direct na elke klim. De mat markeert de valzone,
                zorg dat de valzone zoveel mogelijk vrij is.
              </li>
              <li>
                Boulder alleen op schone klimschoenen. Boulderen op ander
                schoeisel, blote voeten of sokken is niet toegestaan.
              </li>
              <li>Sporten met ontbloot bovenlichaam is niet toegestaan.</li>
              <li>
                Boulderen onder invloed van alcohol en/of drugs is niet
                toegestaan.
              </li>
              <li>
                Gebruik glaswerk of serviesgoed alleen in het café en op het
                terras.
              </li>
              <li>Hulphonden zijn welkom, overige huisdieren niet.</li>
              <li>
                Afsluitbare drinkflessen en bidons zijn toegestaan tijdens en
                voorafgaand aan het boulderen.
              </li>
              <li>
                Meegebrachte overige drank- en etenswaren mogen niet worden
                genuttigd.
              </li>
            </ul>

            <div className="mt-3 flex gap-2 items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, setBaseChecked)}
                id="baseCheck"
                name="baseCheck"
                type="checkbox"
              />
              <label htmlFor="baseCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-4xl font-semibold">Valzones</h2>
            <ul className="list-disc px-5 mt-3">
              <li>
                Klim niet onder iemand door. Klim niet boven iemand langs. Als
                één van beide valt, kunnen jullie allebei letsel oplopen. Hou
                tijdens het klimmen altijd minimaal 1,50m afstand tot anderen.
              </li>
              <li>
                Loop niet door het gebied waar iemand die momenteel klimt zou
                kunnen vallen. Wacht tot de andere klimmer weer beneden is. Wees
                je constant bewust van wat er boven je is terwijl je over de mat
                loopt.
              </li>
              <li>
                Als je iemand iets gevaarlijks ziet doen, attendeer diegene
                erop.
              </li>
            </ul>

            <div className="mt-3 flex gap-2 items-center">
              <input
                onChange={(e) => handleCheckboxChange(e, setFallZonesChecked)}
                id="fallZonesCheck"
                name="fallZonesCheck"
                type="checkbox"
              />
              <label htmlFor="fallZonesCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-4xl font-semibold">Boulder etiquette</h2>
            <ul className="list-disc px-5 mt-3">
              <li>
                Klim om de beurt op plekken waar ook anderen boulderen. Wie als
                eerste aan de boulder begint, heeft voorrang in de wand.
              </li>
              <li>Ben altijd hoffelijk tegenover andere klimmers.</li>
              <li>
                Oordeel niet te snel over anderen – ga uit van goede intenties.
              </li>
              <li>
                Respecteer elkaars grenzen. Vraag bijvoorbeeld toestemming
                voordat je beta verstrekt.
              </li>
              <li>
                GRIP is een speciale plek. Help mee dit zo te houden door
                nieuwkomers te verwelkomen en aan te moedigen.
              </li>
            </ul>

            <div className="mt-3 flex gap-2 items-center">
              <input
                id="etiquetteCheck"
                name="etiquetteCheck"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, setEtiquetteChecked)}
              />
              <label htmlFor="etiquetteCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-4xl font-semibold">
              Als je minderjarig bent of klimt met een minderjarige
            </h2>
            <ul className="list-disc px-5 mt-3">
              <li>
                Zelfstandig boulderen is toegestaan vanaf 12 jaar. Voor elke
                vorm van zelfstandig boulderen hanteert GRIP competentie- en
                toelatingseisen, waaronder het volgen van de instructie en
                ondertekening van deze overeenkomst.
              </li>
              <li>
                Kinderen van 11 jaar en jonger moeten worden begeleid door een
                volwassene. Per twee kinderen is één volwassene nodig.
              </li>
              <li>Niet rondrennen in de boulderhal.</li>
              <li>
                Apparatuur in de trainingsruimten is gevaarlijk bij onjuist
                gebruik. Gebruik het goed of gebruik het niet.
              </li>
              <li>
                Onder 18 jaar is toestemming voor gebruik van de trainingsruimte
                nodig van GRIP.
              </li>
            </ul>

            <div className="mt-3 flex gap-2 items-center">
              <input
                id="minorCheck"
                name="minorCheck"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, setMinorChecked)}
              />
              <label htmlFor="minorCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>
          </div>

          <hr className="my-10" />

          <div className="my-5">
            <h2 className="text-4xl font-semibold">Noodprocedure</h2>
            <ul className="list-disc px-5 mt-3">
              <li>
                Als u of iemand anders letsel oploopt, benader dan onmiddellijk
                een medewerker
              </li>
            </ul>

            <div className="mt-3 flex gap-2 items-center">
              <input
                id="emergencyCheck"
                name="emergencyCheck"
                type="checkbox"
                onChange={(e) => handleCheckboxChange(e, setEmergencyChecked)}
              />
              <label htmlFor="emergencyCheck" className="font-bold text-lg">
                Ik ga akkoord
              </label>
            </div>
          </div>

          <hr className="my-10" />
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
