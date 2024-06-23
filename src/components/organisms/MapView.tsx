import React, { useState } from 'react'
import LocationInfo from '../molecules/LocationInfo'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneVolume, FaTiktok, FaTwitter } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'

const MapView: React.FC = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
  const [city, setCity] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [mapBackgroundStyle, setMapBackgroundStyle] = useState<any>({
    transform: 'translate(0%, 0%) scale(1)',
    transition: 'transform 0.5s ease-in-out'
  })
  const onClose = () => {
    setIsModalOpen(false)
    setMapBackgroundStyle({
      transform: 'translate(0%, 0%) scale(1)',
      transition: 'transform 0.5s ease-in-out'
    })
  }

  const handleMouseEnter = (location: string) => {
    setHoveredLocation(location)
  }
  const setModal = (name: string) => {
    setCity(name)
    setIsModalOpen(true)
    setMapBackgroundStyle({
      transform: 'translate(-10%, -10%) scale(1.2)',
      transition: 'transform 0.5s ease-in-out'
    })
  }

  const handleMouseLeave = () => {
    setHoveredLocation(null)
  }

  const locations = [
    { name: 'Jabodetabek', top: { md: 63, xs: 61.5 }, left: { md: 27.5, xs: 31 } },
    { name: 'Jogjakarta', top: { md: 71, xs: 71.5 }, left: { md: 33, xs: 41 } },
    { name: 'Surabaya', top: { md: 67.5, xs: 66 }, left: { md: 38.5, xs: 56 } },
    { name: 'Bali', top: { md: 72, xs: 70 }, left: { md: 44.5, xs: 69 } }
  ]

  return (
    <section className="h-[980px] bg-[#10121D] overflow-hidden">
      <div className="relative md:w-[90%] mx-auto xs:w-full">
        <h2 className="relative z-20 pt-20 xs:text-xl md:text-2xl font-bold text-center xs:text-white md:text-[#CCCCCC] flex flex-col md:mb-0 xs:mb-5">
          Yes Tech Strategic Partners
        </h2>
        <p className="text-[#565E93] text-xs font-normal text-center md:hidden relative z-20 ">
          * Tap on location to discover partner
        </p>

        {/* bg liner peta versi mobile */}
        <img
          src="/images/home/gradient.svg"
          className="top-0 w-full h-[68%] z-10 left-0 right-0 md:hidden absolute object-cover"
          alt="image [peta]:"
        />

        <div className="relative h-full " style={mapBackgroundStyle}>
          <img src="/images/home/peta.svg" className="object-cover w-full h-full md:block xs:hidden" alt="image" />

          {/* bg peta versi mobile */}
          <img
            src="/images/home/peta-versi-mobile.svg"
            className="relative z-0 object-cover w-full h-full -mt-[7.5rem] md:hidden xs:block"
            alt="image [peta]:"
          />

          {/* tampilan web */}
          {locations.map((location) => (
            <div
              key={location.name}
              className={`absolute xs:hidden md:flex flex-col items-center justify-center transform -translate-x-[50%] -translate-y-[50%] cursor-pointer
                `}
              style={{
                top: `${location.top.md}%`,
                left: `${location.left.md}%`
              }}
              onMouseEnter={() => handleMouseEnter(location.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setModal(location.name)}
            >
              {location.name === 'Jogjakarta' ? (
                <h3 className="font-semibold text-white xs:text-xs md:text-sm md:block xs:hidden">{location.name}</h3>
              ) : (
                <h3 className="font-semibold text-white xs:text-xs md:text-sm">{location.name}</h3>
              )}

              <img src="/images/home/location.svg" className="h-auto xs:w-10 md:w-14" alt="Icon Location" />
              {location.name === 'Jogjakarta' ? (
                <h3 className="-mt-2 font-semibold text-white xs:text-xs md:text-sm md:hidden">{location.name}</h3>
              ) : null}

              <LocationInfo
                name={location.name}
                isHovered={hoveredLocation === location.name}
                handleMouseEnter={handleMouseEnter}
              />
            </div>
          ))}

          {/* Tampilan Mobil */}
          {locations.map((location) => (
            <div
              key={location.name}
              className={`absolute md:hidden flex flex-col items-center justify-center transform -translate-x-[50%] -translate-y-[50%] cursor-pointer
                `}
              style={{
                top: `${location.top.xs}%`,
                left: `${location.left.xs}%`
              }}
              onMouseEnter={() => handleMouseEnter(location.name)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setModal(location.name)}
            >
              {location.name === 'Jogjakarta' ? (
                <h3 className="font-semibold text-white xs:text-xs md:text-sm md:block xs:hidden">{location.name}</h3>
              ) : (
                <h3 className="font-semibold text-white xs:text-xs md:text-sm">{location.name}</h3>
              )}

              <img src="/images/home/location.svg" className="h-auto xs:w-10 md:w-14" alt="Icon Location" />
              {location.name === 'Jogjakarta' ? (
                <h3 className="-mt-2 font-semibold text-white xs:text-xs md:text-sm md:hidden">{location.name}</h3>
              ) : null}

              {/* Modal untuk menampilkan informasi detail */}
              {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}> */}

              <LocationInfo
                name={location.name}
                isHovered={hoveredLocation === location.name}
                handleMouseEnter={handleMouseEnter}
              />
              {/* </Modal> */}

              {/* <LocationInfo
                  name={location.name}
                  isHovered={hoveredLocation === location.name}
                  handleMouseEnter={handleMouseEnter}
                /> */}
            </div>
          ))}
        </div>
      </div>

      {isModalOpen ? (
        <div className="fixed inset-0 z-[9999] flex items-center justify-end bg-black bg-opacity-50 p-10 ">
          <div className="flex items-start gap-5">
            <button onClick={onClose} className="p-3 text-white focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-[456px] h-[90vh] overflow-auto bg-white rounded-lg p-5 flex flex-col ">
              <h2 className="text-lg text-[#9F9F9F]">{city}</h2>
              <div className="flex items-center justify-between">
                <div className="flex-center">
                  <img src="/icons/polygon-right.svg" alt="icon polygon right" className="w-full" />
                </div>
                <div className="w-[87px] h-auto overflow-hidden">
                  <img src="/images/home/partner/jabodetabek/infinite-live.png" />
                </div>
                <div className="flex-center">
                  <img src="/icons/polygon-left.svg" alt="icon polygon left" className="w-full" />
                </div>
              </div>
              <div className="border-t border-[#EAEAEA] px-5 pt-5 flex flex-col gap-3 ">
                <h3 className="text-xl font-bold">PT. INFINITE LIVE PRODUCTION</h3>
                <p className="text-sm font-normal">
                  Lorem ipsum dolor sit amet consectetur. Hendrerit elementum maecenas sollicitudin sem ultrices. Non
                  cras ornare amet erat sit. Id morbi massa euismod semper dignissim consequat eu. Cras quis magna
                  rutrum aenean gravida vitae varius.
                </p>
              </div>
              <div className="flex flex-col gap-0 pt-5 pr-10 ps-5">
                <h3 className="mb-2 text-xl font-bold">Contact Information</h3>
                <ul className="flex flex-col gap-5">
                  <li className="flex items-center justify-start gap-8">
                    <FaPhoneVolume className="w-5 h-5 -rotate-45" />
                    <p className="w-full text-sm font-medium">+62-812-8816-2075</p>
                  </li>
                  <li className="flex items-center justify-start gap-8">
                    <FaEnvelope className="w-5 h-5 font-bold" />
                    <p className="w-full text-sm font-medium">ngi-infinite@gmail.com</p>
                  </li>
                  <li className="flex items-start justify-start gap-8">
                    <FaLocationDot className="w-5 h-5" />
                    <p className="w-full text-sm font-medium">
                      Jl. Palem VII No.78, RT.2/RW.8, Petukangan Utara, Kec. Pesanggrahan, Kota Jakarta Selatan, Daerah
                      Khusus Ibukota Jakarta 12260
                    </p>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-3 mt-3 flex-center">
                <p className="text-sm text-primary">ngi-infinite.com</p>
                <ul className="w-full gap-8 flex-center ">
                  <li>
                    <FaInstagram className="w-7 h-7" />
                  </li>
                  <li>
                    <FaTwitter className="w-7 h-7" />
                  </li>
                  <li>
                    <FaFacebook className="w-7 h-7" />
                  </li>
                  <li>
                    <FaTiktok className="w-7 h-7" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default MapView
