import Image from 'next/image'
import ProfilePicture from '../../../../assets/profile.jpg'

export default function AccountantInfo() {
  return (
    <div className="text-gray-100 grid grid-cols-2 gap-1">
      <Image
        src={ProfilePicture}
        width={120}
        alt=""
        className="row-span-3 rounded-full"
      />
      <p className="font-bold mb-8">Responsável Técnico</p>
      <span>Dalmo Otacílio Arten</span>
      <p>CRC SP-140299/O-5</p>
    </div>
  )
}
