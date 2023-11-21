import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8">
        <Image 
            src="/img/Meditrack.png"
            height={150}
            width={150}
            alt="Logo da MediTrack"
        />
        <div>
            <nav>
                <ul className="flex gap-11">
                    <li className="text-white text-2xl hover:text-[#1EF409] duration-200"><Link href="/">Home</Link></li>
                    <li className="text-white text-2xl hover:text-[#1EF409] duration-200"><Link href="/login">Login</Link></li>
                    <li className="text-white text-2xl hover:text-[#1EF409] duration-200"><Link href="/sobrenos">Sobre Nós</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
