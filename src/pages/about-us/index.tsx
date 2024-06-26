import { useEffect, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Certificate from '../../components/organisms/Certificate'

const AboutUs = () => {
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
      <header className="w-full  h-[351px] md:h-[391px]  bg-[url('/images/about-us/banner-mobile.svg')] md:bg-[url('/images/about-us/banner.svg')] bg-center bg-cover rounded-br-[50px]">
        <div className="container flex flex-col items-center justify-center w-full h-full gap-5 px-0 md:px-16 md:flex-row md:gap-0">
          <div className="flex flex-col w-full md:w-[50%]">
            <h2 className="font-bold md:text-left text-center text-white text-5xl lg:text-[5rem]">About Us</h2>
          </div>
          <div className=" flex items-start justify-start w-full md:w-[50%] flex-center ">
            <p className="text-sm font-medium text-center text-white md:text-left md:text-lg">
              The glory of YesTech shines all over the world.
            </p>
          </div>
        </div>
      </header>

      <div className="flex flex-col justify-between md:flex-row">
        <div className="relative flex items-  start justify-between gap-5 w-full  md:w-[30%] lg:w-[20%] bg-white">
          <div
            className={`${isScrolled ? 'md:fixed static w-full md:w-[30%] lg:w-[20%]' : 'md:sticky static w-full'}  top-0 md:top-24 lg:top-20 left-0 z-40 ps-0 md:ps-10 lg:ps-14 h-full px-2 lg:pt-20 pt-0 border-r-2`}
          >
            <ul className="flex flex-row w-full gap-3 px-0 overflow-x-scroll bg-white lg:overflow-x-visible md:px-5 md:flex-col ">
              <li className="flex-shrink-0 p-3 text-center text-white rounded-sm bg-primary">Company Profile</li>
              <li className="flex-shrink-0 p-3 text-center rounded-sm text-slate-400 ">Corporate Culture</li>
              <li className="flex-shrink-0 p-3 text-center rounded-sm text-slate-400 ">History</li>
              <li className="flex-shrink-0 p-3 text-center rounded-sm text-slate-400 ">Rental & Staging</li>
            </ul>
          </div>
        </div>

        <div className="relative w-full md:w-[70%] lg:w-[80%] ">
          <div className="w-full gap-5 px-5 pt-5 mb-20 lg:pt-10 lg:px-14">
            <div className="flex flex-col items-start justify-between w-full lg:flex-row">
              <div className="flex flex-col w-full md:w-[80%] lg:w-[55%]">
                <h2 className="text-4xl  md:text-5xl font-semibold mb-5 md:mb-7 text-[#414141]">Company Profile</h2>
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
              <div className=" w-[80%] md:w-[70%] ms-16 lg:ms-0 lg:w-[40%] mt-5  lg:mt-0  relative">
                <img src="/images/about-us/list-1.png" alt="company profile" className="w-full h-auto" />
                <button className="absolute top-0 flex font-semibold text-white -left-[4rem]">
                  <i className="px-5 py-3 bg-secondary flex-center">
                    <FaLongArrowAltRight className="w-6 h-6 " />
                  </i>
                  <span className="px-5 py-3 bg-primary">Get In Touch</span>
                </button>
              </div>
            </div>
            <div className="w-full mt-10 lg:mt-20 ">
              <ul className="grid items-center justify-center grid-cols-2 gap-5 text-3xl font-bold lg:flex lg:gap-20 md:justify-center lg:text-7xl text-primary">
                <li className="flex flex-col items-center justify-start gap-3 md:justify-center ">
                  2001
                  <p className="text-sm font-normal text-secondary">Company Founded</p>
                </li>
                <li className="flex flex-col items-center justify-start gap-3 md:justify-center">
                  100+
                  <p className="text-sm font-normal text-secondary">Countries and regions</p>
                </li>
                <li className="flex flex-col items-center justify-start gap-3 md:justify-center">
                  10000+
                  <p className="text-sm font-normal text-secondary">Global projects</p>
                </li>
                <li className="flex flex-col items-center justify-start gap-3 md:justify-center">
                  130+
                  <p className="text-sm font-normal text-secondary">Patents</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="h-[80vh] lg:h-screen relative bg-[#10121D] flex justify-center items-start lg:flex-row flex-col md:px-14 px-5 gap-5 md:gap-20 py-5 lg:py-32 w-full">
            <img src="/images/about-us/corak.svg" alt="corak" className="absolute top-0 left-0" />
            <div className="flex flex-col gap-2 w-full lg:w-[25%] ">
              <h3 className="text-5xl lg:text-6xl font-semibold text-white leading-[4rem] md:leading-[5rem]">
                Corporate Culture
              </h3>
              <p className="text-xl leading-6 md:my-0 my-3   text-[#9F9F9F] font-normal">
                Let's discuss what projects you have in mind
              </p>
            </div>
            <div className="lg:w-[75%] w-full  grid grid-cols-3">
              <div className="w-full flex flex-col gap-1 lg:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-gradient-to-br from-[#223DFE] to-[#4ECEDA] ">
                <p className="text-sm font-bold text-white md:font-semibold md:text-xl lg:text-2xl">Enterprise Tenet</p>
                <p className="text-4xl font-bold text-white opacity-50 md:text-8xl text-end ">01</p>
              </div>
              <div className="w-full flex flex-col gap-1 md:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-gradient-to-br from-[#4ECEDA] to-[#FFFFFF] ">
                <p className="text-sm md:text-xl lg:text-2xl font-bold md:font-semibold text-[#414141]">
                  Enterprise Spirit
                </p>
                <p className="text-4xl font-bold text-secondary md:text-8xl text-end">02</p>
              </div>
              <div className="w-full flex flex-col gap-1 md:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-[#10121D]"></div>
              <div className="w-full flex flex-col gap-1 md:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-[#10121D]"></div>
              <div className="w-full flex flex-col gap-1 md:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-gradient-to-br from-[#223DFE] to-[#4ECEDA] ">
                <p className="text-sm font-bold text-white md:font-semibold md:text-xl lg:text-2xl">Enterprise Aim</p>
                <p className="text-4xl font-bold text-white opacity-50 md:text-8xl text-end">03</p>
              </div>
              <div className="w-full flex flex-col gap-1 md:gap-6 h-[106px] md:h-[206px] lg:h-[254px] p-3 lg:p-8 bg-gradient-to-br from-[#4ECEDA] to-[#FFFFFF] ">
                <p className="text-sm font-bold md:text-lg md:font-semibold lg:text-2xl text-secondary">
                  New Journey New Vision
                </p>
                <p className="text-4xl font-bold opacity-50 text-secondary md:text-8xl text-end">04</p>
              </div>
            </div>
          </div>

          <div className="w-full h-min pb-10 relative bg-[#10121D]">
            <div className="w-full h-[48px] lg:h-[70px]  flex justify-start items-center bg-white">
              <button className="h-full px-8 text-xl font-bold text-white md:px-16 flex-center bg-primary tect-white">
                History
              </button>
              <ul className="gap-3 md:gap-5 ps-3 md:ps-8 flex-center">
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-8 md:w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-8 md:w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>{' '}
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-8 md:w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-8 md:w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
                <li>2021</li>
                <div className="flex-center">
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                  <span className="block w-8 md:w-28 h-[1px] bg-secondary "></span>
                  <span className="block w-2 h-2 rounded-full bg-primary"></span>
                </div>
              </ul>
            </div>

            <div className="relative z-10 flex items-center justify-between w-full gap-10 px-5 py-16 md:px-14">
              <div className="items-center justify-center hidden lg:flex">
                <img src="/icons/kerucut-left.svg" alt="icon kerucut left" className="w-full rotate-180" />
              </div>
              <div className="flex flex-col gap-5 md:gap-8 lg:flex-row">
                <img src="/images/about-us/carousel-list.png" className="w-[560px] h-auto" />
                <p className="pt-0 text-lg font-normal text-white md:pt-5 line-clamp-4">
                  Changsa Yasheng Technology & Development Co., LTD was Founded in 2001
                </p>
                <div className="w-[90%] md:hidden mx-auto  flex  items-center mt-20 justify-between gap-2 ">
                  <div className="flex items-center justify-center md:hidden">
                    <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full" />
                  </div>
                  <div className="gap-2 flex-center">
                    <span className="block w-10 h-[6px] rounded-full bg-primary"></span>
                    <span className="block w-2 h-2 rounded-full bg-slate-200"></span>
                    <span className="block w-2 h-2 rounded-full bg-slate-200"></span>
                  </div>
                  <div className="flex items-center justify-center md:hidden">
                    <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full rotate-180" />
                  </div>
                </div>
              </div>

              <div className="items-center justify-center hidden lg:flex">
                <img src="/icons/kerucut-left.svg" alt="icon kerucut left" className="w-full" />
              </div>
              <p className="absolute  top-[80%] md:top-[72%] left-[50%] md:left-[63%] z-[-1] -translate-x-[50%] -translate-y-[50%] text-[#20243A] text-[13rem] md:text-[20rem] font-bold">
                2001
              </p>
            </div>
          </div>

          <div className="relative flex flex-col items-start justify-center w-full gap-10 px-5 py-10 bg-white lg:py-32 h-min lg:flex-row lg:px-14">
            <div className="w-full lg:w-[30%] flex flex-col gap-5 lg:pt-10">
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

            <div className="w-full lg:w-[70%] flex items-center justify-between px-0 md:px-5 gap-5">
              <div className="items-center justify-center hidden mb-24 md:flex">
                <img src="/icons/arrow-right-grey.svg" alt="icon right right grey" className="w-full " />
              </div>
              <div className="flex flex-col w-full gap-5">
                <div className="w-">
                  <img src="/images/about-us/carousel-service.png" className="w-full h-auto" />
                </div>

                <ul className="flex items-center gap-3 justify-star">
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[45px] md:w-[60px] h-auto" />
                  </li>
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[45px] md:w-[60px] h-auto" />
                  </li>
                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[45px] md:w-[60px] h-auto" />
                  </li>

                  <li>
                    <img src="/images/about-us/thumnuil-carousel-service.png" className="w-[45px] md:w-[60px] h-auto" />
                  </li>
                </ul>
              </div>
              <div className="items-center justify-center hidden mb-24 md:flex">
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

export default AboutUs
