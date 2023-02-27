import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function WhatsAppButton() {
  return (
    <a
      className='bg-green-500 text-white py-2 px-3 rounded-full fixed right-8 bottom-8
      hover:-translate-1 hover:scale-110'
      href=""
    >
      <FontAwesomeIcon icon={faWhatsapp} className='fa-3x' />
    </a>
  )
}