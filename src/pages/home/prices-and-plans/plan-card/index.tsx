import plans from './plans/plans'

export default function PlanCard() {
  return (
    <div className="grid grid-cols-3 gap-12 my-8">
      {plans.map((plan) => (
        <div
          className="flex flex-col gap-2 items-center max-w-sm p-6 bg-slate-100 rounded-lg"
          key={plan.title}
        >
          <h3 className="font-bold text-slate-700">{plan.title}</h3>
          <span className="my-2 mx-auto font-bold text-4xl">{plan.price}</span>
          <button className="bg-slate-900 text-slate-100 py-3 px-10 rounded-full hover:text-gold-700 transition ease-in-out delay-140 hover:-translate-1 hover:scale-110 hover:bg-slate-700 duration-200">
            Escolher o plano
          </button>
          <div className="place-self-start pl-16 mt-2 text-sm space-y-2 max-w-[15rem]">
            {plan.services.map((service) => (
              <p key={service}>{service}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
