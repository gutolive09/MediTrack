import React from "react";

export default function FormCadastro() {
  return (
    <form className=" bg-[--verde-secundario] w-1/2 lg:w-1/4 px-1 py-6 rounded">
      <fieldset className="flex flex-col justify-centera items-center gap-8">
        <legend className=" text-white text-center text-3xl mb-5">Cadastre-se</legend>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="">Nome completo</label>
          <input type="text" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="">Email</label>
          <input type="text" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="">Cpf</label>
          <input type="text" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="">Senha</label>
          <input type="text"className="w-1/2 rounded-xl px-2" />
        </div>
        <div>
          <p>A sua senha deve ter:</p>
          <ul>
            <li>8 caracteres ou mais</li>
            <li>Letras maiúsculas e minúsculas</li>
            <li>Pelo menos um caractere especial(@,!,#...)</li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="">Confirme sua senha</label>
          <input type="text" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <input className="text-white text-xl" type="checkbox" name="" id="" />
          <label htmlFor="">
            Você leu e concorda com os termos de privacidade
          </label>
        </div>
        <button className="text-black text-xl font-bold rounded-xl bg-[--verde-primario] px-6 py-3">Enviar</button>
      </fieldset>
    </form>
  );
}
