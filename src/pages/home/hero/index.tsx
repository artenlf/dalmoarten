import Image from "next/image";
import BannerImage from "../../../assets/hero/2.svg";

export function Hero() {
  return (
    <section
        className=" flex items-center justify-evenly 
        bg-slate-300 bg-opacity-95 h-[calc(100vh-8rem)]
      "
      >
        <div className="flex items-center justify-between py-8 px-32
         bg-slate-300 bg-opacity-60"
        >
          <div
            className="flex flex-col gap-8"
          >
            <h1
              className="text-4xl font-bold text-slate-900">
              Contabilidade descomplicada e tranquilidade para o seu negócio crescer!
            </h1>
            <span
              className="text-gray-600 text-justify max-w-[32.5rem] ml-2"
            >
              Oferecemos planos de serviços especializados para simplificar a
              sua rotina e poupar tempo e dinheiro. No digital, ou no presencial,
              estaremos ao seu lado, prontos para auxiliar na construção e
              desenvolvimento do seu negócio. Que tal ter sua empresa regularizada
              e pagando o mínimo de impostos?
            </span>
            <button
              className="bg-slate-900 text-gray-100 font-bold py-5 w-48 rounded-full 
          hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-1 hover:scale-110 hover:bg-slate-700 duration-200"
            >
              Saiba Mais
            </button>
          </div>
          <Image
            src={BannerImage}
            height={400}
            alt=""
          />
        </div>
      </section >
    )
}