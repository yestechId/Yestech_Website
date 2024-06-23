import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-transparent">
      <div className="container flex items-center justify-between py-5">
        <img src="/images/logo.svg" className="md:w-56 xs:w-48" alt="Logo" />

        {/* Menu untuk desktop */}
        <ul className="items-center hidden gap-5 md:flex">
          <li>
            <Link to="/" className="pb-2 transition-all hover:border-b-4 border-primary menu-navbar ">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="pb-2 transition-all hover:border-b-4 border-primary menu-navbar">
              Product
            </Link>
          </li>
          <li>
            <Link to="/news" className="pb-2 transition-all hover:border-b-4 border-primary menu-navbar">
              News
            </Link>
          </li>
          <li>
            <Link to="/contact-us" className="pb-2 transition-all hover:border-b-4 border-primary menu-navbar">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Hamburger menu untuk mobile */}
        <FaBars className="block w-6 h-6 text-white md:hidden" onClick={toggleMenu} />

        {/* Menu untuk mobile */}
        <div
          className={`md:hidden fixed top-0 left-0 h-screen w-full bg-gradient-to-l  ${
            isOpen ? 'from-black via-slate-950/100 to-slate-700/100' : 'from-transparent to-transparent'
          }  z-50 transition-all duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
          <div className="flex flex-col items-start justify-end pt-16 pb-8 ">
            <ul className="flex flex-col items-end w-full gap-4">
              <li>
                <Link to="/" className="px-4 py-2 text-white menu-navbar" onClick={toggleMenu}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="px-4 py-2 text-white menu-navbar" onClick={toggleMenu}>
                  Product
                </Link>
              </li>
              <li>
                <Link to="/news" className="px-4 py-2 text-white menu-navbar" onClick={toggleMenu}>
                  News
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="px-4 py-2 text-white menu-navbar" onClick={toggleMenu}>
                  Contact Us
                </Link>
              </li>
            </ul>
            <FaTimes className="absolute w-6 h-6 text-white cursor-pointer top-5 right-5" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
