import AccordionSection from './accordion'
import BusinessList from './business-list'
import Hero from './hero'
import PricesAndPlans from './prices-and-plans'
import ServicesList from './services-list'

export default function Home() {
  return (
    <main
      className="bg-[url('../assets/hero/2.svg')]
    bg-center bg-no-repeat bg-fixed"
    >
      <Hero />
      <AccordionSection />
      <BusinessList />
      <ServicesList />
      <PricesAndPlans />
    </main>
  )
}
