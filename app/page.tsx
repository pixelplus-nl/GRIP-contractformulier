import Button from "@/components/Button";
import ScrollToLink from "@/components/ScrollToLink";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="relative flex justify-center items-end h-[35rem] md:h-screen">
        <div className=" absolute right-0 w-full h-full">
          <Image
            src="/impression_img01.png"
            fill
            placeholder="blur"
            blurDataURL="data:..."
            priority
            sizes="100vw"
            style={{
              objectFit: "cover",
              zIndex: -1,
              objectPosition: "right",
            }}
            alt={""}
          />
        </div>
        <ScrollToLink />
        <div className="w-full absolute bottom-0 right-0 h-full bg-gradient-to-r md:from-[#8CBE44] md:via-[#8CBE44] md:to-[#8CBE44]/40 from-[#8CBE44]  via-[#8CBE44]/90 to-[#8CBE44]/60"></div>

        <div className="relative max-w-xs md:max-w-xl flex mb-32 md:mb-60 flex-col items-center gap-10">
          <h1 className="text-white text-4xl md:text-6xl text-center">
            <b>Kom je boulderen? Leuk!</b> Alleen nog even registeren.
          </h1>
          <div className="w-48">
            <Button
              specs="group-hover:fill-[#8CBE44] stroke-[#fff] fill-[#fff]"
              textColor="group-hover:fill-white"
            />
          </div>
        </div>
      </div>

      <div id="content" className="px-5 md:px-10 py-10 md:py-20 lg:py-32">
        <div className="max-w-6xl mx-auto md:flex gap-10">
          <div className="relative w-full rounded-3xl overflow-hidden  hidden md:block">
            <Image
              src="/impression_img02.png"
              fill
              placeholder="blur"
              blurDataURL="data:..."
              priority
              sizes="100vw"
              style={{
                objectFit: "cover",
                zIndex: -1,
              }}
              alt={""}
            />
          </div>
          <div>
            <h2 className="text-4xl">Waarom moet ik me registreren?</h2>
            <p className="mt-3">
              Lorem ipsum dolor sit amet, GRIP consectetur adipiscing elit.
              Integer tempus, nibh sed sodales sagittis, arcu ipsum ultrices
              lorem, vel sagittis lorem magna ac lectus.
              <br /> <br /> Ben je eerder komen boulderen bij Grip? Dan hoef je
              je niet opnieuw te registeren.
            </p>
            <ul className="list-disc px-5 mt-3">
              <li>Sed ut maximus ante egestas aliquet aliquam nunc</li>
              <li>Nulla at ornare nibh aenean sit amet laoreet</li>
              <li>Aliquet vestibulum venenatis tincidunt turpis, fermentum</li>
            </ul>

            <div className="w-48 my-5">
              <Button
                specs="group-hover:fill-[#8CBE44] stroke-[#8CBE44] fill-[#fff]"
                textColor="group-hover:fill-white"
              />
            </div>

            <p>
              Heb je een vraag of lukt het niet om te registeren?
              <br />
              <Link href="#">Neem contact op ›</Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
