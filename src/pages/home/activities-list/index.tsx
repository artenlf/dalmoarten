import activities from './activities.json'

export default function ActivitiesList() {
  return (
    <section className=" bg-slate-900 text-gray-100 py-4 px-32 flex flex-col items-center">
      <span className="text-gray-300">Nossas especialidades e</span>
      <h2 className="text-2xl font-bold">Atividades Atendidas</h2>
      <div className="grid grid-cols-3 gap-x-16 gap-y-4 mt-8">
        {activities.map((activity, index) => (
          <span
            key={index}
            className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700"
          >
            {activity}
          </span>
        ))}
      </div>
      <span className="text-lg font-bold mt-16">E mais!</span>
      <p className="text-sm text-gray-300 mt-8">
        Não encontrou a sua atividade? Envie sua mensagem agora mesmo para que
        um de nossos especialistas possa te orientar, sem custo algum.
      </p>
    </section>
  )
}
