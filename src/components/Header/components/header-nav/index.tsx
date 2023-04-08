import Link from 'next/link'
import links from './header-links.json'

export default function HeaderNav() {
  return (
    <nav className="text-gray-100 text-lg flex gap-8">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-gold-700 transition ease-in-out delay-140 
            hover:-translate-y-1 hover:scale-110 hover:underline"
        >
          {label}
        </Link>
      ))}
    </nav>
  )
}
