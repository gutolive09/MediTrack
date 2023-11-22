import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative h-screen">
        <h1 className="text-6xl text-white m-32 w-1/2">
          Nunca foi tão <span className="text-[#1EF409]">facil</span> acompanhar sua rotina médica
        </h1>
        <Image
          className="w-full overflow-hidden absolute bottom-0"
          src="/img/layered-waves-haikei.svg"
          width={1440}
          height={300}
        />
      </section>
    </>
  );
}
