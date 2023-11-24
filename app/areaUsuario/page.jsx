import React from "react";

export default function AreaUsuario() {
  return (
    <>
      <div>
        <h1>Bem vindo *Nome*</h1>
        <hr />
      </div>
    <section>
        <div>
            <h2>Consulta com clinico geral</h2>
            <div>
                <div>
                    <p>Data</p>
                    <p>24/11</p>
                </div>
                <div>
                    <p>Horário</p>
                    <p>13:00</p>
                </div>
            </div>
            <p>Acesse o agendamento para mais detalhes →</p>
        </div>
        <div>
            <ul>
                <li><p>Exame de sangue</p> <span>|</span> <button> →</button></li>
                <li><p>Exame de sangue</p> <span>|</span> <button> →</button></li>
                <li><p>Exame de sangue</p> <span>|</span> <button> →</button></li>
            </ul>
            <p>Acesse todos os agendamentos →</p>
        </div>
    </section>
    </>
  );
}
