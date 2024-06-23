import React, { useState } from 'react'
import MapView from '../../components/organisms/MapView'
import { Link } from 'react-router-dom'
const Home: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen xs:bg-[url('/images/home/bg-banner-mobile.svg')]   md:bg-[url('/images/banner-home.svg')] bg-cover rounded-br-[50px] md:mb-0 mb-5"
      >
        <div className="container flex flex-col items-center justify-start w-full h-full gap-14 md:gap-0 md:justify-between md:flex-row">
          <div className="flex md:w-[60%] w-full  items-center justify-center md:justify-start">
            <div className="flex flex-col gap-0 pt-20 md:gap-2 xs:items-center md:items-start md:pt-0">
              <h1 className="text-[#FF3237] md:text-6xl xs:text-4xl font-bold">New !</h1>
              <h2 className="font-bold text-white xs:text-[2rem] md:text-[5rem]">MG6S Plus Series</h2>
              <p className="font-normal text-white xs:text-xs md:text-2xl">Fast Installation, Intelligent Selection</p>
              <button className="py-2 mt-5 font-semibold border-2 border-white rounded-full button-secondary px-9">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-[40%] w-full md:pt-14  pt-0">
            <img src="/images/product-home.png" alt="product home" className="md:w-full w-[300px] h-full" />
          </div>

          <div className="absolute left-0 gap-8 md:left-20 bottom-14 flex-center">
            <div className="text-3xl flex-center">
              <img src="/icons/arrow-left.svg" alt="icon left" className="hidden w-full text-white md:block" />
            </div>
            <div className="flex gap-3 text-white">
              <span className="flex items-center justify-center w-6 h-6 text-xs font-bold border-2 rounded-full">
                1
              </span>
              <div className="flex flex-col gap-0 font-bold">
                <h3 className="text-sm ">MG6s Plus Series</h3>
                <p className="text-xs">Fast Installation, Intelligent Selection</p>
              </div>
            </div>
            <div className="text-3xl flex-center ">
              <img src="/icons/arrow-right.svg" alt="icon-right" className="hidden w-full text-white md:block" />
            </div>
            <div className="hidden gap-3 text-white md:flex">
              <span className="w-6 h-6 text-xs font-bold border-2 rounded-full flex-center">2</span>
              <div className="flex flex-col gap-0 font-bold">
                <h3 className="text-sm ">MG6s Plus Series</h3>
                <p className="text-xs">Fast Installation, Intelligent Selection</p>
              </div>
            </div>
          </div>

          <div className="absolute gap-2 left-10 md:gap-2 md:left-52 bottom-8 flex-center">
            <div className="text-3xl flex-center md:hidden">
              <img src="/icons/arrow-left.svg" alt="icon left" className="hidden w-full text-white md:block" />
            </div>
            <span className="block w-20 md:w-10 h-[6px] rounded-full bg-primary"></span>
            <span className="block w-5 h-2 bg-white rounded-full md:w-2"></span>
            <span className="block w-5 h-2 bg-white rounded-full md:w-2"></span>
            <div className="text-3xl flex-center md:hidden">
              <img src="/icons/arrow-right.svg" alt="icon-right" className="hidden w-full text-white md:block" />
            </div>
          </div>
        </div>
      </section>

      <section className="container relative w-full h-min  overflow-hidden border md:border-0 md:rounded-[0px] rounded-[20px]">
        <h2 className="my-5 md:my-8 text-lg md:text-3xl font-bold md:text-center text-[#CCCCCC] text-left px-5 md:px-0">
          Products
        </h2>

        {/* Versi Mobile */}
        <div className="absolute w-30 top-[1.40rem] right-5 md:hidden">
          <button
            className="flex items-center justify-center w-full gap-3 text-[15px] font-bold text-center text-primary "
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span>Rental & Staging</span>
            <svg
              className={`w-4 h-4 transition-transform transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`}
              fill="primary"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 z-10 w-48 py-2 mt-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <li className="p-2 font-normal text-black">Rental & Staging</li>
              <li className="p-2 font-normal text-black">Rental & Staging</li>
              <li className="p-2 font-normal text-black">Rental & Staging</li>
            </ul>
          )}
        </div>

        <div className="flex items-center justify-between px-5 pt-5 md:hidden">
          <div className="">
            <img src="/icons/mobile/arrow-left-grey.svg" alt="icon left mobile" className="w-full rotate-180" />
          </div>
          <h3 className="text-xl font-bold text-black ">MG9 Series</h3>
          <div className="">
            <img src="/icons/mobile/arrow-left-grey.svg" alt="icon left mobile" className="w-full" />
          </div>
        </div>
        {/* Versi dekstop */}
        <div className="flex flex-col w-full md:flex-row">
          <div className="hidden md:flex flex-col w-full md:w-[42%]">
            <div className="flex  h-[409px] ">
              <ul className="w-[50%] h-full overflow-y-auto border-r">
                <li className="font-bold text-[#222222] bg-[#F1F1F1] p-5 text-center">Rental & Staging</li>
                <li className="p-5 font-normal text-center text-black">Rental & Staging</li>
                <li className="p-5 font-normal text-center text-black">Rental & Staging</li>
                <li className="p-5 font-normal text-center text-black">Rental & Staging</li>
              </ul>
              <ul className="w-[50%]  overflow-y-auto p-5 gap-3">
                <li className="">MG9 Series</li>
                <li className="font-normal text-black ">Rental & Staging</li>
                <li className="font-normal text-black ">Rental & Staging</li>
                <li className="font-normal text-black ">Rental & Staging</li>
              </ul>
            </div>

            <div className="flex-col items-center justify-center hidden w-full font-normal text-black border-t p-14 md:flex text-md">
              <p>Pixel pitch: 2.9/3.9/5.9mm </p>
              <p>Cabinet size: 500*500*73mm</p>
            </div>
          </div>

          <div className="md:w-[58%] w-full border-l">
            <div className="flex flex-col-reverse justify-between w-full md:flex-row">
              <ul className="flex flex-row gap-3 p-5 overflow-x-auto overflow-y-auto md:overflow-y-auto md:flex-col md:overflow-x-visible">
                <li className="w-[49px]  md:w-full">
                  <img src="/images/list-product.png" alt="product 1" className="w-full" />
                </li>
                <li className="w-[49px]  md:w-full">
                  <img src="/images/list-product.png" alt="product 1" className="w-full" />
                </li>
                <li className="w-[49px]  md:w-full">
                  <img src="/images/list-product.png" alt="product 1" className="w-full" />
                </li>
                <li className="w-[49px]  md:w-full">
                  <img src="/images/list-product.png" alt="product 1" className="w-full" />
                </li>
              </ul>
              <img
                src="/images/product.png"
                alt="product"
                className=" h-[309px]  md:h-[409px] w-[450px] md:w-[550px]"
              />
            </div>

            <div className="flex-col w-full pt-5 border-t md:flex-row flex-between">
              <div className="flex flex-col gap-2 px-5 pb-5 w-full md:w-[80%]">
                <h4 className="text-xl font-bold">MG9 Series</h4>
                <p className="text-sm font-normal">
                  Upgraded version of flagship rental LED screen, Cover 100% of LED Rental Application, Indoor & Outdoor
                  Dual-use, Dance Floor, Excellent Display Effect, Better Heat Dissipation, Curved Splicing, Creative
                  Shape, Application Scenarios
                </p>
              </div>
              <div className="flex items-center justify-between w-full gap-5 ps-5 md:justify-end md:gap-0 md:w-min">
                <div className="flex-col items-start justify-center md:0 w-[90%] font-normal text-black  md:hidden text-sm">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
                <Link
                  to="/detail-product"
                  className="flex-col w-[8.2rem] h-[5.5rem] gap-1 md:gap-2 pt-0 md:pt-4 font-normal border-2 rounded-full border-primary md:border-slate-300 md:flex md:w-32 md:mr-0 mr-5 md:h-32 flex-center "
                >
                  <div className="hidden md:flex">
                    <img
                      src="/icons/arrow-right-rotate.svg"
                      alt="ivon left rotate"
                      className="w-10 text-black md:w-full "
                    />
                  </div>
                  <div className="w-full flex-center ps-2 md:hidden">
                    <img
                      src="/icons/mobile/arrow-left-blue.svg"
                      alt="ivon left rotate"
                      className="w-10 text-black md:w-full "
                    />
                  </div>
                  Detail
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full pb-5 md:pb-0 flex-center ">
          <Link
            to="/products"
            className="w-[90%] mx-auto py-2 mt-5 font-semibold text-center border-2 rounded-full md:w-60 md:px-12 button-primary border-primary"
          >
            See All Products
          </Link>
        </div>
      </section>

      <section className=" w-full h-min bg-[#F9F9FB] relative overflow-hidden">
        <button className="font-bold bg-[#F4F4F4] rounded-md p-2 mt-8 md:ml-10 ml-[6.5rem] mb-3 md:mb-0">
          Welcome to YesTech
        </button>
        <div className="w-full md:w-[85%] m-auto flex-between flex-col-reverse md:flex-row">
          <div className="flex flex-col items-start justify-center w-[90%] mx-auto  md:w-[60%] gap-4 md:gap-8 mt-10">
            <h2 className="text-4xl font-bold md:text-6xl">About Us</h2>
            <p className="md:text-lg text-sm font-normal w-full md:w-[80%]">
              YES TECH Team was founded in 2001, which specializes in LED screen manufacturing and solution providing.
              Our LED display solutions and products have gained global recognition, reaching 100+ countries and
              regions. YES TECH LED display solutions have showcased exceptional performance in prestigious events such
              as the 19th Asian Games, and iconic venues like the main stage of U2’s Tour at MSG Sphere, the super bowl
              LVIII, India, Indonesia, Japan G20 Summit, Qatar World Cup, Beijing Winter Olympics, Dubai World Expo,
              Russia World Cup, Brazil World Cup, and the London Olympics, etc.
            </p>
            <ul className="flex flex-col justify-start w-full gap-3 mt-4 md:gap-8">
              <div className="flex items-start justify-start w-full gap-5 ">
                <li className="text-[12px] list-about-us gap-5 md:gap-2 md:text-lg">
                  <img src="/icons/check-box.svg" className="list-item-about-us w-5 h-5 p-1 md:w-7 md:h-7 md:p-[7px]" />
                  Enterprise Tenet
                </li>
                <li className="text-[12px] list-about-us gap-5 md:gap-2 md:text-lg">
                  <img src="/icons/check-box.svg" className="list-item-about-us w-5 h-5 p-1 md:w-7 md:h-7 md:p-[7px]" />
                  Enterprise Aim
                </li>
              </div>
              <div className="flex items-start justify-start w-full gap-5 ">
                <li className="text-[12px] list-about-us gap-5 md:gap-2 md:text-lg">
                  <img src="/icons/check-box.svg" className="list-item-about-us w-5 h-5 p-1 md:w-7 md:h-7 md:p-[7px]" />
                  Enterprise Spirit
                </li>
                <li className="text-[12px] list-about-us gap-5 md:gap-2 md:text-lg">
                  <img src="/icons/check-box.svg" className="list-item-about-us w-5 h-5 p-1 md:w-7 md:h-7 md:p-[7px]" />
                  New Journey New Version
                </li>
              </div>
            </ul>
            <div className="flex items-start justify-start w-full ">
              <Link
                to="/about-us"
                className="w-[90%] mx-auto md:mx-0 py-2 mt-5 font-semibold text-center border-2 rounded-full md:w-60 md:px-12 button-primary border-primary"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="relative flex justify-end w-full md:w-[40%] ">
            <img
              src="/images/square-graphic-about-us.svg"
              alt="square graphic top"
              className="absolute md:block hidden -left-[5.3rem] -top-[4.3rem] "
            />

            <img
              src="/icons/mobile/corak-square-about.svg"
              alt="square graphic top"
              className="absolute md:hidden -left-1 -top-[2rem] "
            />
            <img src="/images/about-us.png" alt="about us image" className="relative z-20 w-full h-full px-5 md:px-0" />
            <img
              src="/images/sguare-graphic-bottom-about-us.svg"
              alt="square graphic bottom"
              className="absolute right-0 -bottom-8 md:-bottom-3 md:-right-16 "
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container pb-20">
          <h2 className="mb-8 mt-10 text-2xl font-bold text-center text-[#CCCCCC]">Case List</h2>
          <div className="w-full overflow-hidden h-min">
            <div className="flex justify-between w-full">
              <div className="items-center justify-center hidden md:flex">
                <img src="/icons/arrow-left-long.svg" alt="icon left long" className="w-full" />
              </div>
              {/* versi mobile */}
              <div className="flex-center md:hidden">
                <img src="/icons/mobile/arrow-left-long.svg" alt="icon-left long" className="w-full rotate-180" />
              </div>
              <h3 className="text-sm font-bold text-center md:text-4xl line-clamp-2">The Inchoen Asian Games</h3>
              <div className="items-center justify-center hidden md:flex">
                <img src="/icons/arrow-right-long.svg" alt="icon- ight long" className="w-full" />
              </div>
              {/* versi mobile */}
              <div className="flex-center md:hidden">
                <img src="/icons/mobile/arrow-left-long.svg" alt="icon-left long" className="w-full" />
              </div>
            </div>
            <div className="gap-2 mt-3 mb-5 md:mt-5 md:mb-10 left-32 bottom-8 flex-center">
              <span className="block w-2 h-2 rounded-full bg-primary"></span>
              <span className="block w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="block w-2 h-2 rounded-full bg-slate-300"></span>
            </div>

            <div className="flex flex-col items-start justify-between w-full md:flex-row ">
              <div className="w-full md:w-[70%] md:flex-row flex-col-reverse  bg-[#F9F9FB] flex justify-between">
                <ul className=" w-full md:w-[8%] flex flex-row justify-center items-center md:justify-start   mt-5 md:mt-0 md:flex-col gap-2 me-3">
                  <li>
                    <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                  </li>
                  <li>
                    <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                  </li>
                  <li>
                    <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                  </li>
                </ul>
                <div className="w-full h-auto">
                  <img src="/images/case-list.png" alt="image banner case list" className="w-full h-auto" />
                </div>
              </div>

              <div className="w-full md:w-[30%] flex flex-col items-start justify-center gap-2 md:gap-5 px-0 md:px-5 overflow-y-auto">
                <h3 className="text-2xl md:text-[2.5rem] font-bold leading-8 md:leading-[3rem] mt-5 md:mt-0">
                  The Inchoen Asian Games
                </h3>
                <ul className=" text-[#8B8B8B] text-sm font-normal">
                  <li>Location: Korea, Incheon</li>
                  <li>Product: MG7S Series</li>
                </ul>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur. Molestie risus aenean lorem nullam lacinia sagittis arcu. Amet
                  dis egestas faucibus netus ultricies pulvinar tempor luctus consectetur. Id eget bibendum commodo vel.
                  Sit velit habitant consectetur pellentesque. Lorem ipsum dolor sit amet consectetur. Molestie risus
                  aenean lorem nullam lacinia sagittis arcu. Amet dis egestas faucibus netus ultricies pulvinar tempor
                  luctus consectetur. Id eget bibendum commodo vel. Sit velit habitant consectetur pellentesque egestas
                  faucibus netus ultricies pulvinar tempor luctus consectetur. Id eget bibendum commodo vel. Sit velit
                  habitant consectetur pellentesque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden md:block">
          <img src="/images/corak-case-list.svg" alt="corak square case list bottom" />
        </div>
        {/* mobile */}
        <div className="absolute bottom-0 right-0 md:hidden">
          <img src="/icons/mobile/corak-square-case-list.svg" alt="corak square case list bottom" />
        </div>
      </section>
      <MapView />
    </>
  )
}

export default Home
