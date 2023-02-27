import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from '@radix-ui/react-icons';
import Image from "next/image";
import Link from "next/link";
import { Buildings, Calculator, Person, Receipt } from "phosphor-react";
import BannerImage from "../assets/banner/1.png";

export default function Home() {
  return (
    <main>
      <section className="bg-slate-300 flex items-center py-4 px-32 justify-evenly">
        <div className="flex flex-col gap-8 max-w-[55rem]">
          <h1
            className="text-4xl font-bold text-slate-900">
            Contabilidade descomplicada e tranquilidade para o seu negócio crescer!
          </h1>
          <h2
            className="text-gray-600 max-w-[32.5rem]"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nostrum at.
            Omnis vel ipsum suscipit facilis esse natus dolorem.
            Blanditiis esse similique adipisci dolorem laboriosam necessitatibus delectus!
            Sequi, necessitatibus! Sequi!
          </h2>
          <button
            className="bg-slate-900 text-gray-100 font-bold py-5 w-48 rounded-full 
          hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-200"
          >
            Saiba Mais
          </button>
        </div>
        <Image src={BannerImage} height={400} alt="" />
      </section>
      <section className="px-48 py-8 flex flex-col items-center">
        <h2
          className="font-bold text-2xl text-slate-900 mx-auto mb-8"
        >
          Contabilidade na medida para a sua Empresa
        </h2>
        <div
          className="grid grid-cols-2"
        >
          <Accordion.Root
            type="single"
            defaultValue="item-1"
            className="flex flex-col gap-4"
          >
            <Accordion.Item value="item-1">
              <Accordion.Header
                className="font-bold text-lg flex mb-2"
              >
                <Accordion.Trigger
                  className="flex h-8 flex-1 items-center justify-between 
                  ml-2 group cursor-pointer"
                >
                  Excelência e Expertise da empresa individual à indústria
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                  transition-transform duration-300 
                  group-data-[state=open]:rotate-180"
                    aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                Nosso escritório é conhecido por oferecer
                serviços de excelência para nossos clientes. Contando com mais de 30 anos de
                experiência no mercado e time de profissionais
                altamente capacitados, estamos preparados para atender as
                necessidades de empresas dos mais diversos portes e setores.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
              <Accordion.Header
                className="font-bold text-lg flex mb-2"
              >
                <Accordion.Trigger
                  className="flex h-8 flex-1 items-center justify-between 
                  ml-2 group cursor-pointer"
                >
                  Eficiência e Agilidade para à serviço da sua empresa
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                   transition-transform duration-300 
                   group-data-[state=open]:rotate-180"
                    aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                Oferecemos soluções personalizadas para cada cliente,
                sempre visando maximizar seus resultados e reduzir seus custos.
                Contamos tanto um atendimento presencial em nosso escritório
                quanto atendimento digital de qualidade, por meio de canais
                de comunicação como WhatsApp, e-mail, telefone e videoconferência.
                Dessa forma, nossos clientes podem escolher a opção que melhor
                se adequa às suas necessidades e preferências.
                Além disso, contamos com uma infraestrutura moderna e
                tecnológica que nos permite fornecer um atendimento ágil e eficiente.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Header
                className="font-bold text-lg flex mb-2"
              >
                <Accordion.Trigger
                  className="flex h-8 flex-1 items-center justify-between 
                  ml-2 group cursor-pointer"
                >
                  Compromisso com a transparência e com o sucesso
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                   transition-transform duration-300 
                   group-data-[state=open]:rotate-180"
                    aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                Nosso compromisso com a transparência e a
                ética são valores inegociáveis. Estamos sempre em busca das
                melhores práticas e atualizações na legislação para garantir
                que nossos clientes estejam em conformidade com as normas e
                regulamentações aplicáveis.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-4">
              <Accordion.Header
                className="font-bold text-lg flex mb-2"
              >
                <Accordion.Trigger
                  className="flex h-8 flex-1 items-center justify-between 
                  ml-2 group cursor-pointer"
                >
                  Nossa meta: o crescimento do seu negócio
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                   transition-transform duration-300 
                   group-data-[state=open]:rotate-180"
                    aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                Seja em contabilidade, planejamento tributário, ou relatórios financeiros,
                nossa meta é auxiliar no crescimento da sua empresa.
                Nossos serviços são projetados para economizar tempo e dinheiro,
                eliminando a parte burocrática e fornecendo ferramentas para que a gestão
                atue somente no crescimento do negócio.
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-5">
              <Accordion.Header
                className="font-bold text-lg flex mb-2"
              >
                <Accordion.Trigger
                  className="flex h-8 flex-1 items-center justify-between 
                  ml-2 group cursor-pointer"
                >
                  Foque no que realmente importa!
                  <ChevronDownIcon
                    className="text-violet10 ease-[cubic-bezier(0.87,_0,_0.13,_1)] 
                   transition-transform duration-300 
                   group-data-[state=open]:rotate-180"
                    aria-hidden />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content
                className="text-justify overflow-hidden pr-10 pl-4 
                data-[state=open]:animate-slideDown 
                data-[state=closed]:animate-slideUp"
              >
                Conte conosco para cuidar da gestão contábil e financeira da
                sua empresa de forma profissional, confiável e eficiente. Estamos prontos
                para ajudar a você e o seu negócio a alcançarem o sucesso.
                Escolha o plano que melhor atender as necessidades da sua empresa,
                ou entre contato com um de nossos especialistas.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </section>
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
      <section
        className=" bg-slate-300 flex flex-col p-8 gap-4"
      >
        <h2
          className="font-bold text-3xl text-slate-900 mx-auto max-w-xl"
        >
          Soluções inteligentes e eficientes
        </h2>
        <span className="mx-auto text-[1.125rem]">
          De empresa individual à indústria, atendimento personalizado para:
        </span>
        <div
          className="grid grid-cols-2 gap-2 gap-x-16 mx-auto mt-4 pl-12"
        >
          <p
            className="flex items-center gap-2"
          >
            <Buildings size={16} color="#00d1a7" weight="fill" />
            Abertura, alteração e encerramento
          </p>
          <p className="flex items-center gap-2">
            <Person size={16} color="#6900d1" weight="fill" />
            Departamento Pessoal
          </p>
          <p
            className="flex items-center gap-2"
          >
            <Receipt size={16} color="#d10054" weight="fill" />
            Departamento Fiscal
          </p>
          <p className="flex items-center gap-2"
          >
            <Calculator size={16} color="#0050d1" weight="fill" />
            Contabilidade e Obrigações
          </p>
          <button
            className="bg-slate-900 text-gray-100 w-64 h-10 mt-8 mx-auto 
            col-span-2 rounded-full
            hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-200"
          >
            <Link href={"/services"}>
              Ver mais serviços
            </Link>
          </button>
        </div>
      </section>
      <section
        className="py-4 px-32 flex flex-col gap-2 justify-evenly items-center"
      >
        <h2 className="font-bold text-2xl text-slate-900">Confira os nossos Planos</h2>
        <span>Na medida certa para o seu negócio</span>
        <div className="grid grid-cols-3 gap-12 my-8">
          <div className="flex flex-col gap-2 items-center max-w-sm p-6 bg-slate-100 rounded-lg">
            <h3
              className="font-bold text-slate-700"
            >
              Microempreendedor Individual (MEI)
            </h3>
            <span
              className="mx-auto font-bold text-4xl"
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
          <div
            className="flex flex-col gap-2 items-center max-w-sm p-6
           bg-slate-100 rounded-lg"
          >
            <h3
              className="font-bold text-slate-700"
            >
              Prestadoras de Serviços
            </h3>
            <span className="mx-auto font-bold text-4xl">R$ 399,00</span>
            <button className="bg-slate-900 text-slate-100 
            py-3 px-10 rounded-full 
            hover:text-gold-700 transition ease-in-out delay-140 
            hover:-translate-1 hover:scale-110 hover:bg-slate-700 duration-200"
            >
              Escolher o plano
            </button>
            <div className="place-self-start pl-16 mt-2 text-sm space-y-2">
              <p>Contabilidade completa</p>
              <p>Folha de pagamentos (grátis até 3 funcionários)</p>
              <p>Pró-Labore</p>
              <p>Impostos e obrigações</p>
              <p>Planejamento tributário</p>
              <p>Relatórios</p>
              <p>Abertura gratuita*</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center max-w-sm p-6
           bg-slate-100 rounded-lg"
          >
            <h3
              className="font-bold text-slate-700"
            >
              Microempreendedor Individual (MEI)
            </h3>
            <span className="mx-auto font-bold text-4xl">R$ 149,00</span>
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
        </div>
      </section>
    </main>
  )
}
