import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/Logo.png"

export function Header() {
  return (
    <header
      className="bg-slate-900 w-full h-32 flex items-center justify-between px-8"
    >
      <Image
        src={Logo}
        width={96}
        height={96}
        alt=""
      />
      <nav className="text-gray-100 text-lg flex gap-8">
        <Link
          href={'/'}
          className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          Home
        </Link>
        <Link
          href={'/about'}
          className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          Sobre
        </Link>
        <Link
          href={'/services'}
          className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          Serviços
        </Link>
        <Link
          href={'/contact'}
          className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          Contato
        </Link>
        <Link
          href={'/blog'}
          className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          Blog
        </Link>
      </nav>
      <button
        type="button"
        className="bg-gray-100 text-slate-900 text-lg font-semibold w-40 h-14
         hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-1 hover:scale-110 hover:bg-slate-100 duration-200"
      >
        <a
          href="https://app.acessorias.com/?login"
          target="_blank"
          rel="noreferrer"
        >
          Login
        </a>
      </button>
    </header>
  )
}