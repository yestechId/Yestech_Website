import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-responsive-carousel'
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
const ProductThumbnuilSlider: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  console.log('🚀 ~ isLoading:', isLoading)

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

  return (
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
              {/* <ul className=" w-full md:w-[8%] flex flex-row justify-center items-center md:justify-start   mt-5 md:mt-0 md:flex-col gap-2 me-3">
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                </li>
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                </li>
                <li>
                  <img src="/images/small-case-list.png" alt="thumbnui case list" className=" w-[36px] md:w-full" />
                </li>
              </ul> */}

              <div className="flex items-end justify-end w-full h-[80vh]">
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  renderArrowPrev={() => null}
                  renderArrowNext={() => null}
                  className="w-[80%] mx-auto h-full overflow-hidden bg-red-600"
                >
                  {products.map((image) => (
                    <div key={image.id} className="w-full h-auto bg-slate-900">
                      <img src={image.image} alt={image.title} className="w-full h-auto" />
                    </div>
                  ))}
                </Carousel>
              </div>
              {/* <div className="w-full h-auto">
                <img src="/images/case-list.png" alt="image banner case list" className="w-full h-auto" />
              </div> */}
            </div>

            <div className="w-full md:w-[30%] xs:h-min md:h-[300px] xs:pt-5 md:pt-28 lg:pt-5 lg:h-min flex flex-col items-start justify-center gap-2 md:gap-5 px-0 md:px-5 overflow-y-auto">
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
      <div className="absolute bottom-0 right-0 hidden lg:block">
        <img src="/images/corak-case-list.svg" alt="corak square case list bottom" />
      </div>
      {/* mobile */}
      <div className="absolute bottom-0 right-0 lg:hidden">
        <img src="/icons/mobile/corak-square-case-list.svg" alt="corak square case list bottom" />
      </div>
    </section>
  )
}

export default ProductThumbnuilSlider
