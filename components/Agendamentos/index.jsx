"use client"
import { useState } from "react";
import ModalAgendamento from "../ModalAgendamento";

export default function Agendamentos() {

    const [open, setOpen] = useState(false)

  return (
    <>
    {open ? <ModalAgendamento setOpen={setOpen}/>:""}
    
    <section className="px-8 py-4 flex justify-evenly flex-wrap ">
      <div className="text-white flex flex-col justify-evenly items-center border-2 gap-10 border-[--verde-primario] rounded-3xl w-[500px] h-[300px] relative p-2 mt-6">
        <h2 className="absolute top-[-40px] left-5 text-3xl">
          Próximo agendamento
        </h2>
        <h2 className="text-3xl">Consulta com clinico geral</h2>
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
        <button className="cursor-pointer text-lg" onClick={()=> setOpen(true)}>
          Acesse o agendamento para mais detalhes →
        </button>
      </div>
      <div className="text-white border-2 border-[--verde-primario] rounded-3xl w-[500px] h-[300px] relative p-2 mt-10 lg:mt-6">
        <h2 className="absolute top-[-40px] left-5 text-3xl">
          Agendamentos futuros
        </h2>
        <ul className="flex flex-col justify-around w-full h-[235px]">
          <li>
            <p className="w-full flex justify-between text-xl px-2">
              Exame de sangue <span className="text-[--verde-primario]">|</span>{" "}
              <button className="bg-[--verde-primario] text-black font-bold rounded-lg px-2 py-1">
                {" "}
                →
              </button>
            </p>
          </li>
          <li>
            <p className="w-full flex justify-between text-xl px-2">
              Exame de sangue <span className="text-[--verde-primario]">|</span>
              <button className="bg-[--verde-primario] text-black font-bold rounded-lg px-2 py-1">
                {" "}
                →
              </button>
            </p>
          </li>
          <li>
            <p className="w-full flex justify-between text-xl px-2">
              Exame de sangue <span className="text-[--verde-primario]">|</span>
              <button className="bg-[--verde-primario] text-black font-bold rounded-lg px-2 py-1">
                {" "}
                →
              </button>
            </p>
          </li>
        </ul>
        <p className="text-center cursor-pointer text-lg">
          Acesse todos os agendamentos →
        </p>
      </div>
    </section>
    </>
  );
}
