import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F5F5F5] px-5 md:px-10 py-20 ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <Image
          src="/gripLogo.svg"
          width={500}
          height={500}
          alt="logo grip"
          title="logo grip"
          className=" w-36 lg:w-52"
        />
        <div>
          <ul className="flex gap-5 mt-10 md:mt-0">
            <li>
              <Link href="www.gripnijmegen.nl" className="text-[#6AACB8]">
                www.gripnijmegen.nl ›
              </Link>
            </li>
            <span>|</span>
            <li>
              <Link href="#">Locatie ›</Link>
            </li>
            <span>|</span>
            <li>
              <Link href="#">Contact ›</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
