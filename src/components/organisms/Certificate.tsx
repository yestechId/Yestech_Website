import React, { useState } from 'react'

const Certificate: React.FC = () => {
  // const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const certificates: string[] = [
    '/images/certificate/list-1.png',
    '/images/certificate/list-2.png',
    '/images/certificate/list-3.png'
  ]
  const [tempUrl, setTempUrl] = useState('')

  return (
    <div className="relative items-center justify-start w-full h-[80vh] md:h-[70vh]  lg:h-screen px-5 lg:px-14">
      <div className="w-full ">
        <h3 className="text-3xl font-bold leading-10 text-secondary">CERTIFICATES</h3>
        {/* tampilan di dekstop */}
        <ul className="relative hidden w-full h-full lg:block">
          {certificates.map((src, index) => (
            <li
              key={index}
              className={`absolute cursor-pointer certificate-list-item  bottom-0 left-0 ps-20 pt-20`}
              style={{
                zIndex: 20 + index,
                top: `${index * 40}px`,
                left: `${index * -40}px`,
                transition: 'all 0.5s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.stopPropagation()
                // setHoveredIndex(index)
                setTempUrl(src)
              }}
              onMouseLeave={(e) => {
                e.stopPropagation()
                // setHoveredIndex(null)
                setTempUrl('')
              }}
            >
              {tempUrl === src ? (
                <div className="relative">
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className={` duration-300 transition-transform `}
                    style={{
                      transform:
                        tempUrl === src
                          ? `translateY(${index == 0 ? -80 : index === 1 ? -120 : index * -80}px)
                          
                  
                          translateX(${index == 0 ? 35 : index === 1 ? 37 : index >= 2 ? 39 : 0}rem)  scale(1.3)`
                          : 'duration-300 transition-transform'
                    }}
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={src}
                    alt={`Certificate ${index + 1}`}
                    className={` w-[258px] h-auto duration-300 transition-transform`}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* tampilan di mobile dan tab */}
        <ul className="relative w-full h-full lg:hidden">
          {certificates.map((src, index) => (
            <li
              key={index}
              className={`absolute cursor-pointer certificate-list-item  bottom-0 left-0 ps-28 pt-20`}
              style={{
                zIndex: 20 + index,
                top: `${index * 40}px`,
                left: `${index * -40}px`,
                transition: 'all 0.5s ease-in-out'
              }}
            >
              <div>
                <img
                  src={src}
                  alt={`Certificate ${index + 1}`}
                  className={` w-[208px] md:w-[308px] h-auto duration-300 transition-transform`}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Certificate
