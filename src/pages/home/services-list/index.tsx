import Link from "next/link";
import { Buildings, Calculator, Person, Receipt } from "phosphor-react";

export function ServicesList() {
  return (
    <section
        className=" bg-slate-300 bg-opacity-95 "
      >
        <div className="flex flex-col gap-4 items-center justify-between p-8
         bg-slate-300 bg-opacity-60">
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
        </div>
      </section>
    )
}