import Link from 'next/link'
import links from './links.json'

export default function NavLinks() {
  return (
    <>
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className="hover:text-gold-700 transition ease-in-out delay-140 hover:underline"
        >
          {label}
        </Link>
      ))}
    </>
  )
}
