import { useState } from "react";

export default function FormPaciente() {

    const [medico, setMedico] = useState({
        "crm": "",
        "senha": ""
    })

    const handleChange = async (e)=>{
        const {name, value} = e.target;
    setMedico({...medico,[name]:value});
    };

  return (
    <form>
        <fieldset>
            <legend>Area do usuário</legend>
            <div>
                <label htmlFor="idCrm">CRM</label>
                <input type="crm" name="crm" id="idCrm" value={medico.crm} onChange={handleChange}/>
            </div>
            <div>
                <label htmlFor="idSenha">Senha</label>
                <input type="password" name="senha" id="idSenha" value={medico.senha} onChange={handleChange}/>
            </div>
            <button>Enviar</button>
        </fieldset>
    </form>
  )
}
