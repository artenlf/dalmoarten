export default function PlanCard() {
  return (
    <div className="flex flex-col gap-2 items-center max-w-sm p-6 bg-slate-100 rounded-lg">
            <h3
              className="font-bold text-slate-700"
            >
              Microempreendedor Individual (MEI)
            </h3>
            <span
              className="my-2 mx-auto font-bold text-4xl"
            >
              R$ 149,00
            </span>
            <button className="bg-slate-900 text-slate-100 
            py-3 px-10 rounded-full 
            hover:text-gold-700 transition ease-in-out delay-140 
              hover:-translate-1 hover:scale-110 hover:bg-slate-700 duration-200"
            >
              Escolher o plano
            </button>
            <div className="place-self-start pl-16 mt-2 text-sm space-y-2">
              <p>Contabilidade completa</p>
              <p>Impostos e obrigações</p>
              <p>Planejamento tributário</p>
              <p>Relatórios</p>
              <p>Abertura gratuita*</p>
            </div>
      </div>
    )
}