import { FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaPhoneVolume } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const ContactUs = () => {
  return (
    <section className="relative top-0 right-0 left-0 bottom-0 w-full py-20 min-h-screen bg-[#10121D] flex-center gap-5 flex-col ">
      <h1 className="text-5xl font-bold text-white">Contact Us</h1>
      <p className="mb-3 text-sm font-normal text-white">Any question or remarks? Just write us a message!</p>
      <div className="bg-white w-[878px] h-[467px] rounded-md flex p-3 ">
        <div className='relative bg-[url("/images/contact-us/banner.png")] w-[40%] rounded-md overflow-hidden bg-cover p-8 text-white flex flex-col gap-2 justify-start'>
          <h2 className="text-2xl font-medium">Contact Information</h2>
          <p className="text-sm font-normal text-[#C9C9C9]">Say something to start a live chat!</p>

          <ul className="flex flex-col gap-8 mt-14">
            <li className="flex items-center justify-start gap-5">
              <FaPhoneVolume className="w-4 h-4 -rotate-45" /> <p className="text-sm font-light">yestech@yes-led.com</p>
            </li>
            <li className="flex items-center justify-start gap-5">
              <FaEnvelope className="w-4 h-4" /> <p className="text-sm font-light">yestech@yes-led.com</p>
            </li>
            <li className="flex items-start justify-start gap-5">
              <FaLocationDot className="w-8 h-8" />
              <p className="text-sm font-light">
                Pergudangan Eraprima Industrial Park No C8. Jl. KH. Agus Salim No.2, Tangerang, Banten 15141
              </p>
            </li>
          </ul>

          <ul className="absolute gap-3 left-8 bottom-8 flex-center">
            <li>
              <FaInstagram className="w-4 h-4" />
            </li>
            <li>
              <FaTwitter className="w-4 h-4" />
            </li>
            <li>
              <FaFacebook className="w-4 h-4" />
            </li>
          </ul>
        </div>
        <form className="relative w-[60%] p-8 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#8D8D8D] font-medium text-lg">
              Name
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className="placeholder:text-[#011C2A] text-[20px] font-semibold border-b pb-2 border-[#8D8D8D]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#8D8D8D] font-medium text-lg">
              Phone Number
            </label>
            <input
              type="number"
              placeholder="08379892029"
              className="placeholder:text-[#011C2A] text-[20px] font-semibold border-b pb-2 border-[#8D8D8D]"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[#8D8D8D] font-medium text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="placeholder:text-[#011C2A] text-[20px] font-semibold border-b pb-2 border-[#8D8D8D]"
            />
          </div>
          <button
            type="submit"
            className="absolute bottom-0 px-12 py-2 font-semibold text-black transition-all border-2 border-black rounded-full cursor-pointer hover:bg-primary hover:border-primary hover:text-white right-8"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}

export default ContactUs
