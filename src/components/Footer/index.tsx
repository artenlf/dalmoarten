import Image from "next/image"
import Link from "next/link"
import Logo from "../../assets/logo.svg"
import ProfilePicture from "../../assets/profile.jpg"


export function Footer() {
  return (
    <footer
      className="bg-slate-900 w-full flex flex-col gap-8 px-32 py-8"
    >
      <div
        className="flex items-center justify-between pb-8 
      border-b-[1px] border-b-gray-500"
      >
        <Image src={Logo} alt='' width={190} />
        <div className="max-w-[35rem] text-gray-100 font-bold space-y-2">
          <span>Rua Barão de Jaguara, 1481 - Ed. Cruz Alta - 10º andar - Cj. 102/104 Centro, Campinas/SP</span>
          <p>CEP: <span>13015-002</span></p>
          <p>Telefone: <span>(19) 3237-1983 / (19) 3237-1974</span></p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14701.240185074275!2d-47.0605068!3d-22.9019323!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c8b4ba712ead%3A0xc01d8ca0c8fda5e!2sDalmo%20Arten%20Contabilidade!5e0!3m2!1spt-BR!2sbr!4v1677581776297!5m2!1spt-BR!2sbr"
            width="600" height="450" className="border-0 max-h-48 max-w-xs"
            allowFullScreen loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
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