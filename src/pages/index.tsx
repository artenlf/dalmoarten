import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as Accordion from "@radix-ui/react-accordion";
import Image from "next/image";
import Link from "next/link";
import { Buildings, Calculator, Person, Receipt } from "phosphor-react";
import { useState } from "react";
import BannerImage from "../assets/banner/1.png";

export default function Home() {
  const [activeAccordionItem, setActiveAccordionItem] = useState("item-1");

  function handleAccordionOpen(value: string) {
    setActiveAccordionItem(value)
  }

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
      <section className="px-48 py-8 flex flex-col">
        <h2
          className="font-bold text-2xl text-slate-900 mx-auto mb-8"
        >
          Contabilidade na medida para a sua Empresa
        </h2>
        <div
          className="grid grid-cols-2 max-w-4xl"
        >
          <Accordion.Root
            type="single"
            defaultValue="item-1"
            collapsible
            className="flex flex-col gap-4"
          >
            <Accordion.Item value="item-1">
              <Accordion.Trigger
                className="flex"
                onClick={() => handleAccordionOpen("item-1")}
              >
                Test1?
                <FontAwesomeIcon
                  size='sm'
                  className="ml-2"
                  icon={
                    activeAccordionItem === "item-1" ?
                      faChevronDown : faChevronUp
                  }
                />
              </Accordion.Trigger>
              <Accordion.Content
                className="text-justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam et commodi possimus earum rerum, nisi asperiores eligendi ipsa cum nesciunt officiis quos beatae vero consequuntur modi, deserunt adipisci expedita!
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-2">
              <Accordion.Trigger
                onClick={() => handleAccordionOpen("item-2")}
              >
                Test2 text?
                <FontAwesomeIcon
                  size='sm'
                  className="ml-2"
                  icon={
                    activeAccordionItem === "item-2" ?
                      faChevronDown : faChevronUp
                  }
                />
              </Accordion.Trigger>
              <Accordion.Content
                className="text-justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam et commodi possimus earum rerum, nisi asperiores eligendi ipsa cum nesciunt officiis quos beatae vero consequuntur modi, deserunt adipisci expedita!
              </Accordion.Content>
            </Accordion.Item>

            <Accordion.Item value="item-3">
              <Accordion.Trigger
                onClick={() => handleAccordionOpen("item-3")}
              >
                Test3 text text?
                <FontAwesomeIcon
                  size='sm'
                  className="ml-2" icon={
                    activeAccordionItem === "item-3" ?
                      faChevronDown : faChevronUp
                  }
                />
              </Accordion.Trigger>
              <Accordion.Content
                className="text-justify"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus numquam et commodi possimus earum rerum, nisi asperiores eligendi ipsa cum nesciunt officiis quos beatae vero consequuntur modi, deserunt adipisci expedita!
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
        className="py-4 px-32 justify-evenly"
      >
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </section>
    </main>
  )
}
