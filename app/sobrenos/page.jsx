import Image from "next/image";

export default function SobreNos() {
  return (
    <section className="mx-auto w-1/2">
        <div className=" bg-[--verde-secundario] flex gap-28">
            <Image width={380} height={380}/>
            <div>
                <h2>André Rohregger</h2>
                <p>Estagiário</p>
                <Image src="/img/Estagiario.png" width={200} height={200}/>
            </div>
        </div>
        <div className="flex">
            <Image width={380} height={380}/>
            <div>
                <h2>Gabriel Siqueira</h2>
                <p>DEV Python Sênior</p>
                <Image src="/img/Python.png" width={200} height={200}/>
            </div>
        </div>
        <div className=" bg-[--verde-secundario] flex">
            <Image width={380} height={380}/>
            <div>
                <h2>Gustavo de Oliveira Azevedo</h2>
                <p>Lead Front-End</p>
                <Image src="/img/Ui-UX.png" width={200} height={200}/>
            </div>
        </div>
        <div className="flex">
            <Image width={380} height={380}/>
            <div>
                <h2>Mateus Mantovani Araújo</h2>
                <p>DEV Java Sênior</p>
                <Image src="/img/Java.png" width={200} height={200}/>
            </div>
        </div>
        <div className=" bg-[--verde-secundario] flex">
            <Image width={380} height={380}/>
            <div>
                <h2>Juan de Godoy</h2>
                <p>Analista Sênior</p>
                <Image src="/img/DataBase.png" width={200} height={200}/>
            </div>
        </div>
    </section>
  )
}
