import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <>
      <header className="w-full h-[351px] md:h-[391px] bg-center xs:bg-[url('/images/products/banner-product-mobile.svg')]   md:bg-[url('/images/products/banner-product.svg')] bg-cover rounded-br-[50px]">
        <div className="container flex-col w-full h-full pt-8 flex-between md:flex-row md:pt-0">
          <div className="flex flex-col w-full  md:w-[45%] gap-3 mt-16 ps-0 md:ps-10 text-center md:text-left">
            <h2 className="font-bold text-white text-3xl  md:text-5xl lg:text-[5rem] md:mb-5  mb-0">Products</h2>
            <p className="text-white text-center font-semibold w-full text-sm md:text-[15px] md:w-[90%] lg:w-[70%]">
              YES TECH offers a wide range of competitive and cut-edge LED displays to meet your diverse needs.
            </p>
          </div>

          <div className="relative  flex items-center justify-end w-full md:w-[55%] gap-10 pt-0 md:pt-16 ">
            <img
              src="/images/products/product-display-banner.svg"
              className="absolute left-0 z-10 w-[238px] md:w-[339px]  lg:w-[539px] md:-mt-0 -mt-32"
            />
            <img
              src="/images/products/product-display-banner-right.svg"
              className="absolute right-0 md:-mt-0 -mt-32 w-[158px] lg:w-[389px] md:w-[200px] scale-100 lg:scale-100 md:scale-125"
            />
          </div>
        </div>
      </header>

      <section className="flex overflow-hidden flex-col items-start justify-between w-full gap-5 pt-8 md:w-[90%] mx-auto md:flex-row">
        {/* versi mobile */}
        <div className="relative flex justify-end w-full md:hidden">
          <input
            type="search"
            placeholder="Search Global"
            className="flex justify-end w-[90%] mx-auto md:w-[30%] border border-[#BCBCBC] rounded-full py-2 ps-4 pe-10 outline-none "
          />
          <div className="absolute text-center right-7 top-3 ">
            <img src="/icons/search.svg" alt="search icon" className="w-full" />
          </div>
        </div>
        <div className="w-full md:w-[30%] lg:w-[20%] overflow-x-auto p-0 md:p-4 bg-[#F8F8F8]">
          <ul className="flex flex-row w-full gap-3 overflow-x-scroll md:overflow-x-hidden md:flex-col">
            <li className="flex-shrink-0 p-3 px-4 text-center text-white rounded-none md:rounded-md md:w-full bg-primary">
              Rental & Staging
            </li>
            <li className="flex-shrink-0 p-3 px-4 text-center rounded-none md:rounded-md md:w-full text-slate-400">
              DOOH
            </li>
            <li className="flex-shrink-0 p-3 px-4 text-center rounded-none md:rounded-md md:w-full text-slate-400">
              Comercial
            </li>
            <li className="flex-shrink-0 p-3 px-4 text-center rounded-none md:rounded-md md:w-full text-slate-400">
              Rental & Staging
            </li>
          </ul>

          <h4 className="text-[#A4A4A4] text-sm font-semibold my-5 hidden md:block">Operating Environment</h4>
          <ul className="flex flex-row justify-center gap-5 my-5 md:justify-start md:flex-col md:my-0">
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="all" name="all" className="w-4 h-4" />
              <label htmlFor="all" className="text-[#222222] text-sm md:text-lg font-normal">
                All
              </label>
            </li>
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="indoor" name="indoor" className="w-4 h-4" />
              <label htmlFor="indoor" className="text-[#222222] text-sm md:text-lg font-normal">
                Indoor
              </label>
            </li>
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="outdoor" name="outdoor" className="w-4 h-4" />
              <label htmlFor="outdoor" className="text-[#222222] text-sm md:text-lg font-normal">
                Outdoor
              </label>
            </li>
          </ul>
        </div>

        <div className="w-[90%] mx-auto md:[60%] lg:w-[80%]">
          {/* versi dkstop */}
          <div className="relative justify-end hidden w-full md:flex">
            <input
              type="search"
              placeholder="Search Global"
              className="flex justify-end w-full md:w-[50%] lg:w-[30%] border border-[#BCBCBC] rounded-full py-2 ps-4 pe-10 outline-none "
            />
            <div className="absolute text-center right-4 top-3 ">
              <img src="/icons/search.svg" alt="search icon" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-3 gap-8 overflow-hidden border-0 md:border-t-2 border-[#DEDEDE] pt-5 mt-5 mb-10 md:mb-20">
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md  transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/products/product-list.png"
                alt="product item"
                className=" h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]   overflow-hidden flex  flex-col"
            >
              <img
                src="/images/detail-product/related-product-2.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md  transition-all product-item  h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/detail-product/related-product-1.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex flex-col"
            >
              <img
                src="/images/detail-product/related-product-3.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px]  "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/products/product-list.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/products/product-list.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/products/product-list.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px] "
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
              className="cursor-pointer hover:shadow-md transition-all product-item h-[308px] md:w-[305px] md:h-[435px] 2xl:w-[305px] 2xl:h-[435px]  overflow-hidden flex  flex-col"
            >
              <img
                src="/images/products/product-list.png"
                alt="product item"
                className="h-[152px] md:h-[305px] w-[152px] md:w-[305px]  "
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
        </div>
      </section>
    </>
  )
}

export default Product
