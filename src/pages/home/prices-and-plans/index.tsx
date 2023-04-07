import { PlanCard } from "./plan-card"

export function PricesAndPlans() {
  return (
    <section
        className="bg-slate-200 py-4 px-32 
        flex flex-col gap-2 justify-evenly items-center"
      >
        <h2
          className="font-bold text-2xl text-slate-900"
        >
          Confira os nossos Planos
        </h2>
        <span>Na medida certa para o seu negócio</span>
        <div className="grid grid-cols-3 gap-12 my-8">
          <PlanCard />
          <PlanCard />
          <PlanCard />
        </div>
      </section>
      )
  }