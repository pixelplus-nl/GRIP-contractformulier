import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function RulesWarning() {
  return (
    <section className="relative md:w-[100%] h-fit overflow-hidden text-white px-5 pt-10 pb-20 w-full">
      <Image
        src="/warning.svg"
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
        op! dit is geen reservering.
      </p>
      <br />
      <div className="relative text-lg overflow-hidden w-fit">
        <Link
          className="relative hover:opacity-70 transition-all"
          href="https://gripnijmegen.dewi-online.nl/iframe/club/156/reservations/activities">
          <motion.span
            transition={{ duration: 1, delay: 2 }}
            initial="hidden"
            animate={{
              width: ["0%", "100%"],
            }}
            className="border-b-2 border-white  absolute bottom-0 inline-block"></motion.span>
          Reserveren kan via onze website.
        </Link>
      </div>
      <br />
      <p className="text-lg">Heb je een vraag? Neem contact op</p>
    </section>
  );
}
