import { FaArrowRight } from 'react-icons/fa'

const DetailProduct = () => {
  return (
    <div className="relative">
      <header className="w-full relative h-[552px] overflow-hidden bg-[url('/images/products/banner-product.svg')] bg-cover rounded-br-[50px]">
        <img
          src="/images/detail-product/bg-linear-banner.png"
          alt="liner background detail"
          className="absolute top-0 bottom-0 left-0"
        />
        <div className="container w-full h-full flex-between">
          <div className="flex flex-col w-[50%] relative gap-3 mt-16 ps-10">
            <h2 className="font-bold text-white text-[5rem]">MG9 Series</h2>
            <div className="flex items-end justify-start ">
              <span className="w-40 h-[6px] bg-primary"></span>
              <span className="w-full h-[1px] bg-white"></span>
            </div>

            <ul className="flex flex-col gap-3 my-5 text-sm font-normal text-white list-disc ps-4">
              <li>Upgraded version of flagship rental LED screen</li>
              <li>Pixel pitch: 2.9/3.9/5.9mm</li>
              <li>Cabinet size: 500*500*73mm</li>
              <li>Operating environment: Indoor & Outdoor</li>
            </ul>
            <button className="px-3 py-2 mt-5 font-semibold text-white transition-all border-2 border-white rounded-full hover:bg-primary hover:border-primary w-72">
              Request a Solition
            </button>
          </div>
          <div className=" flex items-center justify-end w-[50%] ">
            <img src="/images/detail-product/product.png" className="w-[507px]" />
          </div>
        </div>
      </header>

      <div className="container">
        <section className="w-full">
          <h2 className="mt-20 mb-4 text-3xl font-bold text-center text-secondary">
            Cover 100% of LED Rental Application
          </h2>
          <p className="w-full mx-auto mb-5 leading-5 text-center text-normal font-sm text-secondary">
            Original of multi-function & multi-shapes <br /> Indoor & outdoor screen, dance floor, stadium screen, sky
            curtain...
          </p>
          <div className="flex-center w-[75%] mx-auto">
            <img src="/images/detail-product/list-detail-product.png" alt="list detail" />
          </div>
        </section>

        <section className="w-full mt-20">
          <h2 className="mt-8 mb-4 text-3xl font-bold text-center text-secondary">Dance Floor</h2>
          <ul className="w-full mx-auto mb-5 leading-6 text-center text-normal font-sm text-secondary">
            <li>With MG patented dance floor mask, it can be used as dance floor(interactive optional).</li>
            <li>Wide viewing angle can be up to 160°, offering infinite possibility to shoot in any position.</li>
            <li>
              Compared with last version, the anti-fatigue performance is increased nearly fivefold, with a maximum
              load-bearing capacity of 4.6 tons.
            </li>
          </ul>
          <div className="flex-center w-[75%] mx-auto">
            <img src="/images/detail-product/dance-floor.png" alt="list detail" />
          </div>
        </section>

        <section className="w-full my-10 bg-[#10121D] h-[833px] rounded-[35px]">
          <div className="w-[80%] py-32 mx-auto h-full flex flex-col gap-10">
            <div className="flex justify-between w-full ">
              <div className="flex gap-20 flex-col w-[50%]">
                <h3 className="text-4xl font-bold leading-[3rem] text-white">
                  The LED lamp thrus increased greatly compared with common cabinet
                </h3>
                <img src="/images/detail-product/stable.png" />
              </div>
              <div className="-mt-10">
                <img src="/images/detail-product/led-lamp.png" className="w-[432px] h-[329px]" />
              </div>
            </div>
            <div className="w-full flex-between">
              <div>
                <img src="/images/detail-product/enhanced.png" className="w-[431px] h-[258px]" />
              </div>
              <div className="flex flex-col items-start justify-center gap-5 text-white">
                <h3 className="text-3xl font-bold">Enhanced Structure</h3>
                <p className="font-light">Hanging height can be reach 15m. (Refer to 6 times safety factor)</p>
              </div>
            </div>
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[80%] flex justify-between items-center mt-20 h-[50vh]">
          <div className="flex flex-col items-start justify-start w-[40%] gap-5">
            <h3 className="text-3xl font-bold text-secondary">Anti-collision Design</h3>
            <p className="text-lg font-normal text-secondary">
              The cabinet has protective corners (P2.9), thereby effectively protecting the LEDs on the edge.
            </p>
          </div>
          <div className="w-[60%] flex justify-end items-end">
            <img src="/images/detail-product/detail-1.png" className="w-[439px] h-auto" />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-full bg-[url(/images/detail-product/bg-list-2.svg)] bg-cover bg-center bg-no-repeat rounded-[30px]  mt-20 h-[80vh]">
          <div className="w-[80%] mx-auto lex flex-col  mt-16">
            <div className="flex-col w-full gap-2 mb-10 flex-center">
              <h3 className="mb-5 text-3xl font-bold text-white">Excellent Display Effect</h3>
              <ul className="flex-col gap-1 text-sm font-light text-white list-disc flex-center opacity-70">
                <li>
                  U-shaped mask design, no color bias, no color bias, no color block, no distortion, offering a wider
                  coverage.
                </li>
                <li>3840-7680HZ high refresh rate.</li>
                <li>12000:1 high contrast ratio.</li>
              </ul>
            </div>
            <div className="flex items-end justify-end w-full">
              <img src="/images/detail-product/list-2.png" className="w-full h-auto" />
            </div>
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[80%]  flex justify-between items-center mt-20 h-[50vh]">
          <div className="w-[60%] flex justify-start items-start">
            <img src="/images/detail-product/list-3.png" className="w-[439px] h-auto" />
          </div>
          <div className="flex flex-col items-start  justify-start w-[40%] gap-10">
            <h3 className="text-3xl font-bold text-secondary">Better Heat Dissipation</h3>
            <ul className="flex-col gap-1 text-sm font-medium list-disc text-secondary flex-center ">
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

        <section className=" overflow-auto mx-auto w-[80%] flex justify-between items-center mt-20 h-[50vh]">
          <div className="flex flex-col items-start justify-start w-[50%] gap-2">
            <h3 className="text-3xl font-bold text-secondary">Easy Maintenance</h3>
            <p className="text-sm font-normal text-secondary">
              Modular design, wireless design of the interior cabinet, more safer and stable.
            </p>
          </div>
          <div className="w-[50%] flex justify-end items-end">
            <img src="/images/detail-product/list4.png" className="w-[439px] h-auto" />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[80%] flex-center flex-col mt-20 h-[50vh]">
          <div className="flex-col w-full gap-5 mb-5 flex-center ">
            <h3 className="text-3xl font-bold text-secondary">Curved Splicing</h3>
            <p className="text-sm font-normal text-secondary">
              With MG connector that can be customized at angle between -15 and +15 degrees (P2.9±5°), allowing for
              curved screen, S-shaped screen and ring-shaped screen.
            </p>
          </div>
          <div className="w-full flex-center">
            <img src="/images/detail-product/list-5.png" className="w-[840px] h-auto" />
          </div>
        </section>

        <section className="w-full overflow-auto mx-auto  bg-[url(/images/detail-product/bg-linear-banner-2.svg)] bg-cover bg-center bg-no-repeat rounded-[30px]  mt-20 h-[80vh]">
          <div className="flex-col w-[80%] mx-auto mt-16 lex">
            <h2 className="mt-20 mb-4 text-4xl font-bold text-center text-white">
              Creative <br /> Shape
            </h2>
            <p className="w-full mx-auto mb-5 text-sm font-normal leading-5 text-center text-white ">
              Combined with <span className="underline text-primary"> creative-extended series</span> , achieving
              various shapes such as letters, numbers, rounds, etc.
            </p>
            <div className="w-full flex-center">
              <img src="/images/detail-product/list-6.png" alt="list detail" />
            </div>
          </div>
        </section>

        <section className="w-full">
          <h2 className="mt-20 mb-4 text-3xl font-bold text-center text-secondary">Application Scenarios</h2>
          <p className="w-full mx-auto mb-5 leading-5 text-center text-normal font-sm text-secondary">
            Indoor and outdoor concerts, sport events, award ceremonies, celebration meetings, etc.
          </p>
          <div className="flex-center w-[75%] mx-auto">
            <img src="/images/detail-product/list-7.png" alt="list detail" />
          </div>
        </section>

        <section className="w-full overflow-auto mx-auto  bg-[url(/images/detail-product/bg-linear-banner-3.svg)] bg-cover bg-center bg-no-repeat rounded-[30px]  mt-20 h-min">
          <div className="flex-col w-[80%] mx-auto mt-12 lex">
            <div className="flex items-center justify-between">
              <h2 className="text-4xl font-bold text-center text-white ">PARAMETERS</h2>
              <button className="bg-gradient-to-br from-[#114BA9] to-[#4FC4EA]   gap-5  font-normal rounded-full text-sm flex justify-between items-center text-white py-3 px-10">
                DOWNLOAD
                <i className="font-normal text-md">
                  <FaArrowRight className="text-white -rotate-45" />
                </i>
              </button>
            </div>
          </div>
          <div className="w-full px-10 mb-10 flex-center">
            <img src="/images/detail-product/tabel-parameters.png" alt="list detail" />
          </div>
        </section>

        <section className=" overflow-auto mx-auto w-[80%] flex-center flex-col my-20 h-min">
          <div className="flex-col w-full gap-5 mb-5 flex-center ">
            <h3 className="text-3xl font-bold text-secondary">RELATED PRODUCT & ACCESSORIES</h3>
          </div>
          <div className="grid grid-cols-3 gap-10 overflow-hidden ">
            <div className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col">
              <img
                src="/images/detail-product/related-product-1.png"
                alt="product item"
                className="h-[335px] w-full "
              />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </div>

            <div className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col">
              <img
                src="/images/detail-product/related-product-2.png"
                alt="product item"
                className="   h-[335px] w-full "
              />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG7S Series - Straight Cabinet </h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </div>

            <div className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col">
              <img
                src="/images/detail-product/related-product-3.png"
                alt="product item"
                className="   h-[335px] w-full "
              />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default DetailProduct
