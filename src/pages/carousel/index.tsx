import { useEffect, useState } from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from 'react-icons/fa'
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

const CustomCarousel: React.FC = () => {
  const [images, setImages] = useState<IProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)

  const fetchDataProduct = async () => {
    setIsLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setImages(data.slice(10, 14))
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log('🚀 ~ error:', error)
    }
  }

  useEffect(() => {
    fetchDataProduct()
  }, [])

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <section className="relative h-screen border">
      <Carousel
        infiniteLoop
        autoPlay
        showThumbs={false}
        showStatus={false}
        selectedItem={currentIndex}
        showIndicators={false}
        onChange={(index) => setCurrentIndex(index)}
        renderArrowPrev={() => null}
        renderArrowNext={() => null}
      >
        {images.map((image) => (
          <div key={image.id} className="relative h-screen bg-slate-900">
            <div className="w-full h-[551px] flex justify-center items-center">
              <img src={image.image} alt={image.title} className="px-80" />
            </div>
          </div>
        ))}
      </Carousel>

      {/* Custom Navigation and Title */}
      <div className="absolute flex items-center gap-5 left-10 bottom-14">
        <i className="flex items-center text-3xl cursor-pointer" onClick={handlePrev}>
          <FaLongArrowAltLeft className="text-white" />
        </i>

        <i className="absolute flex items-center text-3xl cursor-pointer left-[23rem]" onClick={handleNext}>
          <FaLongArrowAltRight className="text-white" />
        </i>
      </div>

      {/* Custom Bullets */}
      <div className="absolute flex items-center gap-2 left-32 bottom-5">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block rounded-full cursor-pointer ${index === currentIndex ? 'bg-primary w-10 h-[6px]' : 'bg-white w-2 h-2'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      {/* Custom Thumbnails */}
      <div className="flex items-center gap-2 overflow-x-auto left-32 bottom-5">
        {images.map((_, index) => (
          <div
            key={index}
            className={`absolute cursor-pointer w-80 overflow-hidden flex justify-start gap-3 font-bold p-1 ${index === currentIndex ? 'text-primary left-20 bottom-10' : 'text-white left-[25.5rem] w-full bottom-10'}`}
            onClick={() => setCurrentIndex(index)}
          >
            <span className="flex items-center justify-center w-6 h-6 p-2 text-xs font-bold border-2 rounded-full">
              {index + 1}
            </span>
            <div className="flex flex-col gap-0">
              <h3 className="text-sm line-clamp-1">{images[index]?.title}</h3>
              <p className="text-xs">Fast Installation, Intelligent Selection</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CustomCarousel
