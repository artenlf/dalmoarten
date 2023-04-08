export default function HeaderButton() {
  return (
    <button
      type="button"
      className="bg-gray-100 text-slate-900 text-lg font-semibold w-40 h-14 
        hover:text-gold-700 transition ease-in-out delay-140 
         hover:-translate-1 hover:scale-110 hover:bg-slate-100 duration-200"
    >
      <a
        href="https://app.acessorias.com/?login"
        target="_blank"
        rel="noreferrer"
      >
        Login
      </a>
    </button>
  )
}
