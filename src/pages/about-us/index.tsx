import { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Certificate from '../../components/organisms/Certificate'

const Product = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 320) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section id="about-us" className="relative overflow-hidden">
      <header className="w-full h-[391px]  bg-[url('/images/about-us/banner.svg')] bg-center bg-cover rounded-br-[50px]">
        <div className="container flex items-center justify-center w-full h-full px-16">
          <div className="flex flex-col w-[50%]">
            <h2 className="font-bold text-white text-[5rem]">About Us</h2>
          </div>
          <div className=" flex items-start justify-start w-[50%] flex-center ">
            <p className="text-lg font-medium text-white">The glory of YesTech shines all over the world.</p>
          </div>
        </div>
      </header>

      <div className="flex justify-between">
        <div className="relative flex items-start justify-between gap-5 w-[20%]">
          <div
            className={`${isScrolled ? 'fixed w-[20%]' : 'sticky w-full'}  top-20 left-0 z-40 ps-14 h-full px-2 pt-20 border-r-2`}
          >
            <ul className="flex flex-col w-full gap-3 px-5 bg-white ">
              <li className="p-3 text-center text-white rounded-sm bg-primary">Rental & Staging</li>
              <li className="p-3 text-center rounded-sm text-slate-400 ">Rental & Staging</li>
              <li className="p-3 text-center rounded-sm text-slate-400 ">Rental & Staging</li>
              <li className="p-3 text-center rounded-sm text-slate-400 ">Rental & Staging</li>
            </ul>
          </div>
        </div>

        <div className="relative w-[80%] ">
          <div className="w-full gap-5 pt-10 mb-20 px-14">
            <div className="flex items-start justify-between w-full">
              <div className="flex flex-col w-[55%]">
                <h2 className="text-5xl font-semibold mb-7 text-[#414141]">Company Profile</h2>
                <div className="font-normal text-[16px] text-[#444444] flex flex-col gap-4">
                  <p>
                    YES TECH Team was founded in 2001, which specializes in LED screen manufacturing and solution
                    providing. Our LED display solutions and products have gained global recognition, reaching 100+
                    countries and regions. YES TECH LED display solutions have showcased exceptional performance in
                    prestigious events such as the 19th Asian Games, and iconic venues like the main stage of U2’s Tour
                    at MSG Sphere, the super bowl LVIII, India, Indonesia, Japan G20 Summit, Qatar World Cup, Beijing
                    Winter Olympics, Dubai World Expo, Russia World Cup, Brazil World Cup, and the London Olympics, etc.
                  </p>

                  <p>
                    Headquartered at the Optoelectric Industrial Park in Changsha City, YES TECH has 3 overseas
                    warehouses, 2 overseas after-sales service centers and 1 overseas exhibit center. YES TECH also has
                    a dedicated R&D team with professional capabilities. Our state-of-the-art laboratory, certified by
                    CNAS, reflects our commitment to maintaining industrial excellence.
                  </p>
                  <p>
                    YES TECH has secured 130+ patents, including three PCT Invention Patents. We have also obtained
                    various certifications for the global market, including CCC, CE, RoHS, FCC, ETL, AEO, RCM, BIS, etc.
                  </p>
                </div>
              </div>
              <div className="w-[40%]  relative">
                <img src="/images/about-us/list-1.png" alt="company profile" className="w-full h-auto" />
                <button className="absolute top-0 flex font-semibold text-white -left-[4rem]">
                  <i className="px-5 py-3 bg-secondary flex-center">
                    <FaLongArrowAltRight className="w-6 h-6 " />
                  </i>
                  <span className="px-5 py-3 bg-primary">Get In Touch</span>
                </button>
              </div>
            </div>
            <div className="w-full mt-20 ">
              <ul className="gap-20 font-bold flex-center text-7xl text-primary">
                <li className="flex-col gap-3 flex-center">
                  2001
                  <p className="text-sm font-normal text-secondary">Company Founded</p>
                </li>
                <li className="flex-col gap-3 flex-center">
                  100+
                  <p className="text-sm font-normal text-secondary">Countries and regions</p>
                </li>
                <li className="flex-col gap-3 flex-center">
                  10000+
                  <p className="text-sm font-normal text-secondary">Global projects</p>
                </li>
                <li className="flex-col gap-3 flex-center">
                  130+
                  <p className="text-sm font-normal text-secondary">Patents</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-screen relative bg-[#10121D] flex justify-center items-start px-14 gap-20 py-32 w-full">
            <img src="/images/about-us/corak.svg" alt="corak" className="absolute top-0 left-0" />
            <div className="flex flex-col gap-2 w-[25%] ">
              <h3 className="text-6xl font-semibold text-white leading-[5rem]">Corporate Culture</h3>
              <p className="text-xl leading-6  text-[#9F9F9F] font-normal">
                Let's discuss what projects you have in mind
              </p>
            </div>
            <div className="w-[75%]  grid grid-cols-3">
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-gradient-to-br from-[#223DFE] to-[#4ECEDA] ">
                <p className="text-2xl font-semibold text-white">Enterprise Tenet</p>
                <p className="font-bold text-white opacity-50 text-8xl text-end">01</p>
              </div>
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-gradient-to-br from-[#4ECEDA] to-[#FFFFFF] ">
                <p className="text-2xl font-semibold text-[#414141]">Enterprise Spirit</p>
                <p className="font-bold text-secondary text-8xl text-end">02</p>
              </div>
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-[#10121D]"></div>
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-[#10121D]"></div>
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-gradient-to-br from-[#223DFE] to-[#4ECEDA] ">
                <p className="text-2xl font-semibold text-white">Enterprise Aim</p>
                <p className="font-bold text-white opacity-50 text-8xl text-end">03</p>
              </div>
              <div className="w-full flex flex-col gap-6 h-[254px]  p-8 bg-gradient-to-br from-[#4ECEDA] to-[#FFFFFF] ">
                <p className="text-2xl font-semibold text-secondary">New Journey New Vision</p>
                <p className="font-bold opacity-50 text-secondary text-8xl text-end">04</p>
              </div>
            </div>
          </div>

          <div className="w-full h-screen relative bg-[#10121D]">
            <div className="w-full h-[70px]  flex justify-start items-center bg-white">
              <button className="h-full px-16 text-xl font-bold text-white flex-center bg-primary tect-white">
                History
              </button>
              <ul className="gap-5 ps-8 flex-center">
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>{' '}
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
              </ul>
            </div>

            <div className="relative z-10 flex items-center justify-between w-full gap-10 py-16 px-14">
              <div className="flex-center">
                <img src="/icons/kerucut-left.svg" alt="icon kerucut left" className="w-full rotate-180" />
              </div>
              <div className="flex gap-8">
                <img src="/images/about-us/carousel-list.png" className="w-[560px] h-auto" />
                <p className="pt-5 text-lg font-normal text-white line-clamp-4">
                  Changsa Yasheng Technology & Development Co., LTD was Founded in 2001
                </p>
              </div>
              <div className="flex-center">
                <img src="/icons/kerucut-left.svg" alt="icon kerucut left" className="w-full" />
              </div>
              <p className="absolute top-[72%] left-[63%] z-[-1] -translate-x-[50%] -translate-y-[50%] text-[#20243A] text-[20rem] font-bold">
                2001
              </p>
            </div>
          </div>

          <div className="relative flex items-start justify-center w-full h-screen gap-10 py-32 bg-white px-14">
            <div className="w-[30%] flex flex-col gap-5 pt-10">
              <h3 className="text-3xl font-bold leading-10 text-secondary">
                Warehouse <br /> and Services Center
              </h3>
              <p className="text-[16px] font-normal text-[#444444]">
                Pergudangan Eraprima Industrial Park No C8. Jl. KH. Agus Salim No.2, Tangerang, Banten 15141
              </p>
              <Link to={'/'} className="flex items-center gap-3 text-[16px] font-norma text-primary ">
                See on Google Maps
                <div className="flex-center">
                  <img src="/icons/arrow-right-long-blue.svg" alt="icon right right blue" className="w-full " />
                </div>
              </Link>
            </div>

            <div className="w-[70%] flex items-center justify-between px-5 ">
              <div className="mb-24 flex-center">
                <img src="/icons/arrow-right-grey.svg" alt="icon right right grey" className="w-full " />
              </div>
              <div className="flex flex-col gap-5">
                <img src="/images/about-us/carousel-service.png" className="w-[609px] h-auto" />
                <ul className="flex items-center gap-3 justify-star">
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[60px] h-auto" />
                  </li>
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[60px] h-auto" />
                  </li>
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[60px] h-auto" />
                  </li>

                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[60px] h-auto" />
                  </li>
                </ul>
              </div>
              <div className="mb-24 flex-center">
                <img src="/icons/arrow-right-grey.svg" alt="icon right right grey" className="w-full rotate-180" />
              </div>
            </div>
          </div>

          <Certificate />
        </div>
      </div>
    </section>
  )
}

export default Product
