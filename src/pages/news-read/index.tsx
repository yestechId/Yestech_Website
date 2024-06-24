import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const NewsRead = () => {
  return (
    <>
      <header className="w-full  h-[351px] md:h-[391px] bg-center   md:bg-[url('/images/news/hero.png')] xs:bg-[url('/images/news/banner-mobile.svg')] bg-cover rounded-br-[50px]">
        <div className="container  flex items-center justify-center w-full h-full px-0 md:px-16">
          <h1 className="text-[1.50rem] md:text-4xl font-bold text-center text-white">
            Explore Wonderful Visuals of YES TECH at Infocomm 2024
          </h1>
        </div>
      </header>
      <section className="container">
        <div className="md:w-[95%] w-full mx-auto p-0 md:p-5 my-10 flex justify-between gap-5 items-start  ">
          <div className="md:w-[70%] w-full  flex flex-col gap-3">
            <div className="w-full p-0 md:p-8 bg-transparent md:bg-bgSecondary rounded-[12px] flex flex-col gap-5">
              <h2 className="text-xl text-center md:text-left  md:text-2xl font-semibold md:font-medium text-black">
                Explore Wonderful Visuals of YES TECH at Infocomm 2024
              </h2>
              <div className="flex w-full flex-col-reverse md:flex-col justify-center gap-5 ">
                <img src="/images/news/banner.png" className="w-[874px] h-auto" />
                <ul className="flex justify-between md:justify-center items-center -mt-3 md:-mt-0 gap-2 md:gap-10 text-[10px] md:text-xs text-[#3E3232] opacity-100 md:opacity-70 font-medium ">
                  <li className="gap-3 flex-center ">
                    <div className="flex-center">
                      <img src="/icons/date.svg" alt="date icon" className="w-full" />
                    </div>
                    <h3>July 14 , 2022</h3>
                  </li>
                  <li className="gap-3 flex-center">
                    <div className="flex-center">
                      <img src="/icons/comment.svg" alt="comment icon" className="w-full" />
                    </div>
                    <h3>comments : 35</h3>
                  </li>
                  <li className="gap-2 flex-center">
                    <div className="flex-center">
                      <img src="/icons/category.svg" alt="category icon" className="w-full" />
                    </div>
                    <h3>Categgory Sport</h3>
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex flex-col w-full gap-3 md:gap-5 px-0 pb-0 md:px-8 md:pb-8 ">
              <article className="text-sm md:text-xl font-semibold md:font-medium">
                InfoComm, the largest pro-AV event in the US, is happening from June 12 to 14. It is a great opportunity
                for you and YES TECH to meet face-to-face and discuss the latest products and cutting-edge solutions
                together. YES TECH is always dedicated to bringing you a wonderful visual experience:
              </article>

              <article className="text-sm md:text-lg font-medium md:font-normal text-[#3E3232]">
                <h3 className="mb-3 text-lg md:text-2xl font-bold ">Outdoor Rental Products premier at the show!</h3>
                The MT transparent screen & MU Series, designed for outdoor applications with quick installation, are
                about to refresh your perspective. The MU Series has a large size option of 500*1000*72.5mm to
                facilitate setup. Combined with a creative stage featuring the classic MG7S P3.9 as the dance floor,
                these products are sure to impress. The MG7S P3.9 not only provides a strong loading capacity to support
                a firm stage but also maintains high-standard visuals.
              </article>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 px-0 pb-0 md:px-8 md:pb-8">
              <div className="flex-center w-full md:w-[80%] mx-auto">
                <img src="/images/news-read/news-list.png" className="w-full h-auto rounded-md overflow-hidde" />
              </div>
              <article className="text-sm md:text-lg font-medium md:font-normal text-[#3E3232] mt-0 md:mt-8">
                <h3 className="mb-3 text-lg md:text-2xl font-bold ">
                  Indoor Products Deliver You Crystal-Clear Visuals!
                </h3>
                We will also showcase our best-sellers like the MG6S P1.9 and MG6S Cube P1.9, which form an entire
                screen to bring vivid images to life. The Mnano II Series will support high-end conferences with a
                comfortable viewing experience and cool screen touch that you can experience on site.
              </article>
            </div>

            <div className="flex flex-col items-end justify-center w-full gap-5 px-5 py-5 md:px-8 md:py-8">
              <div className="flex-center flex-col w-full md:w-[60%]">
                <img src="/images/news-read/list2.png" className="w-[617px] h-auto rounded-md overflow-hidde" />
                <ul className="flex-col w-full gap-1 mt-2 md:mt-5 text-xs text-center md:text-sm font-medium flex-center">
                  <li className="leading-6 md:leading-5">
                    Be there and experience our products firsthand at Booth
                    <span className="font-bold"> NO.: W3200 </span>
                    Jun.12-14, 2024
                  </li>
                  <li>VIP CODE: HUN357</li>
                  <li>Las Vegas Convention Center | Las Vegas, NV</li>
                  <li className="text-primary md:text-sm text-[10px]">
                    <Link to={'/'}>Register Now: https://www.infocommshow.org/register</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* sidebar */}
          <div className="w-[30%] hidden md:flex flex-col gap-5">
            <ul className="w=full flex justify-between items-center">
              <li className="opacity-70">
                <button className="bg-bgSecondary flex-center gap-3 py-2 px-4 rounded-md text-[#3E3232] font-medium text-xs">
                  <div className="flex-center">
                    <img src="/icons/share.svg" alt="share icon" className="w-full" />
                  </div>
                  Share
                </button>
              </li>
              <li className="opacity-70">
                <button className="bg-bgSecondary flex-center gap-3 py-2 px-4 rounded-md text-[#3E3232] font-medium text-xs">
                  <div className="flex-center">
                    <img src="/icons/marking.svg" alt="marking icon" className="w-full" />
                  </div>
                  Marking
                </button>
              </li>
              <li className="opacity-70">
                <button className="bg-bgSecondary flex-center gap-3 py-2 px-4 rounded-md text-[#3E3232] font-medium text-xs">
                  <div className="flex-center">
                    <img src="/icons/comment.svg" alt="comment icon" className="w-full" />
                  </div>
                  Comment
                </button>
              </li>
            </ul>
            <div className="flex justify-between gap-2 p-5 bg-bgSecondary rounded-[12px]">
              <div className="flex justify-start gap-3">
                <img src="/images/news-read/avatar.png" className="rounded-[12px] w-[87px] h-auto" />
                <div className="flex flex-col gap-2">
                  <h3 className="w-full text-[16px] pt-3 font-semibold text-[#3E3232]">Behzad Pashaei</h3>
                  <button className="bg-[#F81539] w-[90%] bg-opacity-75 text-white rounded-[12px] py-2 px-2 flex-center gap-2">
                    <FaPlus /> Follow
                  </button>
                </div>
              </div>
              <span className="pt-4 text-xs font-normal bg-bgSecondary opacity-70">27 post</span>
            </div>
            <ul className="p-5 bg-bgSecondary rounded-[12px]">
              <div className="flex items-center justify-start gap-2">
                <span className="bg-[#F81539] h-2 w-[4px] rounded-full"></span>
                <h3 className="text-xl font-semibold">Tags</h3>
              </div>
              <div className="flex text-[#3E3232] opacity-70 text-xs flex-wrap gap-2 font-medium mt-3">
                <li>Montenegro</li>
                <li>Visit Croatia</li>
                <li>Luxury Travel</li>
                <li>Travel Log</li>
                <li>Paradise Island</li>
                <li>Travel Info</li>
              </div>
            </ul>

            <ul className="p-5 bg-bgSecondary rounded-[12px]">
              <div className="flex items-center justify-start gap-2">
                <span className="bg-[#F81539] h-2 w-[4px] rounded-full"></span>
                <h3 className="text-xl font-semibold">Top Post</h3>
              </div>
              <div className=" text-[#3E3232] flex flex-col gap-4 mt-3">
                <li className="gap-2 flex-center">
                  <img src="/images/news-read/car.png" className="w-[87px] h-auto rounded-[12px]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-[#3E3232]">
                      How to Spend the Perfect Day on Croatia’s Most Magical Island
                    </h4>
                    <p className="text-xs text-[#3E3232] opacity-70 font-normal">Subhead</p>
                  </div>
                </li>
                <li className="gap-2 flex-center">
                  <img src="/images/news-read/car.png" className="w-[87px] h-auto rounded-[12px]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-[#3E3232]">
                      How to Spend the Perfect Day on Croatia’s Most Magical Island
                    </h4>
                    <p className="text-xs text-[#3E3232] opacity-70 font-normal">Subhead</p>
                  </div>
                </li>{' '}
                <li className="gap-2 flex-center">
                  <img src="/images/news-read/car.png" className="w-[87px] h-auto rounded-[12px]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-[#3E3232]">
                      How to Spend the Perfect Day on Croatia’s Most Magical Island
                    </h4>
                    <p className="text-xs text-[#3E3232] opacity-70 font-normal">Subhead</p>
                  </div>
                </li>{' '}
                <li className="gap-2 flex-center">
                  <img src="/images/news-read/car.png" className="w-[87px] h-auto rounded-[12px]" />
                  <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-semibold text-[#3E3232]">
                      How to Spend the Perfect Day on Croatia’s Most Magical Island
                    </h4>
                    <p className="text-xs text-[#3E3232] opacity-70 font-normal">Subhead</p>
                  </div>
                </li>
              </div>
            </ul>
            <ul className="flex flex-col gap-5 mt-5">
              <li className="w-full rounded-[12px] overflow-hidden">
                <img src="/images/news-read/Advertising.png" className="w-full h-auto" />
              </li>
              <li className="w-full rounded-[12px] overflow-hidden">
                <img src="/images/news-read/top-news.png" className="w-full h-auto" />
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="flex items-center justify-between pt-5 md:pt-10 mb-10 md:mb-20 w-full md:w-[85%] mx-auto border-t-2 border-[#E6E6E6] px-5 md:px-0">
        <button className="w-36 md:w-64 py-1 md:py-2 mt-5 font-semibold text-black transition-all border-2 border-black rounded-full hover:bg-primary hover:text-white hover:border-primary">
          Return
        </button>
        <button className="w-32 md:w-64 py-1 md:py-2 mt-5 font-semibold border-2 rounded-full button-primary text-primary border-primary">
          Next Article
        </button>
      </div>
    </>
  )
}

export default NewsRead
