import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import HeaderButton from './components/header-button'
import HeaderNav from './components/header-nav'

export function Header() {
  return (
    <header className="bg-slate-900 w-full h-32 flex items-center justify-between px-8">
      <Image src={Logo} width={190} alt="" />
      <HeaderNav />
      <HeaderButton />
    </header>
  )
}
