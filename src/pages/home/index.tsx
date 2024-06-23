import React from 'react'
import MapView from '../../components/organisms/MapView'
import { Link } from 'react-router-dom'
const Home: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen xs:bg-[url('/images/home/bg-banner-mobile.svg')]   md:bg-[url('/images/banner-home.svg')] bg-cover rounded-br-[50px]"
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

      <section className="container w-full h-[761px]  overflow-hidden">
        <h2 className="my-8 text-3xl font-bold text-center text-[#CCCCCC]">Products</h2>

        <div className="flex flex-col w-full md:flex-row ">
          {/* dekstop */}
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

            <div className="flex-col items-center justify-center hidden w-full p-5 font-normal text-black border-t md:flex text-md">
              <p>Pixel pitch: 2.9/3.9/5.9mm </p>
              <p>Cabinet size: 500*500*73mm</p>
            </div>
          </div>

          {/* mobile */}

          <div className="md:w-[58%] w-full border-l">
            <div className="flex flex-col w-full md:flex-row ">
              <ul className="flex flex-row gap-3 p-5 overflow-y-auto md:flex-col ">
                <li className="">
                  <img src="/images/list-product.png" alt="product 1" />
                </li>
                <li className="">
                  <img src="/images/list-product.png" alt="product 1" />
                </li>
                <li className="">
                  <img src="/images/list-product.png" alt="product 1" />
                </li>
                <li className="">
                  <img src="/images/list-product.png" alt="product 1" />
                </li>
              </ul>
              <img src="/images/product.png" alt="product" className=" h-[409px] w-[550px]" />
            </div>

            <div className="w-full pt-5 border-t flex-between">
              <div className="flex flex-col gap-2 px-5 pb-5 w-[80%]">
                <h4 className="text-xl font-bold">MG9 Series</h4>
                <p className="text-sm font-normal">
                  Upgraded version of flagship rental LED screen, Cover 100% of LED Rental Application, Indoor & Outdoor
                  Dual-use, Dance Floor, Excellent Display Effect, Better Heat Dissipation, Curved Splicing, Creative
                  Shape, Application Scenarios
                </p>
              </div>
              <Link
                to="/detail-product"
                className="flex flex-col w-32 h-32 gap-2 pt-4 font-normal border-2 rounded-full flex-center"
              >
                <i className="text-4xl font-normal">
                  <img src="/icons/arrow-right-rotate.svg" alt="ivon left rotate" className="w-full text-black " />
                </i>
                Detail
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full flex-center">
          <Link
            to="/products"
            className="px-12 py-2 mt-5 font-semibold border-2 rounded-full button-primary border-primary "
          >
            See All Products
          </Link>
        </div>
      </section>

      <section className=" w-full h-[840px] bg-[#F9F9FB] relative overflow-hidden">
        <button className="font-bold bg-[#F4F4F4] rounded-md p-2 mt-8 ml-10">Welcome to YesTech</button>
        <div className="w-[85%] m-auto flex-between ">
          <div className="flex flex-col items-start justify-center w-[60%] gap-8 mt-10">
            <h2 className="text-6xl font-bold">About Us</h2>
            <p className="text-lg font-normal w-[80%]">
              YES TECH Team was founded in 2001, which specializes in LED screen manufacturing and solution providing.
              Our LED display solutions and products have gained global recognition, reaching 100+ countries and
              regions. YES TECH LED display solutions have showcased exceptional performance in prestigious events such
              as the 19th Asian Games, and iconic venues like the main stage of U2’s Tour at MSG Sphere, the super bowl
              LVIII, India, Indonesia, Japan G20 Summit, Qatar World Cup, Beijing Winter Olympics, Dubai World Expo,
              Russia World Cup, Brazil World Cup, and the London Olympics, etc.
            </p>
            <ul className="flex flex-col justify-start w-full gap-8 mt-4">
              <div className="flex items-start justify-start w-full gap-5 ">
                <li className="list-about-us">
                  <img src="/icons/check-box.svg" className="list-item-about-us" />
                  Enterprise Tenet
                </li>
                <li className="list-about-us">
                  <img src="/icons/check-box.svg" className="list-item-about-us" />
                  Enterprise Aim
                </li>
              </div>
              <div className="flex items-start justify-start w-full gap-5 ">
                <li className="list-about-us">
                  <img src="/icons/check-box.svg" className="list-item-about-us" />
                  Enterprise Spirit
                </li>
                <li className="list-about-us">
                  <img src="/icons/check-box.svg" className="list-item-about-us" />
                  New Journey New Version
                </li>
              </div>
            </ul>
            <Link
              to="/about-us"
              className="px-10 py-1 mt-5 text-lg font-semibold border-2 rounded-full button-primary text-primary border-primary"
            >
              About Us
            </Link>
          </div>
          <div className="relative flex justify-end w-[40%] ">
            <img
              src="/images/square-graphic-about-us.svg"
              alt="square graphic top"
              className="absolute -left-[5.3rem] -top-[4.3rem] "
            />
            <img src="/images/about-us.png" alt="about us image" className="relative z-20 w-full h-full " />
            <img
              src="/images/sguare-graphic-bottom-about-us.svg"
              alt="square graphic bottom"
              className="absolute -bottom-3 -right-16 "
            />
          </div>
        </div>
      </section>

      <section className="relative">
        <div className="container">
          <h2 className="mb-8 mt-10 text-2xl font-bold text-center text-[#CCCCCC]">Case List</h2>
          <div className="h-[861px] overflow-hidden  w-full">
            <div className="flex justify-between w-full">
              <div className="flex-center">
                <img src="/icons/arrow-left-long.svg" alt="icon left long" className="w-full" />
              </div>
              <h3 className="text-4xl font-bold text-center line-clamp-2">The Inchoen Asian Games</h3>
              <div className="flex-center">
                <img src="/icons/arrow-right-long.svg" alt="icon- ight long" className="w-full" />
              </div>
            </div>
            <div className="gap-2 mt-5 mb-10 left-32 bottom-8 flex-center">
              <span className="block w-2 h-2 rounded-full bg-primary"></span>
              <span className="block w-2 h-2 rounded-full bg-slate-300"></span>
              <span className="block w-2 h-2 rounded-full bg-slate-300"></span>
            </div>
            <div className="flex items-start justify-between w-full">
              <ul className="w-[5%] flex flex-col gap-2 me-3">
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" />
                </li>
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" />
                </li>
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" />
                </li>
              </ul>
              <div className="w-[95%]  bg-[#F9F9FB] flex justify-between">
                <div className="w-[70 %]">
                  <img src="/images/case-list.png" alt="image banner case list" className="w-full h-auto" />
                </div>

                <div className="w-[30%] h-[618px] overflow-y-auto flex flex-col items-start justify-center gap-5 px-5">
                  <h3 className="text-[2.5rem] font-bold  leading-[3rem]">The Inchoen Asian Games</h3>
                  <ul className=" text-[#8B8B8B] text-sm font-normal">
                    <li>Location: Korea, Incheon</li>
                    <li>Product: MG7S Series</li>
                  </ul>
                  <p className="text-sm font-normal">
                    Lorem ipsum dolor sit amet consectetur. Molestie risus aenean lorem nullam lacinia sagittis arcu.
                    Amet dis egestas faucibus netus ultricies pulvinar tempor luctus consectetur. Id eget bibendum
                    commodo vel. Sit velit habitant consectetur pellentesque. Lorem ipsum dolor sit amet consectetur.
                    Molestie risus aenean lorem nullam lacinia sagittis arcu. Amet dis egestas faucibus netus ultricies
                    pulvinar tempor luctus consectetur. Id eget bibendum commodo vel. Sit velit habitant consectetur
                    pellentesque egestas faucibus netus ultricies pulvinar tempor luctus consectetur. Id eget bibendum
                    commodo vel. Sit velit habitant consectetur pellentesque.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img src="/images/corak-case-list.svg" alt="corak square case list bottom" />
        </div>
      </section>
      <MapView />
    </>
  )
}

export default Home
