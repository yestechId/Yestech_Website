import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link } from 'react-router-dom'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

interface IProduct {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
}

const ProductCarousel: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  console.log('🚀 ~ isLoading:', isLoading)
  const [currentIndex, setCurrentIndex] = useState(0)

  const fetchDataProduct = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data.slice(14, 20))
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('🚀 ~ error:', error)
    }
  }

  useEffect(() => {
    fetchDataProduct()
  }, [])

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index)
  }

  return (
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
            {/* Custom Thumbnails */}
            <div className="flex flex-row h-[400px]  gap-3 p-5 overflow-x-auto overflow-y-auto md:overflow-y-auto md:flex-col md:overflow-x-visible">
              {products.map((image, index) => (
                <div
                  key={index}
                  className={`w-[49px] md:w-full border ${currentIndex === index ? 'border-primary' : ''}`}
                  onClick={() => handleThumbnailClick(index)}
                >
                  <img src={image.image} alt={image.title} className="w-[49px] cursor-pointer" />
                </div>
              ))}
            </div>
            <div className="flex items-end justify-end w-full h-auto">
              <Carousel
                showThumbs={false}
                showStatus={false}
                selectedItem={currentIndex}
                showIndicators={false}
                onChange={(index) => setCurrentIndex(index)}
                renderArrowPrev={() => null}
                renderArrowNext={() => null}
                className="w-[80%] mx-auto h-full overflow-hidden bg-red-600"
              >
                {products.map((image) => (
                  <div key={image.id} className="relative h-auto bg-slate-900">
                    <div className="flex items-center justify-center w-full h-full">
                      <img
                        src={image.image}
                        alt={image.title}
                        className="h-[309px]  md:h-[409px] w-[450px] md:w-[450px]"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>

            {/* <img src="/images/product.png" alt="product" className=" h-[309px]  md:h-[409px] w-[450px] md:w-[550px]" /> */}
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
  )
}

export default ProductCarousel
