export function BusinessList() {
  return (
    <section
        className=" bg-slate-900 text-gray-100 py-4 px-32 flex flex-col items-center"
      >
        <span className="text-gray-300">Nossas especialidades e</span>
        <h2 className="text-2xl font-bold">Atividades Atendidas</h2>
        <div className="grid grid-cols-3 gap-x-16 gap-y-4 mt-8">
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Desenvolvedores e profissionais de TI</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Nômades Digitais</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Prestadores de Serviços p/ Exterior</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Prestadores de Serviços em Geral (PJ)</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Microempreendedores Individuais (MEI)</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Escritórios de Advocacia</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Escritórios de Engenharia e Arquitetura</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Clínicas Médicas</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Clínicas Estéticas</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Clínicas de Fisioterapia</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Clínicas Odontológicas</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Profissionais de Psicologia</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Agências de Propaganda e Marketing</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Representantes Comerciais</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Revendedores</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Produtores de Conteúdo</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Bares e Restaurantes</span>
          <span className="bg-slate-700 rounded-full py-2 px-8 hover:text-gold-700">Varejistas</span>
        </div>
        <span className="text-lg font-bold mt-16">E mais!</span>
        <p className="text-sm text-gray-300 mt-8">Não encontrou a sua atividade? Envie sua mensagem agora mesmo para que um de nossos especialistas possa te orientar, sem custo algum.</p>
      </section>
    )
}