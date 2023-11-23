"use client";
import { useState } from "react";
import FormPaciente from "../FormPaciente";
import FormMedico from "../FormMedico";

export default function FormContainer() {
  const [form, setForm] = useState("paciente");

  return (
    <section className="flex flex-col justify-center items-center gap-3">
      {form == "paciente" && (
        <>
          <FormPaciente />
          <button onClick={() => setForm("medico")} className=" w-fit text-white bg-[--verde-secundario] px-6 py-3 rounded hover:scale-105 duration-150">É médico ? Clique Aqui</button>
        </>
      )}
      {form == "medico" && (
        <>
          <FormMedico />
          <button onClick={() => setForm("paciente")} className="text-white bg-[--verde-secundario] px-6 py-3 rounded hover:scale-105 duration-150">Paciente ? Clique Aqui</button>
        </>
      )}
    </section>
  );
}
