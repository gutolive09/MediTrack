import Link from "next/link";
import { useState } from "react";

export default function FormPaciente() {

    const [usuario, setUsuario] = useState({
        "email": "",
        "senha": ""
    })

    const handleChange = async (e)=>{
        const {name, value} = e.target;
    setUsuario({...usuario,[name]:value});
    };

  return (
    <form className=" bg-[--verde-secundario] w-1/2 lg:w-1/4 px-1 py-6 rounded">
        <fieldset className="flex flex-col justify-centera items-center gap-8">
            <legend className=" text-white text-center text-3xl mb-5">Area do usuário</legend>
            <div className="flex flex-col items-center w-full gap-2">
                <label className="text-white text-xl" htmlFor="idEmail">Email</label>
                <input type="email" name="email" id="idEmail" value={usuario.email} onChange={handleChange} className="w-1/2 rounded-xl px-2"/>
            </div>
            <div  className="flex flex-col items-center w-full gap-2">
                <label className="text-white text-xl" htmlFor="idSenha">Senha</label>
                <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={handleChange}  className="w-1/2 rounded-xl px-2"/>
            </div>
            <button className="text-black text-xl font-bold rounded-xl bg-[--verde-primario] px-6 py-3">Enviar</button>
        </fieldset>
        <p className="text-center mt-5 text-white text-xl"> <Link href="/cadastro">Não tem cadastro ? Clique aqui</Link> </p>
    </form>
  )
}
