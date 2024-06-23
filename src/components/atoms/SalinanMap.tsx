// import React, { useState } from 'react'
// import LocationInfo from '../molecules/LocationInfo'
// import {
//   FaArrowAltCircleLeft,
//   FaArrowAltCircleRight,
//   FaEnvelope,
//   FaFacebook,
//   FaInstagram,
//   FaTiktok,
//   FaTwitter
// } from 'react-icons/fa'
// import { FaLocationDot } from 'react-icons/fa6'

// const MapView: React.FC = () => {
//   const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)
//   const [city, setCity] = useState<string | null>(null)
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
//   // const [mapBackgroundStyle, setMapBackgroundStyle] = useState<any>({
//   //   transform: 'translate(0%, 0%) scale(1)',
//   //   transition: 'transform 0.3s ease-in-out'
//   // })
//   const onClose = () => {
//     setIsModalOpen(false)
//     // setMapBackgroundStyle({
//     //   transform: 'translate(0%, 0%) scale(1)',
//     //   transition: 'transform 0.3s ease-in-out'
//     // })
//   }

//   const handleMouseEnter = (location: string) => {
//     setHoveredLocation(location)
//   }
//   const setModal = (name: string) => {
//     setCity(name)
//     setIsModalOpen(true)
//     // setMapBackgroundStyle({
//     //   transform: 'translate(-10%, -10%) scale(1.5)',
//     //   transition: 'transform 0.3s ease-in-out'
//     // })
//   }

//   const handleMouseLeave = () => {
//     setHoveredLocation(null)
//   }

//   const locations = [
//     { name: 'Jabodetabek', top: { md: '63%', xs: '61.5%' }, left: { md: '27.5%', xs: '31%' } }
//     // { name: 'Jogjakarta', top: { md: '71%', xs: '71.5%' }, left: { md: '33%', xs: '41%' } },
//     // { name: 'Surabaya', top: { md: '67.5%', xs: '66%' }, left: { md: '38.5%', xs: '56%' } },
//     // { name: 'Bali', top: { md: '72%', xs: '70%' }, left: { md: '44.5%', xs: '69%' } }
//   ]

//   return (
//     <section className="h-[880px] bg-[#10121D] overflow-hidden">
//       <div className="relative md:w-[90%] mx-auto xs:w-full">
//         <h2 className="relative z-20 pt-20 xs:text-xl md:text-2xl font-bold text-center xs:text-white md:text-[#CCCCCC] flex flex-col md:mb-0 xs:mb-5">
//           Yes Tech Strategic Partners
//         </h2>
//         <p className="text-[#565E93] text-xs font-normal text-center md:hidden relative z-20 ">
//           * Tap on location to discover partner
//         </p>

//         {/* bg liner peta versi mobile */}
//         {/* <img
//           src="/images/home/gradient.svg"
//           className="top-0 w-full h-[68%] z-10 left-0 right-0 md:hidden absolute object-cover"
//           alt="image [peta]:"
//         /> */}

//         <div className="relative w-full h-full bg-red-600">
//           <img
//             src="/images/home/peta.svg"
//             className="relative object-cover w-full h-full md:block xs:hidden"
//             alt="image [peta]:"
//           />

//           {/* bg peta versi mobile */}
//           {/* <img
//             src="/images/home/peta-versi-mobile.svg"
//             className="relative z-0 object-cover w-full h-full -mt-[7.5rem] md:hidden xs:block"
//             alt="image [peta]:"
//           /> */}

//           <div className="absolute z-50 cursor-pointer top-['71%'] left-['33%'] bg-green-600">
//             <h3>Jabodetabek</h3>
//             <img src="/images/home/location.svg" alt="" />
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default MapView

// // {
// //   locations.map((location) => (
// //     <div
// //       key={location.name}
// //       className={`absolute flex flex-col items-center justify-center
// //                             md:top-[${location.top.md}] xs:top-[${location.top.xs}]
// //                             md:left-[${location.left.md}] xs:left-[${location.left.xs}]
// //                             transform -translate-x-1/2 -translate-y-1/2 cursor-pointer`}
// //       onMouseEnter={() => handleMouseEnter(location.name)}
// //       onMouseLeave={handleMouseLeave}
// //       onClick={() => setModal(location.name)}
// //     >
// //       {location.name === 'Jogjakarta' ? (
// //         <h3 className="font-semibold text-white xs:text-xs md:text-sm md:block xs:hidden">{location.name}</h3>
// //       ) : (
// //         <h3 className="font-semibold text-white xs:text-xs md:text-sm">{location.name}</h3>
// //       )}

// //       <img src="/images/home/location.svg" className="h-auto xs:w-10 md:w-14" alt="Icon Location" />
// //       {location.name === 'Jogjakarta' ? (
// //         <h3 className="-mt-2 font-semibold text-white xs:text-xs md:text-sm md:hidden">{location.name}</h3>
// //       ) : null}

// //       {/* Modal untuk menampilkan informasi detail */}
// //       {/* <Modal isOpen={isModalOpen} onClose={handleModalClose}> */}

// //       <LocationInfo
// //         name={location.name}
// //         isHovered={hoveredLocation === location.name}
// //         handleMouseEnter={handleMouseEnter}
// //       />
// //       {/* </Modal> */}

// //       {/* <LocationInfo
// //                   name={location.name}
// //                   isHovered={hoveredLocation === location.name}
// //                   handleMouseEnter={handleMouseEnter}
// //                 /> */}
// //     </div>
// //   ))
// // }
