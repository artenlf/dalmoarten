import Image from 'next/image'
import BannerImage from '../assets/banner/1.png'

export default function Home() {
  return (
    <div className="h-[25rem] flex items-center px-32 justify-evenly">
      <div className='flex flex-col gap-8 w-[41rem]'>
        <h1
          className="text-3xl font-bold text-slate-900">
          Contabilidade descomplicada e tranquilidade para o seu negócio crescer!
        </h1>
        <h2
          className="text-gray-600"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, nostrum at.
          Omnis vel ipsum suscipit facilis esse natus dolorem.
          Blanditiis esse similique adipisci dolorem laboriosam necessitatibus delectus!
          Sequi, necessitatibus! Sequi!
        </h2>
        <button
          className='bg-slate-400 text-gray-100 font-bold h-16 w-48 rounded-full 
          hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-y-1 hover:scale-110 hover:bg-slate-300 duration-200'
        >
          Saiba Mais
        </button>
      </div>
      <Image src={BannerImage} height={400} alt="" />
    </div>
  )
}
