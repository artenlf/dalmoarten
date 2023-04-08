import Link from 'next/link'

import { Buildings, Calculator, Person, Receipt } from 'phosphor-react'

const services = [
  {
    icon: <Buildings size={16} color="#00d1a7" weight="fill" />,
    text: 'Abertura, alteração e encerramento',
  },
  {
    icon: <Person size={16} color="#6900d1" weight="fill" />,
    text: 'Departamento Pessoal',
  },
  {
    icon: <Receipt size={16} color="#d10054" weight="fill" />,
    text: 'Departamento Fiscal',
  },
  {
    icon: <Calculator size={16} color="#0050d1" weight="fill" />,
    text: 'Contabilidade e Obrigações',
  },
]

export default function ServicesListComponent() {
  return (
    <div className="grid grid-cols-2 gap-2 gap-x-16 mx-auto mt-4 pl-12">
      {services.map(({ icon, text }) => (
        <p key={text} className="flex items-center gap-2">
          {icon}
          {text}
        </p>
      ))}
      <button
        className="bg-slate-900 text-gray-100 w-64 h-10 mt-8 mx-auto 
         col-span-2 rounded-full hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-200"
      >
        <Link href={'/services'}>Ver mais serviços</Link>
      </button>
    </div>
  )
}
