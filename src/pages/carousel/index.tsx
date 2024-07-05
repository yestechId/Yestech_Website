import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import ProductCarousel from './ProductCarousel'
import ProductThumbnuilSlider from './ProductThumbnuilSlider'

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

const CustomCarousel: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  console.log('🚀 ~ isLoading:', isLoading)
  const [currentProductIndex, setCurrentProductIndex] = useState(0)

  const fetchDataProduct = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data.slice(10, 14))
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('🚀 ~ error:', error)
    }
  }

  useEffect(() => {
    fetchDataProduct()
  }, [])

  const mainSliderRef = useRef<Slider>(null)
  const thumbSliderRef = useRef<Slider>(null)

  const next = () => {
    mainSliderRef.current?.slickNext()
  }

  const previous = () => {
    mainSliderRef.current?.slickPrev()
  }

  const goTo = (index: number) => {
    mainSliderRef.current?.slickGoTo(index)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    afterChange: (index: number) => setCurrentProductIndex(index),
    customPaging: (i: number) => (
      <div className={`custom-dot ${i === currentProductIndex ? 'active' : ''}`} onClick={() => goTo(i)}></div>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div className="custom-dots-container">
        <ul>{dots}</ul>
      </div>
    )
  }

  const settingsContainer = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (current: number, next: number) => {
      console.log('🚀 ~ current:', current)
      setCurrentProductIndex(next)
      thumbSliderRef.current?.slickGoTo(next)
    }
  }

  return (
    <>
      <section
        id="home"
        className="relative w-full h-screen xs:bg-[url('/images/home/bg-banner-mobile.svg')] md:bg-[url('/images/banner-home.svg')] bg-cover rounded-br-[50px] md:mb-0 mb-5"
      >
        <Slider ref={mainSliderRef} {...settingsContainer} className="container relative flex">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-start w-full h-full gap-14 md:gap-0 md:justify-between md:flex-row"
            >
              <div className="flex md:w-[60%] w-full items-center justify-center md:justify-start mt-44">
                <div className="flex flex-col gap-0 pt-20 md:gap-2 xs:items-center md:items-start md:pt-0">
                  <h1 className="text-[#FF3237] md:text-6xl xs:text-4xl font-bold">New !</h1>
                  <h2 className="font-bold text-white xs:text-[2rem] md:text-[4.5rem] line-clamp-1 w-[90%]">
                    {product.title}
                  </h2>
                  <p className="font-normal text-white xs:text-xs md:text-2xl">
                    Fast Installation, Intelligent Selection
                  </p>
                  <button className="py-2 mt-5 font-semibold border-2 border-white rounded-full button-secondary px-9">
                    Learn More
                  </button>
                </div>
              </div>

              <div className="md:w-[40%] -mt-[25rem] relative left-[60%] w-full md:pt-14 flex-center pt-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover object-center w-[300px] h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Thumbnail */}
      <div className="left-0 w-[75%] overflow-x-hidden gap-8 -mt-24 ps-20 md:left-20 bottom-16 flex-center">
        <div className="absolute cursor-pointer bottom-[4.7rem] text-5xl left-8 flex-center" onClick={previous}>
          <img src="/icons/arrow-left.svg" alt="icon left" className="hidden w-full text-white md:block" />
        </div>
        <Slider ref={thumbSliderRef} {...settings} className="flex w-full gap-0">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex font-semibold outline-none card ${
                index === currentProductIndex ? 'text-primary' : 'text-white'
              }`}
            >
              <span className="w-6 h-6 text-xs font-bold border-2 rounded-full flex-center">{index + 1}</span>
              <h3 className="-mt-6 text-sm text-start ms-10 line-clamp-2">{product.title}</h3>
            </div>
          ))}
        </Slider>
        <div className="absolute cursor-pointer text-3xl left-[23.5rem] bottom-[4.7rem] flex-center" onClick={next}>
          <img src="/icons/arrow-right.svg" alt="icon-right" className="hidden w-full text-white md:block" />
        </div>
      </div>

      {/* product */}
      <ProductCarousel />

      {/* thumbnuil */}
      <ProductThumbnuilSlider />
    </>
  )
}

export default CustomCarousel
