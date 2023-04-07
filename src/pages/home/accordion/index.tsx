import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from '@radix-ui/react-icons';

export default function AccordionSection() {
  return (
    <section className="px-48 py-8 flex flex-col items-center bg-slate-200">
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
    )
}