import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/Logo.png"


export function Footer() {
  return (
    <footer
      className="bg-slate-900 w-full flex flex-col gap-8 px-8 py-8"
    >
      <div className="flex gap-32 items-center">
        <Image src={Logo} alt='' width={120} />
        <div className="max-w-[35rem] text-gray-100 font-bold">
          <span>Rua Barão de Jaguara, 1481 - Ed. Cruz Alta- 10º andar - Cj. 102/104. Centro, Campinas/SP.</span>
          <p>CEP: <span>13015-002</span></p>
          <p>Telefone: <span>(19) 3237-1983 / (19) 3237-1974</span></p>
        </div>
        <nav className="text-gray-100 grid grid-cols-2 gap-4">
          <Link
            href={'/'}
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Home
          </Link>
          <Link
            href={'/about'}
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Sobre
          </Link>
          <Link
            href={'/services'}
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Serviços
          </Link>
          <Link
            href={'/contact'}
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Contato
          </Link>
          <Link
            href={'/blog'}
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Blog
          </Link>
          <a href="https://app.acessorias.com/?login"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold-700 transition ease-in-out delay-140 
          hover:underline"
          >
            Área do Cliente
          </a>
        </nav>
      </div>

      <p
        className="text-gray-100 place-self-center"
      >
        Dalmo Arten Contabilidade. {new Date().getFullYear()}.
        Desenvolvido com &#128151; por artenlf.
      </p>
    </footer >
  )
}