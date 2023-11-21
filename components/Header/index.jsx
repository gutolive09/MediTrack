import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header>
        <Image 
            src="/img/Meditrack.png"
            height={150}
            width={150}
            alt="Logo da MediTrack"
        />
        <div>
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/login">Login</Link></li>
                    <li><Link href="/sobrenos">Sobre Nós</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}
