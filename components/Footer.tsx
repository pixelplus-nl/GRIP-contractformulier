import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] px-5 md:px-10 py-20 ">
      <div className="max-w-6xl mx-auto justify-center flex flex-col md:flex-row  items-center">
        <Image
          src="/gripLogo.svg"
          width={500}
          height={500}
          alt="logo grip"
          title="logo grip"
          className=" w-36 lg:w-52"
        />
      </div>
    </footer>
  );
}
