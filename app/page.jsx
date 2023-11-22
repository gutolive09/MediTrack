import Header from "@/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <section className="relative h-screen">
        <h1 className="text-6xl text-white m-32 w-1/2">
          Nunca foi tão <span className="text-[#1EF409]">facil</span> acompanhar
          sua rotina médica
        </h1>
        <Image
          className="w-full overflow-hidden absolute bottom-0"
          src="/img/layered-waves-haikei.svg"
          width={1440}
          height={300}
        />
      </section>
      <section className="text-white text-center">
        <h2>
          Conheça o <span>MediTracker</span>
        </h2>
        <h3>O App que pensa nas suas consultas por você</h3>
        <div>
          <div className="flex justify-around">
            <div>
              <h4>Gestão de consultas</h4>
              <p>
                Lembra pacientes e médicos de maneira integrada sobre consultas
                futuras, garantindo interações de saúde pontuais.
              </p>
            </div>
            <Image src="/img/desc1.jpg" width={500} height={350} />
          </div>
          <div className="flex justify-around">
            <Image src="/img/desc2.jpg" width={500} height={350} />
            <div>
              <h4>Lembretes detalhados</h4>
              <p>
                Oferece informações detalhadas sobre consultas, incluindo data,
                horário, médico e endereço do hospital, com um link conveniente
                para o Google Maps.
              </p>
            </div>
          </div>
          <div className="flex justify-around">
            <div>
              <h4>Triagem de Sintomas</h4>
              <p>
                Possibilita pacientes a avaliarem seus sintomas com través do
                uso de inteligência artificial e os direciona para o hospital
                mais próximo para atendimento médico rápido.
              </p>
            </div>
            <Image src="/img/desc3.jpg" width={500} height={350} />
          </div>
        </div>
      </section>
    </>
  );
}
