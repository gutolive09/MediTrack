import Image from "next/image";

export default function SobreNos() {
  return (
    <section className="mx-auto w-1/2 flex flex-col gap-10">
      <div className=" bg-[--verde-secundario] flex gap-28 h-[380px] p-4">
        <Image className="object-cover rounded-3xl" src="/img/Andre.jpg" width={380} height={380} />
        <div className="text-white w-full flex flex-col items-center gap-8">
          <h2 className="text-4xl">André Rohregger</h2>
          <p className="text-2xl">Estagiário</p>
          <Image src="/img/Estagiario.png" width={200} height={200} />
        </div>
      </div>
      <div className="flex h-[380px]">
        <Image width={380} height={380} />
        <div className="text-white w-full flex flex-col items-center gap-8">
          <h2 className="text-4xl">Gabriel Siqueira</h2>
          <p className="text-2xl">DEV Python Sênior</p>
          <Image src="/img/Python.png" width={200} height={200} />
        </div>
      </div>
      <div className=" bg-[--verde-secundario] flex h-[380px]">
        <Image width={380} height={380} />
        <div className="text-white w-full flex flex-col items-center gap-8">
          <h2 className="text-4xl">Gustavo de Oliveira Azevedo</h2>
          <p className="text-2xl">Lead Front-End</p>
          <Image src="/img/Ui-UX.png" width={200} height={200} />
        </div>
      </div>
      <div className="flex h-[380px]">
        <Image className="object-cover rounded-3xl" src="/img/Mateus.jpg" width={380} height={380} />
        <div className="text-white w-full flex flex-col items-center gap-8">
          <h2 className="text-4xl">Mateus Mantovani Araújo</h2>
          <p className="text-2xl">DEV Java Sênior</p>
          <Image src="/img/Java.png" width={200} height={200} />
        </div>
      </div>
      <div className=" bg-[--verde-secundario] flex  h-[380px]">
        <Image width={380} height={380} />
        <div className="text-white w-full flex flex-col items-center gap-8">
          <h2 className="text-4xl">Juan de Godoy</h2>
          <p className="text-2xl">Analista Sênior</p>
          <Image src="/img/DataBase.png" width={200} height={200} />
        </div>
      </div>
    </section>
  );
}
