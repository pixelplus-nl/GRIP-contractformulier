import Image from "next/image";
import NextButton from "./NextButton";

export default function SlideTwo(props: any) {
  return (
    <>
      <div className="relative text-white px-5 pt-10 pb-20 w-full">
        <Image
          src="warningFlipped.svg"
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

      <form className="my-10 px-5 relative bg-white">
        <h1 className="text-5xl font-bold">Vitaliteit </h1>
        <ul className="list-disc px-5 mt-3">
          <li>
            Ik verklaar hierbij dat ik, of het minderjarige bezoekende kind voor
            wie ik deze overeenkomst onderteken, in goede gezondheid verkeer en
            geen mentale of fysieke handicap, beperking, verwonding, ziekte of
            kwaal heb waardoor ik niet deel kan nemen aan
            Boulderhalactiviteiten. Ik begrijp dat als mijn, of dat van het
            minderjarige bezoekende kind, mentale of fysieke toestand verandert
            zodanig dat ik, of het minderjarige bezoekende kind, niet meer in
            staat is deel te nemen aan activiteiten, ik of het minderjarige
            Bezoekende Kind, verplicht ben te stoppen met de activiteiten.
          </li>
          <li>Aanwijzingen van GRIP medewerkers volg ik te allen tijde op.</li>
          <li>
            GRIP is niet aansprakelijk wanneer ik of het minderjarige kind niet
            beschikt over een toereikende conditie of gezondheid of wanneer ik
            of het minderjarige kind niet de aanwijzingen van GRIP medewerkers
            opvolg.
          </li>
        </ul>

        <div className="mt-3 flex gap-2 items-center">
          <input id="baseCheck" name="baseCheck" type="checkbox" />
          <label htmlFor="baseCheck" className="font-bold text-lg">
            Ik ga akkoord
          </label>
        </div>
      </form>

      <NextButton
        handleNext={props.handleNext}
      
      />
    </>
  );
}
