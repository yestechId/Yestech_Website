interface LocationInfoProps {
  name: string
  isHovered: boolean
  handleMouseEnter: (location: string) => void
}

const LocationInfo: React.FC<LocationInfoProps> = ({ name, isHovered, handleMouseEnter }) => {
  let infoContent: React.ReactNode = null

  switch (name) {
    case 'Jabodetabek':
      infoContent = (
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          className="absolute -left-[24rem] overflow-auto -top-[28rem] z-30 mt-2 p-10"
        >
          <div className="p-5 bg-white rounded-t-[40px] w-[423px] border-2 border-[#CCCCCC] rounded-bl-[40px]">
            <h3 className="mb-5 text-lg font-semibold text-center text-secondary">{name}</h3>
            <ul className="w-full">
              <div className="grid grid-cols-2">
                <li className="bg-secondary w-[159px] rounded-2xl h-auto flex-center">
                  <img src="/images/home/partner/jabodetabek/infinite-live.png" />
                </li>
                <div className="flex flex-col gap-4">
                  <li>
                    <img src="/images/home/partner/jabodetabek/maxindo.png" />
                  </li>
                  <li className="h-auto p-2 mb-1 bg-secondary rounded-2xl flex-center">
                    <img src="/images/home/partner/jabodetabek/msquad.png" className="w-full" />
                  </li>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2">
                <li>
                  <img src="/images/home/partner/jabodetabek/multimedia.png" />
                </li>
                <li>
                  <img src="/images/home/partner/jabodetabek/empire.png" />
                </li>
                <li>
                  <img src="/images/home/partner/jabodetabek/riz.png" />
                </li>
              </div>
            </ul>
          </div>
        </div>
      )
      break

    case 'Jogjakarta':
      infoContent = (
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          className="absolute -left-[25rem] overflow-auto top-[2rem] z-30 mt-2 p-10"
        >
          <div className="py-5 bg-white rounded-b-[40px] w-[423px] border-2 border-[#CCCCCC] rounded-tl-[40px]">
            <h3 className="mb-2 text-lg font-semibold text-center text-secondary">{name}</h3>
            <ul className="w-full flex-center">
              <li className="flex-center">
                <img src="/images/home/partner/jogjakarta/mad-flash.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      )
      break

    case 'Surabaya':
      infoContent = (
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          className="absolute -left-[2rem] overflow-auto -top-[17rem] z-30 mt-2 p-10"
        >
          <div className="p-5 bg-white rounded-t-[40px] h-[210px] w-[503px] border-2 border-[#CCCCCC] rounded-br-[40px]">
            <h3 className="text-lg font-semibold text-center text-secondary">{name}</h3>
            <ul className="w-full gap-2 flex-center ">
              <li className="bg-red-900 flex-center">
                <img src="/images/home/partner/surabaya/setya.png" alt="" />
              </li>
              <li className="flex-center">
                <img src="/images/home/partner/surabaya/mrvl.png" alt="" />
              </li>
              <li className="flex-center">
                <img src="/images/home/partner/surabaya/native.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      )
      break
    case 'Bali':
      infoContent = (
        <div
          onMouseEnter={() => handleMouseEnter(name)}
          className="absolute -left-[1.5rem] overflow-auto top-[2rem] z-30 mt-2 p-10"
        >
          <div className="py-3 bg-white rounded-b-[40px] w-[353px] h-[135px] border-2 border-[#CCCCCC] rounded-tr-[40px]">
            <h3 className="mb-1 *:text-lg font-semibold text-center text-secondary">{name}</h3>
            <ul className="w-full flex-center">
              <li className="flex-center">
                <img src="/images/home/partner/bali/agspro.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      )
      break
    default:
      infoContent = (
        <div className="absolute z-30 p-2 mt-2 text-xs text-black bg-white rounded shadow-lg top-full">
          Info about {name}
        </div>
      )
  }

  return <>{isHovered && infoContent}</>
}

export default LocationInfo
