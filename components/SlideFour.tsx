import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Warning from "./RulesWarning";
import Footer from "./Footer";
import SendInButton from "./SendInButton";
import { RxCross1 } from "react-icons/rx";

const variants = {
  open: {
    height: "auto",
  },
  closed: {
    height: "0",
  },
};

type SignatureCanvasInstance = any;

export default function SlideFour() {
  const [openModal, setOpenModal] = useState(false);
  const [sign, setSign] = useState<SignatureCanvasInstance | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleGenerate = (event: any) => {
    if (sign) {
      event.preventDefault();
      const dataUrl = sign.getTrimmedCanvas().toDataURL("image/png");

      setUrl(dataUrl);
    }
  };

  useEffect(() => {
    const validateForm = () => {
      if (url === "") {
        return false;
      }

      const inputs = document.querySelectorAll("input");
      let allFilled = true;
      inputs.forEach((input) => {
        if (input.name !== "middle-name" && input.name !== "participants") {
          if (!input.value) {
            allFilled = false;
          }
        }
      });

      return allFilled;
    };

    setIsButtonDisabled(!validateForm());
  }, [url]);

  const handleClear = (event: any) => {
    if (sign) {
      event.preventDefault();
      sign.clear();
    }
  };

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 max-w-6xl lg:justify-between lg:px-0 mx-auto lg:gap-10">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <Warning />
        </div>

        <form
          className="px-5 md:px-0 md:mt-0 max-w-3xl bg-white md:w-7/12"
          onSubmit={(event) => event.preventDefault()}>
          <h1 className="text-5xl font-bold">Persoonlijke gegevens</h1>
          <div className="mb-5">
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
              <div>
                <p className="text-xl text-black font-semibold">Naam</p>
                <div className="flex gap-1">
                  <div className="sm:w-full">
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
                  <div className="sm:w-full">
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
                        className="block px-3  w-20 sm:w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                      />
                    </div>
                  </div>
                  <div className="sm:w-full">
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
                  <div className="w-full">
                    <label
                      htmlFor="counrty"
                      className="block text-sm font-medium leading-6 text-gray-900"></label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="country"
                        id="country"
                        placeholder="Land"
                        autoComplete="country"
                        className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                      />
                    </div>
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
                    Voeg de namen toe van kinderen die u begeleidt.
                  </p>
                  <div className="mt-3 flex gap-2 items-center">
                    <label
                      className="bg-[#6AACB8] hover:bg-white hover:text-[#6AACBB] border-2 border-[#6AACBB] cursor-pointer transition-all w-fit px-2 py-1 text-white font-semibold"
                      htmlFor="participants">
                      Voeg toe
                    </label>
                    <input
                      id="participants"
                      className=""
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
                <div className="flex items-center justify-between">
                  <p>Handtekening voor akkoord</p>
                  <button
                    className="text-[#C10000] flex cursor-pointer items-center gap-1 px-3 py-2"
                    onClick={handleClear}>
                    <RxCross1 color="#C10000" />
                    Wissen
                  </button>
                </div>
                <div className="w-full rounded-xl h-72 border-2 border-gray-200">
                  <SignatureCanvas
                    canvasProps={{
                      className: "w-full h-full",
                    }}
                    ref={(data) => setSign(data)}
                    onEnd={handleGenerate}
                  />
                </div>
                <div className="flex mt-3 justify-between">
                  {/* <button
                    className="bg-[#8CBE44] text-white px-3 py-2"
                    onClick={handleGenerate}>
                    Uploaden
                  </button> */}
                </div>

                {/* {url && <img src={url} />} */}
              </div>
            </div>
          </div>
          <SendInButton
            handleNext={handleGenerate}
            buttonText="Definitief insturen ›"
            isButtonDisabled={isButtonDisabled}
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
