import Image from 'next/image'
import { Buildings, Calculator, Person, Receipt } from 'phosphor-react'
import BannerImage from '../assets/banner/1.png'

export default function Home() {
  return (
    <main>
      <section className="py-4 bg-slate-300 flex items-center px-32 justify-evenly">
        <div className='flex flex-col gap-8 max-w-[55rem]'>
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
            className='bg-slate-900 text-gray-100 font-bold py-5 w-48 rounded-full 
          hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-200'
          >
            Saiba Mais
          </button>
        </div>
        <Image src={BannerImage} height={400} alt="" />
      </section>
      <section className='flex flex-col p-8 gap-8'>
        <h2
          className='font-bold text-3xl text-center text-slate-900 mx-auto max-w-xl'
        >
          Soluções inteligentes e eficientes em Contabilidade
        </h2>
        <span className='mx-auto text-[1.125rem]'>
          De empresa individual à indústria, soluções inteligentes e eficientes.
        </span>
        <div
          className='grid grid-cols-2 gap-2 gap-x-16 mx-auto pl-12'
        >
          <p
            className='flex items-center gap-2'
          >
            <Buildings size={16} color="#00d1a7" weight="fill" />
            Abertura, alteração, encerramento
          </p>
          <p className='flex items-center gap-2'>
            <Person size={16} color="#6900d1" weight="fill" />
            Departamento Pessoal
          </p>
          <p
            className='flex items-center gap-2'
          >
            <Receipt size={16} color="#d10054" weight="fill" />
            Departamento Fiscal
          </p>
          <p className='flex items-center gap-2'
          >
            <Calculator size={16} color="#0050d1" weight="fill" />
            Contabilidade e Obrigações
          </p>
        </div>
      </section>
    </main>
  )
}
