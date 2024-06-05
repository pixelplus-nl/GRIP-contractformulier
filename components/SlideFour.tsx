import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Warning from "./RulesWarning";
import Footer from "./Footer";
import SendInButton from "./SendInButton";
import { RxCross1 } from "react-icons/rx";
import submitForm from "@/lib/submitForm";
import { useLocale, useMessages, useTranslations } from "next-intl";

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
  const [sign, setSign] = useState<SignatureCanvasInstance | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const errorModal = useTranslations("errorModal");
  const errorMessages = useTranslations("errorMessages");

  const locale = useLocale();

  const handleGenerate = (event: any) => {
    if (sign) {
      event.preventDefault();
      const dataUrl = sign.getTrimmedCanvas().toDataURL("image/png");

      setUrl(dataUrl);
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const formData: any = new FormData(event.target);

    // Send the locale to the API
    formData.set("locale", locale);

    // Convert the participants file to base64
    const participants = formData.get("participants");

    if (participants && participants.size > 0) {
      const reader = new FileReader();

      const base64 = await new Promise((resolve, reject) => {
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(participants);
      });

      formData.set("participants", base64);
    } else {
      formData.delete("participants");
    }

    // Convert the signature to base64
    const signature = sign.getTrimmedCanvas().toDataURL("image/png");
    formData.set("signature", signature);

    const response = await submitForm(formData);

    if (!response.success) {
      try {
        props.setErrorModal({
          title: errorModal("titleError"),
          body: errorMessages(response.code),
        });
        // Fall back to the default error message
      } catch (e: any) {
        props.setErrorModal({
          title: errorModal("titleError"),
          body: errorMessages("__default"),
        });
      }
    } else {
      props.setSuccesModal({
        title: errorModal("titleSuccess"),
        body: errorModal("bodySuccess"),
      });
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

  const t = useTranslations("SlideFour");

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 max-w-6xl lg:justify-between xl:px-0 mx-auto lg:gap-10">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <Warning />
        </div>

        <form
          className="px-5 h-full overflow-scroll md:px-0 md:mt-0 max-w-3xl bg-white md:w-7/12"
          onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <div className="mb-5">
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8">
              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("name")}
                </h3>
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
                        placeholder={t("firstName")}
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
                        placeholder={t("middleName")}
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
                        placeholder={t("lastName")}
                        autoComplete="family-name"
                        className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("dateOfBirth")}
                </h3>
                <label htmlFor="date-of-birth"></label>
                <div className="mt-2">
                  <input
                    id="date-of-birth"
                    name="date-of-birth"
                    type="text"
                    placeholder={t("dateOfBirthPlaceHolder")}
                    autoComplete="date-of-birth"
                    className="block px-3 w-full outline-none border-0 py-1.5 text-gray-900 ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    onKeyDown={(e) => {
                      const validKeys = [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "/",
                        "-",
                        "Backspace",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ];
                      if (!validKeys.includes(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onInput={(e) => {
                      const input = e.target as HTMLInputElement;
                      const value = input.value;
                      const validValue = value.replace(/[^0-9\/-]/g, "");
                      if (value !== validValue) {
                        input.value = validValue;
                      }
                    }}
                  />
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("address")}
                </h3>
                <div className="flex gap-1">
                  <div className="w-[67%]">
                    <label
                      htmlFor="street-address"
                      className="block text-sm font-medium leading-6 text-gray-900"></label>
                    <div className="mt-2">
                      <input
                        type="text"
                        name="street-address"
                        placeholder={t("street")}
                        id="street-address"
                        autoComplete="street-address"
                        className="block px-3 w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
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
                        placeholder={t("houseNumber")}
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
                        placeholder={t("zipCode")}
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
                        placeholder={t("residence")}
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
                        placeholder={t("country")}
                        autoComplete="country"
                        className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("contact")}
                </h3>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="email"
                      placeholder={t("email")}
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
                      placeholder={t("phoneNumber")}
                      id="tel"
                      autoComplete="tel"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("subTitleSecond")}
                </h3>
                <fieldset className="mt-2 flex gap-5">
                  <div>
                    <div className="flex gap-2 hover:opacity-50 w-fit items-center">
                      <input
                        type="radio"
                        name="accompanist"
                        id="yes"
                        className="cursor-pointer"
                        onClick={() => props.setOpenList(true)}
                      />
                      <label
                        htmlFor="yes"
                        className="block text-lg cursor-pointer font-medium leading-6 text-gray-900">
                        {t("yes")}
                      </label>
                    </div>
                  </div>

                  <div className="flex gap-2 hover:opacity-50 w-fit items-center">
                    <input
                      type="radio"
                      name="accompanist"
                      id="no"
                      className="cursor-pointer"
                      onClick={() => props.setOpenList(false)}
                    />
                    <label
                      htmlFor="no"
                      className="block text-lg cursor-pointer font-medium leading-6 text-gray-900">
                      {t("no")}
                    </label>
                  </div>
                </fieldset>

                {props.openList && (
                  <div>
                    <p className="pt-5">{t("kidsList")}</p>
                    <div className="mt-3 flex gap-2 items-center">
                      <label
                        className="bg-[#6AACB8] hover:bg-white hover:text-[#6AACBB] border-2 border-[#6AACBB] cursor-pointer transition-all w-fit px-2 py-1 text-white font-semibold"
                        htmlFor="participants">
                        {t("listButton")}
                      </label>
                      <input
                        id="participants"
                        className=""
                        name="participants"
                        type="file"
                        accept="application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("subTitleThird")}
                </h3>
                <div>
                  <label
                    htmlFor="emergency-name"
                    className="block text-sm font-medium leading-6 text-gray-900"></label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="emergency-name"
                      placeholder={t("first&lastName")}
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
                      placeholder={t("phoneNumber")}
                      id="emergency-tel"
                      autoComplete="tel"
                      className="block px-3  w-full outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                  </div>
                </div>
              </div>

              <hr />

              <div>
                <div className="flex items-start justify-between">
                  <div className="mb-3">
                    <h3 className="text-xl text-black font-semibold">
                      {t("signatureAgreement")}
                    </h3>
                    <p>{t("signatureExplanation")}</p>
                  </div>
                  <button
                    className="text-[#C10000] flex cursor-pointer items-center gap-1 px-3 py-2"
                    onClick={handleClear}>
                    <RxCross1 color="#C10000" />
                    {t("erase")}
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
            buttonText={`${t("nextButton")} ›`}
            isButtonDisabled={isButtonDisabled}
          />
        </form>
      </div>
    </>
  );
}
