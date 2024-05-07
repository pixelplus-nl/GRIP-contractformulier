import Image from "next/image";

import { motion } from "framer-motion";
import { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import NextButton from "./NextButton";

const variants = {
  open: {
    height: "auto",
  },
  closed: {
    height: "0",
  },
};

type SignatureCanvasInstance = any;

export default function SlideFour(props: any) {
  const [openModal, setOpenModal] = useState(false);
  const [sign, setSign] = useState<SignatureCanvasInstance | null>(null);
  const [url, setUrl] = useState<string>("");

  const handleClear = (event: any) => {
    if (sign) {
      event.preventDefault();
      sign.clear();
    }
  };

  const handleGenerate = (event: any) => {
    if (sign) {
      event.preventDefault();
      setUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    }
  };

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

      <form className="mt-10 px-5 md bg-white">
        <h1 className="text-5xl font-bold">Persoonlijke gegevens</h1>
        <div className=" pb-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div>
              <p className="text-xl text-black font-semibold">Naam</p>
              <div className="flex gap-1">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      placeholder="Voornaam"
                      autoComplete="given-name"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="middle-name"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="middle-name"
                      id="middle-name"
                      placeholder="Tussenv."
                      autoComplete="middle-name"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      placeholder="Achternaam"
                      autoComplete="family-name"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="date-of-birth"
                className="text-xl text-black font-semibold">
                Geboortedatum
              </label>
              <div className="mt-2">
                <input
                  id="date-of-birth"
                  name="date-of-birth"
                  type="date-of-birth"
                  placeholder="dd-mm-jjjj"
                  autoComplete="date-of-birth"
                  className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                />
              </div>
            </div>

            <div>
              <p className="text-xl text-black font-semibold">Adres</p>
              <div className="flex gap-1">
                <div className="w-full">
                  <label
                    htmlFor="street-address"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="street-address"
                      placeholder="Straat"
                      id="street-address"
                      autoComplete="street-address"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
                <div className="w-1/3">
                  <label
                    htmlFor="house-number"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="house-number"
                      id="house-number"
                      placeholder="Huisnr."
                      autoComplete="house-number"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-1">
              <div className="w-full">
                <label
                  htmlFor="postal-code"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="postal-code"
                    placeholder="Postcode"
                    id="postal-code"
                    autoComplete="postal-code"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
              <div className="w-full">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="Woonplaats"
                    autoComplete="address-level2"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xl text-black font-semibold">
                Contactgegevens
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="email"
                    placeholder="voorbeeld@email.nl"
                    id="email"
                    autoComplete="email"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="tel"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="tel"
                    placeholder="+31 0 00 00 00 00"
                    id="tel"
                    autoComplete="tel"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
            </div>

            <div>
              <p className="text-xl text-black font-semibold">
                Bent u begeleider van een groep leerlingen of studenten?
              </p>
              <fieldset className="mt-2 flex gap-5">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="accompanist"
                    placeholder="voorbeeld@email.nl"
                    id="no"
                    className=""
                    onClick={() => setOpenModal(false)}
                  />
                  <label
                    htmlFor="no"
                    className="block text-lg font-medium leading-6 text-gray-900">
                    Nee
                  </label>
                </div>

                <div>
                  <div className="flex gap-2 items-center">
                    <input
                      type="radio"
                      name="accompanist"
                      placeholder="+31 0 00 00 00 00"
                      id="yes"
                      onClick={() => setOpenModal(true)}
                    />
                    <label
                      htmlFor="yes"
                      className="block text-lg font-medium leading-6 text-gray-900">
                      Ja
                    </label>
                  </div>
                </div>
              </fieldset>

              <motion.div
                initial={"closed"}
                variants={variants}
                animate={openModal ? "open" : "closed"}
                transition={{ duration: 1 }}
                className="overflow-hidden">
                <p className="pt-5">
                  Graag ontvangen wij een lijst van de namen van de deelnemers
                  in een excelbestand
                </p>
                <div className="mt-3">
                  <label htmlFor="participants">Selecteer bestand:</label>
                  <input
                    id="participants"
                    className="mt-2"
                    name="participants"
                    type="file"
                    accept="application/pdf,application/vnd.ms-excel"
                  />
                </div>
              </motion.div>
            </div>

            <div>
              <p className="text-xl text-black font-semibold">
                In geval van nood contact opnemen met
              </p>
              <div>
                <label
                  htmlFor="emergency-name"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="emergency-name"
                    placeholder="Voor- en achternaam"
                    id="emergency-name"
                    autoComplete="name"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="emergency-tel"
                  className="block text-sm font-medium leading-6 text-gray-900"></label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="emergency-tel"
                    placeholder="+31 0 00 00 00 00"
                    id="emergency-tel"
                    autoComplete="tel"
                    className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                  />
                </div>
              </div>
            </div>

            <hr />

            <div>
              <p>Handtekening voor akkoord</p>
              <div className="w-full h-72 border-2 border-gray-200">
                <SignatureCanvas
                  canvasProps={{
                    className: "w-full h-full",
                  }}
                  ref={(data) => setSign(data)}
                />
              </div>
              <div className="flex mt-3 justify-between">
                <button
                  className="bg-[#C10000] text-white px-3 py-2"
                  onClick={handleClear}>
                  Wissen
                </button>
                <button
                  className="bg-[#8CBE44] text-white px-3 py-2"
                  onClick={handleGenerate}>
                  Uploaden
                </button>
              </div>

              {/* {url && <img src={url} />} */}
            </div>
          </div>
        </div>
      </form>

      <NextButton handleNext={props.handleNext} />
    </>
  );
}
