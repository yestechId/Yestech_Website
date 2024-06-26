import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const DetailProduct = () => {
  return (
    <div className="relative overflow-hidden">
      <header className="w-full relative h-[582px] md:h-[552px] overflow-hidden bg-[url('/images/detail-product/banner-mobile.svg')] md:bg-[url('/images/products/banner-product.svg')] bg-center bg-no-repeat bg-cover rounded-br-[50px]">
        <img
          src="/images/detail-product/bg-linear-banner.png"
          alt="liner background detail"
          className="absolute top-0 bottom-0 left-0 hidden md:block"
        />
        <div className="container flex-col-reverse w-full h-full flex-between md:flex-row ">
          <div className="flex flex-col w-full md:w-[50%] -top-10 md:-top-0 relative gap-3 md:mt-16 md:ps-10">
            <h2 className="font-bold text-white text-3xl  pb-0 md:pb-5 md:text-[5rem]">MG9 Series</h2>
            <div className="flex items-end justify-start ">
              <span className="w-40 h-[6px] bg-primary"></span>
              <span className="w-full h-[1px] bg-white"></span>
            </div>

            <ul className="flex flex-col gap-1 text-sm font-normal text-white list-disc md:gap-3 md:my-5 ps-4">
              <li>Upgraded version of flagship rental LED screen</li>
              <li>Pixel pitch: 2.9/3.9/5.9mm</li>
              <li>Cabinet size: 500*500*73mm</li>
              <li>Operating environment: Indoor & Outdoor</li>
            </ul>
            <button className="px-3 py-2 mt-5 font-semibold text-white transition-all border-2 border-white rounded-full hover:bg-primary hover:border-primary w-52 md:w-72">
              Request a Solition
            </button>
          </div>
          <div className=" flex items-center justify-end w-[80%]  md:w-[35%] mt-20 md:mt-0">
            <img src="/images/detail-product/product.png" className="w-full h-auto" />
          </div>
        </div>
      </header>

      <div className="md:w-[90%] mx-auto w-full">
        <section className="w-full">
          <h2 className="mt-10 mb-4  w-[90%] md:w-[80%] mx-auto text-xl font-bold text-center md:mt-20 md:text-3xl text-secondary">
            z Cover 100% of LED Rental Application
          </h2>
          <p className=" font-medium md:font-normal mb-5 text-sm  w-[90%] md:w-[80%] mx-auto leading-5 text-center md:text-[16px] text-normal text-secondary">
            Original of multi-function & multi-shapes <br /> Indoor & outdoor screen, dance floor, stadium screen, sky
            curtain...
          </p>
          <div className="flex-center w-full md:w-[75%] mx-auto">
            <img src="/images/detail-product/list-detail-product.png" alt="list detail" />
          </div>
        </section>

        <section className="w-full mt-10 ">
          <h2 className="mt-8 mb-4 text-xl mx-auto  w-[90%] md:w-[80%] font-bold text-center md:text-3xl text-secondary">
            Dance Floor
          </h2>
          <ul className="  w-[90%] md:w-[80%]  mx-auto mb-5 text-xs leading-5 text-center md:leading-6 text-normal md:text-[16px] text-secondary font-medium md:font-normal">
            <li>With MG patented dance floor mask, it can be used as dance floor(interactive optional).</li>
            <li>Wide viewing angle can be up to 160°, offering infinite possibility to shoot in any position.</li>
            <li>
              Compared with last version, the anti-fatigue performance is increased nearly fivefold, with a maximum
              load-bearing capacity of 4.6 tons.
            </li>
          </ul>
          <div className="flex-center scale-110 md:scale-100 w-full md:w-[75%] md:mx-auto">
            <img src="/images/detail-product/dance-floor.png" alt="list detail" />
          </div>
        </section>

        <section className="w-full my-10 bg-[#10121D] h-min rounded-none md:rounded-[35px]">
          <div className="w-full md:w-[80%] py-10 md:py-32 mx-auto h-full flex flex-col md:gap-10 gap-5">
            <div className="flex flex-col justify-between w-full px-5 md:flex-row md:px-0">
              <div className="flex gap-10 md:gap-20 flex-col w-full md:w-[50%] mb-5 md:mb-0">
                <h3 className=" text-2xl md:text-4xl  font-bold leading-[2rem] md:leading-[3rem] text-white">
                  The LED lamp thrus increased greatly compared with common cabinet
                </h3>
                <img src="/images/detail-product/stable.png" />
              </div>

              <div className="-mt-0 md:-mt-10 flex-center md:w-[40%] ">
                <img src="/images/detail-product/led-lamp.png" className="w-full h-auto" />
              </div>
            </div>
            <div className="flex-col-reverse w-full px-5 mt-10 md:mt-0 md:flex-row flex-between md:px-0 ">
              <div className="mt-5 flex-center md:mt-0">
                <img src="/images/detail-product/enhanced.png" className="w-full h-auto" />
              </div>
              <div className="flex flex-col items-start justify-center gap-5 text-white">
                <h3 className="text-3xl font-bold">Enhanced Structure</h3>
                <p className="text-xs font-light md:text-sm">
                  Hanging height can be reach 15m. (Refer to 6 times safety factor)
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-full md:w-[80%] flex md:flex-row flex-col justify-between items-center mt-10 md:mt-20 h-min">
          <div className="flex flex-col items-start justify-start w-[90%] mx-auto md:-[40%] gap-3 md:gap-5">
            <h3 className="text-2xl font-bold md:text-3xl text-secondary">Anti-collision Design</h3>
            <p className="text-sm font-normal md:text-lg text-secondary">
              The cabinet has protective corners (P2.9), thereby effectively protecting the LEDs on the edge.
            </p>
          </div>
          <div className="w-[60%] flex justify-end items-end mt-5 md:mt-0">
            <img src="/images/detail-product/detail-1.png" className="w-full h-auto" />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[90%] md:w-full bg-[url(/images/detail-product/bg-list-2.svg)] bg-cover bg-center bg-no-repeat rounded-lg md:rounded-[30px] mt-10  md:mt-20 h-min pb-10">
          <div className="w-[80%] mx-auto lex flex-col mt-10 md:mt-16">
            <div className="flex-col w-full gap-2 mb-10 flex-center">
              <h3 className="mb-5 text-2xl font-bold text-white md:text-3xl">Excellent Display Effect</h3>
              <ul className="flex-col gap-2 text-sm font-light text-white list-disc md:gap-1 flex-center opacity-70">
                <li>
                  U-shaped mask design, no color bias, no color bias, no color block, no distortion, offering a wider
                  coverage.
                </li>
                <li>3840-7680HZ high refresh rate.</li>
                <li>12000:1 high contrast ratio.</li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full md:items-end md:justify-end">
              <img src="/images/detail-product/list-2.png" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-full md:w-[80%] md:flex-row flex-col  flex justify-between items-center mt-10 md:mt-20 h-min">
          <div className="md:w-[60%] w-[50%] flex justify-start items-start">
            <img src="/images/detail-product/list-3.png" className="w-[439px] h-auto" />
          </div>
          <div className="flex flex-col items-center md:items-start justify-center md:justify-start w-[90%] mx-auto mt-5 md:mt-0 md:w-[40%] gap-5 md:gap-10">
            <h3 className="text-2xl font-bold md:text-3xl text-secondary">Better Heat Dissipation</h3>
            <ul className="w-[90%]  md:w-full flex-col gap-1 text-sm font-medium list-disc text-secondary flex-center ">
              <li>
                Dual heat dissipation: aluminum backplane & thermal balance system (optional), evenly distribute the
                heat of the LED lamp and IC
              </li>
              <li>
                arge-area heat dissipation: the integrated design of the back cover and heat dissipation function
                greatly increase the heat dissipation area, enhancing the display effect.
              </li>
            </ul>
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[80%] md:flex-row flex-col-reverse flex justify-between items-center mt-10 md:mt-20 h-min ">
          <div className="flex flex-col items-center md:items-start justify-start w-full md:w-[50%] gap-2">
            <h3 className="text-3xl font-bold text-secondary">Easy Maintenance</h3>
            <p className="text-sm font-normal text-center text-secondary">
              Modular design, wireless design of the interior cabinet, more safer and stable.
            </p>
          </div>
          <div className="md:w-[50%] w-[80%] mb-5 md:mb-0 flex justify-end items-end">
            <img src="/images/detail-product/list4.png" className="w-full h-auto" />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[90%] md:w-[80%] flex-center flex-col-reverse md:flex-col md:mt-20 h-min mt-10 ">
          <div className="flex-col w-full gap-5 mb-5 flex-center ">
            <h3 className="text-2xl font-bold text-center md:text-3xl text-secondary">Curved Splicing</h3>
            <p className="text-sm font-normal text-center text-secondary">
              With MG connector that can be customized at angle between -15 and +15 degrees (P2.9±5°), allowing for
              curved screen, S-shaped screen and ring-shaped screen.
            </p>
          </div>
          <div className="w-full flex-center">
            <img src="/images/detail-product/list-5.png" className="w-[840px] h-auto" />
          </div>
        </section>

        <section className="md:w-full w-[90%] overflow-auto mx-auto  bg-[url(/images/detail-product/bg-linear-banner-2.svg)] bg-cover bg-center bg-no-repeat rounded-xl md:rounded-[30px] mt-5 md:mt-20 pb-10  h-min">
          <div className="flex-col w-[90%] md:w-[80%] mx-auto  flex">
            <h2 className="mt-10 md:mt-20 mb-4 md:w-[20%] mx-auto text-2xl md:text-4xl font-bold text-center text-white">
              Creative Shape
            </h2>
            <p className="w-full mx-auto mb-5 text-sm font-normal leading-5 text-center text-white ">
              Combined with <span className="underline text-primary"> creative-extended series</span> , achieving
              various shapes such as letters, numbers, rounds, etc.
            </p>
            <div className="w-full scale-110 md:scale-100 flex-center">
              <img src="/images/detail-product/list-6.png" alt="list detail" />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="mt-10 mb-0 text-2xl font-bold text-center md:mb-4 md:text-3xl md:mt-20 text-secondary">
            Application Scenarios
          </h2>
          <p className="w-[90%] md:w-full mx-auto mb-5 leading-6 md:leading-5 text-center text-normal font-sm text-secondary">
            Indoor and outdoor concerts, sport events, award ceremonies, celebration meetings, etc.
          </p>
          <div className="flex-center md:w-[75%] w-full mx-auto">
            <img src="/images/detail-product/list-7.png" alt="list detail" className="w-full h-auto" />
          </div>
        </section>

        <section className="w-full overflow-auto mx-auto  bg-[url(/images/detail-product/bg-linear-banner-3.svg)] bg-cover bg-center bg-no-repeat rounded-none md:rounded-[30px] mt-10 md:mt-20 h-min">
          <div className="flex-col w-[80%] mx-auto mt-12 flex">
            <div className="flex flex-col items-center justify-between gap-5 md:gap-0 md:flex-row">
              <h2 className="text-2xl font-bold text-center text-white md:text-4xl ">PARAMETERS</h2>
              <button className="bg-gradient-to-br from-[#114BA9] to-[#4FC4EA]   gap-5  font-normal rounded-full text-sm flex justify-between items-center text-white py-3 px-10">
                DOWNLOAD
                <i className="font-normal text-md">
                  <FaArrowRight className="text-white -rotate-45" />
                </i>
              </button>
            </div>
          </div>
          <div className="w-full px-0 mb-5 -mt-5 md:mb-10 md:-mt-0 md:px-10 flex-center">
            <img
              src="/images/detail-product/tabel-parameters.png"
              alt="list detail"
              className="hidden w-full h-auto md:block"
            />
            <img
              src="/images/detail-product/tabel-parameters-mobile.png"
              alt="list detail"
              className="w-full h-auto md:hidden"
            />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[90%] md:w-[80%] flex-center flex-col my-10 md:my-20 h-min">
          <div className="flex-col w-full gap-5 mb-5 flex-center ">
            <h3 className="text-2xl font-bold text-center md:text-3xl text-secondary">RELATED PRODUCT & ACCESSORIES</h3>
          </div>
          <div className="grid grid-cols-2 gap-5 overflow-hidden md:gap-10 md:grid-cols-3 ">
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/detail-product/related-product-1.png"
                alt="product item"
                className=" h-[152px] md:h-[335px] w-full "
              />
              <div className="px-2 md:px-5">
                <h3 className="text-xl font-bold text-black md:text-2xl ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-[10px] font-semibold md:text-sm flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/detail-product/related-product-2.png"
                alt="product item"
                className=" h-[152px] md:h-[335px] w-full "
              />
              <div className="px-2 md:px-5">
                <h3 className="text-xl font-bold text-black md:text-2xl ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-[10px] font-semibold md:text-sm flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:h-[435px]  overflow-hidden  hidden md:flex bg-red-600  flex-col"
            >
              <img
                src="/images/detail-product/related-product-3.png"
                alt="product item"
                className=" h-[152px] md:h-[335px] w-full "
              />
              <div className="px-2 md:px-5">
                <h3 className="text-xl font-bold text-black md:text-2xl ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-[10px] font-semibold md:text-sm flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailProduct
