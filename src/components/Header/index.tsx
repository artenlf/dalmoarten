import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/Logo.png"

export function Header() {
  return (
    <div
      className="bg-slate-900 w-full h-20 flex items-center justify-between px-8"
    >
      <Image
        src={Logo}
        width={80}
        height={80}
        alt=""
      />
      <nav className="text-gray-100 text-lg flex gap-4 mr-[-50rem]">
        <Link
          href={''}
          className="hover:text-gold-700"
        >
          Home
        </Link>
        <Link
          href={''}
          className="hover:text-gold-700"
        >
          Sobre
        </Link>
        <Link
          href={''}
          className="hover:text-gold-700"
        >
          Serviços
        </Link>
        <Link
          href={''}
          className="hover:text-gold-700"
        >
          Contato
        </Link>
      </nav>
      <button
        className="bg-gray-100 text-slate-900 text-lg font-semibold w-40 h-14 hover:text-gold-700">
        Login
      </button>
    </div>
  )
}