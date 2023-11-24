import Image from "next/image";
// import Script from "next/script";

export default function ModalAgendamento({setOpen}) {
  return (
    <>
      <section className="bg-black bg-opacity-60 absolute top-0 z-10 w-full h-full flex justify-center items-center">
        <div className="flex flex-col items-center relative text-white bg-cor-primaria w-1/4 min-w-min border-2 border-[--verde-primario] rounded-3xl px-2 py-6 gap-4">
          <h2>Consulta com clinico geral</h2>
          <Image onClick={() =>setOpen(false)} className="absolute top-2 right-10 cursor-pointer" src="/img/Close.png" width={30} height={30} />
          <div className="flex justify-evenly text-2xl w-full">
            <div>
              <p className="text-[--verde-primario]">Data</p>
              <p>24/11</p>
            </div>
            <div>
              <p className="text-[--verde-primario]">Horário</p>
              <p>13:00</p>
            </div>
          </div>
          <div className="flex justify-evenly text-2xl w-full">
            <div>
              <p className="text-[--verde-primario]">Tipo</p>
              <p>Consulta</p>
            </div>
            <div>
              <p className="text-[--verde-primario]">Médico</p>
              <p>Dr.A</p>
            </div>
          </div>
          <div>
            <p className="text-[--verde-primario]">Hospital</p>
            <p>Hospital A</p>
          </div>
          <Image src="/img/Mapa.png" width={300} height={200} />
          {/* <gmp-map
          className="h-[300px] w-[200px]"
            center="-23.529451370239258,-46.90168380737305"
            zoom="14"
            map-id="DEMO_MAP_ID"
          >
            <gmp-advanced-marker
              position="-23.529451370239258,-46.90168380737305"
              title="My location"
            ></gmp-advanced-marker>
          </gmp-map> */}
          <div className="flex justify-end w-full gap-3 pr-2">
            <Image src="/img/Cancel.png" width={20} height={20}/>
            <span>Cancelar</span>
          </div>
        </div>
      </section>
      {/* <Script src="https://maps.googleapis.com/maps/api/js?key=APIKEY&callback=console.debug&libraries=maps,marker&v=beta" /> */}
    </>
  );
}
