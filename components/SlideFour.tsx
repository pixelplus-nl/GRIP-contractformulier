import { useEffect, useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import Warning from "./RulesWarning";
import SendInButton from "./SendInButton";
import { RxCross1 } from "react-icons/rx";
import submitForm from "@/lib/submitForm";
import { useLocale, useTranslations } from "next-intl";
import "dayjs/locale/nl-be";
import { MdOutlineDelete } from "react-icons/md";
import PrevButton, { PrevButtonMob } from "./PrevButton";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

import countries from "@/lib/countries";

type SignatureCanvasInstance = any;

export default function SlideFour(props: any) {
  const [sign, setSign] = useState<SignatureCanvasInstance | null>(null);
  const [url, setUrl] = useState<string>("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [allFilled, setAllfilled] = useState(false);

  const [emailNotValid, setEmailNotValid] = useState(false);
  const [phoneNotValid, setPhoneNotValid] = useState(false);

  const [firstNameNotValid, setFirstNameNotValid] = useState(false);
  const [lastNameNotValid, setLastNameNotValid] = useState(false);
  const [dayNotValid, setDayNotValid] = useState(false);
  const [monthNotValid, setMonthNotValid] = useState(false);
  const [yearNotValid, setYearNotValid] = useState(false);
  const [streetNotValid, setStreetNotValid] = useState(false);
  const [houseNumberNotValid, setHouseNumberNotValid] = useState(false);
  const [zipcodeNotValid, setZipcodeNotValid] = useState(false);
  const [cityNotValid, setCityNotValid] = useState(false);
  const [emergencyNameNotValid, setEmergencyNameNotValid] = useState(false);
  const [emergencyPhoneNotValid, setEmergencyPhoneNotValid] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      props.setFileName(file.name);
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

    // Combine 'day', 'month' and 'year' into one field called 'date-of-birth'
    const day = formData.get("day");
    const month = formData.get("month");
    const year = formData.get("year");

    formData.set("date-of-birth", `${day}/${month}/${year}`);

    // Unset day, month and year for a more sane request body
    formData.delete("day");
    formData.delete("month");
    formData.delete("year");

    const response = await submitForm(formData);

    if (!response.success) {
      props.setErrorModal({
        title: errorModal("titleError"),
        body: errorMessages(response.code),
      });
    } else {
      localStorage.setItem("email", formData.get("email"));

      window.location.href = `/${locale}/success`;
    }
  };

  useEffect(() => {
    const checkFields = () => {
      const requiredFields = document.querySelectorAll("input");
      let allFilledTemp = true;

      requiredFields.forEach((input) => {
        if (input.name !== "middle-name" && input.name !== "participants") {
          if (!input.value) {
            allFilledTemp = false;
          }
        }
      });

      setAllfilled(allFilledTemp);
    };

    checkFields();
    const intervalId = setInterval(checkFields, 100);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const forgotFileUpload = props.openList === true && props.fileName === "";

    if (url && allFilled) {
      if (forgotFileUpload) {
        setIsButtonDisabled(true);
      } else {
        setIsButtonDisabled(false);
      }
    } else {
      setIsButtonDisabled(true);
    }
  }, [url, allFilled, props.openList, props.fileName]);

  const handleClear = (event: any) => {
    if (sign) {
      event.preventDefault();
      sign.clear();
    }
    setUrl("");
  };

  const handleDeleteFile = () => {
    props.setFileName("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const t = useTranslations("SlideFour");

  const validateEmail = (email: string) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    if (!regex.test(email)) {
      setEmailNotValid(true);
    } else {
      setEmailNotValid(false);
    }
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const pattern =
      /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (!pattern.test(phoneNumber)) {
      setPhoneNotValid(true);
    } else {
      setPhoneNotValid(false);
    }
  };

  const handleKeyPress = (event: any) => {
    const keyCode = event.keyCode || event.which;

    if (
      !(
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 96 && keyCode <= 105)
      ) &&
      keyCode !== 8 &&
      keyCode !== 9 &&
      keyCode !== 13 &&
      keyCode !== 46 &&
      keyCode !== 37 &&
      keyCode !== 39 
    ) {
      event.preventDefault();
    }
  };

  const date = new Date();

  return (
    <>
      <div className="md:flex mb-12 md:w-full md:px-5 gap-5 max-w-6xl lg:justify-between xl:px-0 mx-auto lg:gap-10">
        <div className="hidden md:block md:w-5/12 md:max-w-[25rem]">
          <Warning />
        </div>

        <form
          className="px-5 h-full  md:px-0 md:mt-0 max-w-3xl bg-white md:w-7/12"
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
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder=" "
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setFirstNameNotValid(true)
                            : setFirstNameNotValid(false);
                        }}
                        autoComplete="given-name"
                        className={`bg-transparent ${
                          firstNameNotValid ? "ring-red-500" : ""
                        } rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                      />
                      <label
                        htmlFor="first-name"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("firstName")}
                      </label>
                    </div>
                  </div>
                  <div className="sm:w-full mt-2 relative">
                    <input
                      type="text"
                      name="middle-name"
                      id="middle-name"
                      placeholder=" "
                      autoComplete="additional-name"
                      className="bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]"
                    />
                    <label
                      htmlFor="middle-name"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("middleName")}
                    </label>
                  </div>
                  <div className="sm:w-full">
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setLastNameNotValid(true)
                            : setLastNameNotValid(false);
                        }}
                        placeholder=" "
                        autoComplete="family-name"
                        className={`${
                          lastNameNotValid ? "ring-red-500" : ""
                        } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                      />
                      <label
                        htmlFor="last-name"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("lastName")}
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("dateOfBirth")}
                </h3>
                <div className="flex  gap-1">
                  <div className="mt-2 w-1/3 relative">
                    <input
                      type="number"
                      name="day"
                      maxLength={2}
                      onBlur={(e) => {
                        const inputValue = parseInt(e.target.value, 10);
                        if (inputValue > 31) {
                          e.target.value = "31";
                        }

                        e.target.value.trim() === ""
                          ? setDayNotValid(true)
                          : setDayNotValid(false);
                      }}
                      placeholder=" "
                      id="number"
                      onKeyDown={handleKeyPress}
                      autoComplete="day"
                      className={`${
                        dayNotValid ? "ring-red-500" : ""
                      } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                    />
                    <label
                      htmlFor="day"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("day")}
                    </label>
                  </div>
                  <div className="mt-2 w-1/3 relative">
                    <input
                      type="number"
                      name="month"
                      maxLength={2}
                      placeholder=" "
                      max={12}
                      onKeyDown={handleKeyPress}
                      id="month"
                      onBlur={(e) => {
                        const inputValue = parseInt(e.target.value, 10);
                        if (inputValue > 12) {
                          e.target.value = "12";
                        }

                        e.target.value.trim() === ""
                          ? setMonthNotValid(true)
                          : setMonthNotValid(false);
                      }}
                      autoComplete="month"
                      className={`${
                        monthNotValid ? "ring-red-500" : ""
                      } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]  `}
                    />
                    <label
                      htmlFor="month"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("month")}
                    </label>
                  </div>
                  <div className="mt-2 w-1/3 relative">
                    <input
                      type="number"
                      name="year"
                      maxLength={4}
                      max={date.getFullYear()}
                      onKeyDown={handleKeyPress}
                      placeholder=" "
                      id="year"
                      onBlur={(e) => {
                        const inputValue = parseInt(e.target.value, 10);
                        console.log(inputValue);
                        if (inputValue > date.getFullYear()) {
                          e.target.value = date.getFullYear().toString();
                        }

                        e.target.value.trim() === ""
                          ? setYearNotValid(true)
                          : setYearNotValid(false);
                      }}
                      autoComplete="year"
                      className={`${
                        yearNotValid ? "ring-red-500" : ""
                      } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44] `}
                    />
                    <label
                      htmlFor="year"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("year")}
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("address")}
                </h3>
                <div className="flex gap-1">
                  <div className="w-[67%]">
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="street-address"
                        placeholder=" "
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setStreetNotValid(true)
                            : setStreetNotValid(false);
                        }}
                        id="street-address"
                        autoComplete="street-address"
                        className={`${
                          streetNotValid ? "ring-red-500" : ""
                        } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                      />
                      <label
                        htmlFor="street-address"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("street")}
                      </label>
                    </div>
                  </div>
                  <div className="w-1/3">
                    <div className="mt-2 relative">
                      <input
                        type="text"
                        name="house-number"
                        id="house-number"
                        placeholder=" "
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setHouseNumberNotValid(true)
                            : setHouseNumberNotValid(false);
                        }}
                        autoComplete="house-number"
                        className={`${
                          houseNumberNotValid ? "ring-red-500" : ""
                        } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                      />
                      <label
                        htmlFor="house-number"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("houseNumber")}
                      </label>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  <div className="w-full">
                    <div className="mt-4 relative">
                      <input
                        type="text"
                        name="postal-code"
                        placeholder=" "
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setZipcodeNotValid(true)
                            : setZipcodeNotValid(false);
                        }}
                        id="postal-code"
                        autoComplete="postal-code"
                        className={`${
                          zipcodeNotValid ? "ring-red-500" : ""
                        } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44] `}
                      />
                      <label
                        htmlFor="postal-code"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("zipCode")}
                      </label>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="mt-4 relative">
                      <input
                        type="text"
                        name="city"
                        onBlur={(e) => {
                          e.target.value.trim() === ""
                            ? setCityNotValid(true)
                            : setCityNotValid(false);
                        }}
                        id="city"
                        placeholder=" "
                        autoComplete="address-level2"
                        className={`${
                          cityNotValid ? "ring-red-500" : ""
                        } bg-transparent rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                      />
                      <label
                        htmlFor="city"
                        className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {t("residence")}
                      </label>
                    </div>
                  </div>
                  <div className="w-full hidden md:block">
                    <div className="mt-4 relative flex cursor-pointer items-center  px-3 group  outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]">
                      <select
                        name="country"
                        id="country"
                        className="w-full bg-transparent rounded-none z-20 relative outline-none cursor-pointer">
                        {Object.keys(countries).map((code: any) => (
                          <option key={code} value={code}>
                            {countries[code][locale]}
                          </option>
                        ))}
                      </select>
                      <label htmlFor="counrty">
                        <MdOutlineKeyboardArrowDown
                          size="1.5rem"
                          color="#000"
                          className=" absolute top-1.5 right-3 rotate-180 transition-all group-hover:rotate-0"
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="w-full md:hidden">
                  <div className="mt-4 relative flex cursor-pointer items-center  px-3 group  outline-none border-0 py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]">
                    <select
                      name="country"
                      id="country"
                      className="w-full bg-transparent rounded-none z-20 relative outline-none cursor-pointer">
                      {Object.keys(countries).map((code: any) => (
                        <option key={code} value={code}>
                          {countries[code][locale]}
                        </option>
                      ))}
                    </select>
                    <label htmlFor="counrty">
                      <MdOutlineKeyboardArrowDown
                        size="1.5rem"
                        color="#000"
                        className=" absolute top-1.5 right-3 rotate-180 transition-all group-hover:rotate-0"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("contact")}
                </h3>
                <div>
                  <div className="mt-2 relative">
                    <input
                      type="email"
                      name="email"
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      placeholder=" "
                      id="email"
                      autoComplete="email"
                      onBlur={(e) => validateEmail(e.target.value)}
                      className={`bg-transparent border-1 rounded-none border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44] ${
                        emailNotValid ? "!ring-[#c10000] ring-2" : ""
                      }`}
                    />
                    <label
                      htmlFor="email"
                      className="absolute text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("email")}
                    </label>
                  </div>
                  {emailNotValid && (
                    <p className="text-[#c10000]">{t("emailNotValid")}</p>
                  )}
                </div>
                <div>
                  <div className="mt-4 relative">
                    <input
                      type="tel"
                      name="tel"
                      placeholder=" "
                      onBlur={(e) => validatePhoneNumber(e.target.value)}
                      id="tel"
                      autoComplete="tel"
                      pattern="^\d[\d()-+. ]+$"
                      className={`bg-transparent  rounded-none border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]] ${
                        phoneNotValid ? "ring-2 !ring-[#c10000]" : ""
                      }`}
                    />
                    <label
                      htmlFor="tel"
                      className="absolute text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("phoneNumber")}
                    </label>
                  </div>
                  {phoneNotValid && (
                    <p className="text-[#c10000]">{t("phoneNotValid")}</p>
                  )}
                </div>
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("subTitleSecond")}
                </h3>
                <fieldset className="mt-2 flex gap-5">
                  <div>
                    <div className="flex gap-2 betterhover:hover:opacity-50 w-fit items-center">
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

                  <div className="flex gap-2 betterhover:hover:opacity-50 w-fit items-center">
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
                    <div className="mt-3 flex gap-2 flex-col justify-center">
                      <label
                        className="bg-[#6AACB8] hover:bg-white hover:text-[#6AACBB] border-2 border-[#6AACBB] cursor-pointer transition-all w-fit px-2 py-1 text-white font-semibold"
                        htmlFor="participants">
                        {t("listButton")}
                      </label>
                      <input
                        ref={fileInputRef}
                        id="participants"
                        className="hidden"
                        name="participants"
                        onChange={handleFileChange}
                        type="file"
                        accept="image/jpeg,image/png,application/pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,text/csv,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                      />
                      {props.fileName && (
                        <p className="flex items-center gap-2">
                          {props.fileName}
                          <MdOutlineDelete
                            className="betterhover:hover:opacity-50 w-14 lg:w-6 h-full transition-all"
                            color="#c10000"
                            size="1.3rem"
                            onClick={handleDeleteFile}
                          />
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-xl text-black font-semibold">
                  {t("subTitleThird")}
                </h3>
                <div>
                  <div className="mt-2 relative">
                    <input
                      type="text"
                      name="emergency-name"
                      placeholder=" "
                      onBlur={(e) => {
                        e.target.value.trim() === ""
                          ? setEmergencyNameNotValid(true)
                          : setEmergencyNameNotValid(false);
                      }}
                      id="emergency-name"
                      autoComplete="name"
                      className={`${
                        emergencyNameNotValid ? "ring-red-500" : ""
                      } bg-transparent border-1 border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                    />
                    <label
                      htmlFor="emergency-name"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("first&lastName")}
                    </label>
                  </div>
                </div>
                <div>
                  <div className="mt-4 relative">
                    <input
                      type="text"
                      name="emergency-tel"
                      placeholder=" "
                      onBlur={(e) => {
                        e.target.value.trim() === ""
                          ? setEmergencyPhoneNotValid(true)
                          : setEmergencyPhoneNotValid(false);
                      }}
                      id="emergency-tel"
                      autoComplete="tel"
                      className={`bg-transparent border-1 ${
                        emergencyPhoneNotValid ? "ring-red-500" : ""
                      } border-gray-200 appearance-none focus:outline-none   peer block px-3  w-full outline-none  py-1.5 text-gray-900  ring-2 ring-inset ring-gray-200 placeholder:text-gray-400 focus:ring-[#8CBE44]`}
                    />
                    <label
                      htmlFor="emergency-tel"
                      className="absolute  text-gray-400  duration-300 transform -translate-y-4 scale-75 top-[2px] z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-gray-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-[2px] peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                      {t("phoneNumber")}
                    </label>
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
                <div className="flex mt-3 justify-between"></div>

                {/* {url && <img src={url} />} */}
              </div>
            </div>
          </div>
          <div className="flex">
            <PrevButtonMob
              handlePrev={props.handlePrev}
              buttonText={`‹ ${t("prevButton")}`}
            />
            <PrevButton
              handlePrev={props.handlePrev}
              buttonText={`‹ ${t("prevButton")}`}
            />
            <SendInButton
              handleNext={handleGenerate}
              buttonText={`${t("nextButton")} ›`}
              isButtonDisabled={isButtonDisabled}
            />
          </div>
        </form>
      </div>
    </>
  );
}
