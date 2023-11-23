import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <footer className="flex justify-between items-center relative mt-20">
        <Image className="w-full overflow-hidden absolute"
            src="/img/wave-haikei.svg"
            height={150}
            width={1440}
            alt="Wave do footer"
        />
        <div className="z-10 flex justify-center">
            <nav>
                <ul className="flex space-x-20 pt-32 text-white text-center mx-5">
                    <li>
                        <p>André Rohregger Machado</p>
                        <p>RM: 98110</p>
                        <p>Estagiário</p>
                    </li>
                    <li>
                        <p>Gustavo de Oliveira Azevedo</p>
                        <p>RM: 550548</p>
                        <p>Lead Front-End</p>
                    </li>
                    <li>
                        <p>Gabriel Siqueira Rodrigues</p>
                        <p>RM: 98626</p>
                        <p>Dev Python Sênior</p>
                    </li>
                    <li>
                        <p>Juan de Godoy</p>
                        <p>RM: 551408</p>
                        <p>Analista Sênior</p>
                    </li>
                    <li>
                        <p>Mateus Mantovani Araújo</p>
                        <p>RM: 98524</p>
                        <p>Dev Java Sênior</p>
                    </li>
                </ul>
            </nav>
        </div>
    </footer>
  )
}