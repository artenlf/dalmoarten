import NavLinks from '@/components/NavLinks'

export default function FooterNav() {
  return (
    <nav className="text-gray-100 grid grid-cols-2 gap-4">
      <NavLinks />
      <a
        href="https://app.acessorias.com/?login"
        target="_blank"
        rel="noreferrer"
        className="hover:text-gold-700 transition ease-in-out delay-140 hover:underline"
      >
        Área do Cliente
      </a>
    </nav>
  )
}
