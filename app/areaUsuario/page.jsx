"use client"
import Agendamentos from "@/components/Agendamentos";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AreaUsuario() {

  const navigate = useRouter();

  useEffect(() =>{
    if(!sessionStorage.getItem("email")){
      navigate.push("/")
    }
  }, [navigate])

  return (
    <>
      <div className="px-8 py-4">
        <h1 className="text-white text-4xl">Bem vindo *Nome*</h1>
        <hr className="border-[--verde-primario] border-2" />
      </div>
      <Agendamentos/>
      <section>
        <div className="bg-[url('/img/bannerAgendamento.jpg')] rounded-3xl bg-cover mx-auto w-1/2 h-80">
            <div className="w-full h-full bg-black bg-opacity-50 rounded-3xl">
                <div className="text-white w-1/3 h-full flex flex-col items-center justify-center gap-7">
                    <h2 className="text-2xl">Atendimento rápido</h2>
                    <p className="text-xl text-center">Faça uma análise dos seus sintomas</p>
                    <button className="text-black text-xl font-bold rounded-xl bg-[--verde-primario] px-6 py-3 w-fit">Iniciar</button>
                </div>
            </div>

        </div>
      </section>
    </>
  );
}
