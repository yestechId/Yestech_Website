import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <>
      <header className="w-full h-[391px]  bg-[url('/images/products/banner-product.svg')] bg-cover rounded-br-[50px]">
        <div className="container w-full h-full flex-between">
          <div className="flex flex-col w-[45%] gap-3 mt-16 ps-10">
            <h2 className="font-bold text-white text-[5rem]">Products</h2>
            <p className="text-white font-semibold text-[15px] w-[70%]">
              YES TECH offers a wide range of competitive and cut-edge LED displays to meet your diverse needs.
            </p>
          </div>

          <div className="relative flex items-center justify-end w-[55%] gap-10 pt-16 ">
            <img src="/images/products/product-display-banner.svg" className="absolute left-0 z-10" />
            <img src="/images/products/product-display-banner-right.svg" className="absolute right-0" />
          </div>
        </div>
      </header>

      <section className="container flex items-start justify-between gap-5 pt-8">
        <div className="w-[20%] p-4 bg-[#F8F8F8]">
          <ul className="flex flex-col gap-3">
            <li className="p-3 text-center text-white rounded-md bg-primary">Rental & Staging</li>
            <li className="p-3 text-center rounded-md text-slate-400 ">Rental & Staging</li>
            <li className="p-3 text-center rounded-md text-slate-400 ">Rental & Staging</li>
            <li className="p-3 text-center rounded-md text-slate-400 ">Rental & Staging</li>
          </ul>
          <h4 className="text-[#A4A4A4] text-sm font-semibold my-5">Operating Environment</h4>
          <ul className="flex flex-col gap-5">
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="all" name="all" className="w-4 h-4" />
              <label htmlFor="all" className="text-[#222222 text-lg font-normal]">
                All
              </label>
            </li>
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="all" name="all" className="w-4 h-4" />
              <label htmlFor="all" className="text-[#222222 text-lg font-normal]">
                Indoor
              </label>
            </li>
            <li className="flex items-center justify-start gap-3">
              <input type="checkbox" id="all" name="all" className="w-4 h-4" />
              <label htmlFor="all" className="text-[#222222 text-lg font-normal]">
                Outdor
              </label>
            </li>
          </ul>
        </div>

        <div className="w-[80%]">
          <div className="relative flex justify-end w-full">
            <input
              type="search"
              placeholder="Search Global"
              className="flex justify-end w-[30%] border border-[#BCBCBC] rounded-full py-2 ps-4 pe-10 outline-none "
            />
            <div className="absolute text-center right-4 top-3 ">
              <img src="/icons/search.svg" alt="search icon" className="w-full" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 overflow-hidden border-t-2 border-[#DEDEDE] pt-5 mt-5 mb-20">
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>

            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px] w-[335px] overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
                  <p>Pixel pitch: 2.9/3.9/5.9mm </p>
                  <p>Cabinet size: 500*500*73mm</p>
                </div>
              </div>
            </Link>
            <Link
              to="/detail-product"
              className="cursor-pointer hover:shadow-md transition-all product-item h-[435px]  overflow-hidden flex  flex-col"
            >
              <img src="/images/products/product-list.png" alt="product item" className="  h-[335px] w-full " />
              <div className="px-5 p-b">
                <h3 className="text-2xl font-bold text-black ">MG9 Series</h3>
                <div className="gap-2 mt-3 text-sm font-semibold flex-flex-col">
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

export default AboutUs
