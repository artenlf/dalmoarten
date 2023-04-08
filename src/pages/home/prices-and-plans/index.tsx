import PlanCard from './plan-card'

export default function PricesAndPlans() {
  return (
    <section
      className="bg-slate-200 py-4 px-32 
        flex flex-col gap-2 justify-evenly items-center"
    >
      <h2 className="font-bold text-2xl text-slate-900">
        Confira os nossos Planos
      </h2>
      <span>Na medida certa para o seu negócio</span>
      <PlanCard />
    </section>
  )
}
