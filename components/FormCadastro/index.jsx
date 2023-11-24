import React from "react";

export default function FormCadastro() {
  return (
    <form className=" bg-[--verde-secundario] w-1/2 lg:w-1/4 px-1 py-6 rounded">
      <fieldset className="flex flex-col justify-centera items-center gap-8">
        <legend className=" text-white text-center text-3xl mb-5">Cadastre-se</legend>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="idNome">Nome completo</label>
          <input type="text" name="nome" id="idNome" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="idEmail">Email</label>
          <input type="text" name="email" id="idEmail" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="idCpf">Cpf</label>
          <input type="text" name="cpf" id="idCpf" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="idSenha">Senha</label>
          <input type="password" name="senha" id="idSenha" className="w-1/2 rounded-xl px-2" />
        </div>
        <div className="text-white">
          <p>A sua senha deve ter:</p>
          <ul className="list-disc pl-8">
            <li >8 caracteres ou mais</li>
            <li>Letras maiúsculas e minúsculas</li>
            <li>Pelo menos um caractere especial(@,!,#...)</li>
          </ul>
        </div>
        <div className="flex flex-col items-center w-full gap-2">
          <label className="text-white text-xl" htmlFor="idSenhaConf">Confirme sua senha</label>
          <input type="password" name="senhaConf" id="idSenhaConf" className="w-1/2 rounded-xl px-2"/>
        </div>
        <div>
          <input type="checkbox" name="termos" id="idTermos" />
          <label className="text-white px-3 " htmlFor="idTermos">
            Você leu e concorda com os termos de privacidade
          </label>
        </div>
        <button className="text-black text-xl font-bold rounded-xl bg-[--verde-primario] px-6 py-3">Enviar</button>
      </fieldset>
    </form>
  );
}
