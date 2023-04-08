import ServicesListComponent from './list-component/listComponent'

export default function ServicesList() {
  return (
    <section className="bg-slate-300 bg-opacity-95">
      <div className="flex flex-col items-center justify-between p-8 bg-slate-300 bg-opacity-60 gap-4">
        <h2 className="font-bold text-3xl text-slate-900 mx-auto max-w-xl">
          Soluções inteligentes e eficientes
        </h2>
        <span className="mx-auto text-[1.125rem]">
          De empresa individual à indústria, atendimento personalizado para:
        </span>
        <ServicesListComponent />
      </div>
    </section>
  )
}
