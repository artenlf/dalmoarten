import { WhatsAppButton } from '@/components/WhatsApp'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <WhatsAppButton />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
