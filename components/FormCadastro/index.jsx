import React from 'react'

export default function FormCadastro() {
  return (
    <form>
        <fieldset>
            <legend>Cadastre-se</legend>
            <div>
                <label htmlFor="">Nome completo</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Cpf</label>
                <input type="text"/>
            </div>
            <div>
                <label htmlFor="">Senha</label>
                <input type="text"/>
            </div>
            <div>
                <p>A sua senha deve ter:</p>
                <ul>
                    <li>8 caracteres ou mais</li>
                    <li>Letras maiúsculas e minúsculas</li>
                    <li>Pelo menos um caractere especial(@,!,#...)</li>
                </ul>
            </div>
            <div>
                <label htmlFor="">Confirme sua senha</label>
                <input type="text" />
            </div>
            <div>
                <input type="checkbox" name="" id="" />
                <label htmlFor="">Você leu e concorda com os termos de privacidade</label>
            </div>
            <button>Enviar</button>
        </fieldset>
    </form>
  )
}
