import Image from 'next/image'
import Logo from '../../assets/logo.svg'
import AccountantInfo from './components/footer-accountant-info'
import FooterAddress from './components/footer-address'
import Copyrights from './components/footer-copyrights'
import FooterNav from './components/footer-nav'

export function Footer() {
  return (
    <footer className="bg-slate-900 w-full flex flex-col gap-8 px-32 py-8">
      <div
        className="flex items-center justify-between pb-8 
      border-b-[1px] border-b-gray-500"
      >
        <Image src={Logo} alt="" width={190} />
        <FooterAddress />
        <FooterNav />
        <AccountantInfo />
      </div>
      <Copyrights />
    </footer>
  )
}
