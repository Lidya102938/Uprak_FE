import { BsInstagram, BsFacebook, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <div className="bg-green-600 h-[250px]">
      <div className="flex justify-between items-center">
        <div className="p-10">
          <h1 className="font-bold text-2xl">SchoolW</h1>
          <h1>vanrina187@gmail.com</h1>
          <h1>+62 123456789</h1>
        </div>

        <div className="flex space-x-10 mr-[100px]">
          <BsInstagram className="text-2xl" />
          <BsFacebook className="text-2xl" />
          <BsTwitter className="text-2xl" />

        </div>
      </div>
    </div>
  )
}