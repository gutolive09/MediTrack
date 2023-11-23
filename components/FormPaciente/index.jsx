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
    <form>
        <fieldset>
            <legend>Area do usuário</legend>
            <div>
                <label htmlFor="idEmail">Email</label>
                <input type="email" name="email" id="idEmail" value={usuario.email} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" name="senha" id="idSenha" value={usuario.senha} onChange={handleChange}/>
            </div>
            <button>Enviar</button>
        </fieldset>
    </form>
  )
}
