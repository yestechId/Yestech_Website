import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="w-full bg-[#10121D] relative z-50 overflow-hidden">
      <div className="container flex flex-col gap-3 p-5">
        <div className="flex items-center justify-between w-full">
          <div className="w-[45%]">
            <img src="/images/logo.svg" alt="logo" />
          </div>

          <div className="flex w-[55%]  items-center justify-between ">
            <h4 className="text-xl font-normal text-white">We are looking for more strategic partner</h4>
            <button className="px-16 py-2 text-lg font-semibold text-white transition-all border-2 rounded-full cursor-pointer hover:bg-primary hover:text-white border-primary">
              Get Started
            </button>
          </div>
        </div>
        <span className="block w-full border-[1px] border-slate-800 my-5"></span>
        <div className="flex-between">
          <div className="text-white w-[45%]">
            <h4 className="mb-5 text-lg font-normal">Yes Tech Indonesia</h4>
            <ul className="flex items-center justify-start gap-8">
              <li>
                <FaInstagram className="w-7 h-7" />
              </li>
              <li>
                <FaFacebook className="w-6 h-6" />
              </li>
              <li>
                <FaTiktok className="w-6 h-6" />
              </li>
              <li>
                <FaYoutube className="w-6 h-6" />
              </li>
            </ul>
          </div>

          <ul className="gap- text-white flex justify-between items-center w-[55%]">
            <li>
              <Link to="/" className="menu-footer">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-footer">
                Products
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-footer">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-footer">
                Company Profile
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-footer">
                Case List
              </Link>
            </li>
            <li>
              <Link to="/" className="menu-footer">
                YesTech Strategic Partners
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="w-full p-3 text-sm font-normal text-center text-white bg-primary">
        Copyright © 2020. YesTech. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
