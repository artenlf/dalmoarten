import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/Logo.png"
import ProfilePicture from "../../assets/profile.jpg"


export function Footer() {
  return (
    <footer
      className="bg-slate-900 w-full flex flex-col gap-8 px-8 py-8"
    >
      <div
        className="flex gap-32 items-center justify-between pb-8 
      border-b-[1px] border-b-gray-500"
      >
        <Image src={Logo} alt='' width={120} />
        <div className="max-w-[35rem] text-gray-100 font-bold space-y-2">
          <span>Rua Barão de Jaguara, 1481 - Ed. Cruz Alta - 10º andar - Cj. 102/104 Centro, Campinas/SP</span>
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
        <div className="text-gray-100 grid grid-cols-2 gap-1">
          <Image
            src={ProfilePicture}
            width={120} alt=""
            className="row-span-3 rounded-full"
          />
          <p className="font-bold mb-8">Responsável Técnico</p>
          <span>Dalmo Otacílio Arten</span>
          <p>CRC SP-140299/O-5</p>
        </div>
      </div>
      <p
        className="text-gray-100 text-sm mx-auto my-[-1.75rem]"
      >
        {new Date().getFullYear()} &#xAE; Dalmo Arten Contabilidade.
        Desenvolvido com &#128151; por artenlf.
      </p>
    </footer >
  )
}