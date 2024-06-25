import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <header className="w-full h-[351px] md:h-[391px]   md:bg-[url('/images/news/hero.png')] xs:bg-[url('/images/news/banner-mobile.svg')] bg-cover rounded-br-[50px] bg-no-repeat bg-center">
        <div className="container flex flex-col items-center justify-center w-full h-full gap-5 px-0 md:gap-0 md:px-16 md:flex-row">
          <div className="flex flex-col w-full md:w-[50%]">
            <h2 className="font-bold text-white text-center md:text-left text-5xl md:text-[5rem]">News</h2>
          </div>
          <div className=" flex items-start justify-start w-full md:w-[50%] ">
            <p className="text-white font-medium text-center md:text-left text-xs md:text-lg w-full md:w-[70%]">
              The glory of the oriental shines all over the world
            </p>
          </div>
        </div>
      </header>

      <div className="md:w-[90%] mx-auto w-full p-5 md:my-10 my-0   ">
        <section id="news">
          <h3 className="w-full md:w-[90%] mx-auto font-bold text-[#B1B1B1] text-sm md:text-xl mb-2 md:mb-3">
            Updated News
          </h3>

          <h2 className="text-xl font-bold text-secondary md:hidden">
            Explore Wonderful Visuals of YES TECH at Infocomm 2024
          </h2>
          <ul className="flex items-center justify-start gap-2 mt-2 mb-4 text-xs font-normal text-secondary md:hidden">
            <li>2024.06.05</li>
            <li>CNN Indonesia</li>
          </ul>

          <div className="flex-center ">
            <div className="items-center justify-center hidden md:flex">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full" />
            </div>

            <div className="gap-5 w-full md:w-[90%]  mx-auto flex md:flex-row flex-col">
              <div className="w-full h-auto">
                <img src="/images/news/banner.png" className="w-full h-auto" />
              </div>
              <div className="flex flex-col items-start justify-start text-sm md:text-[16px]  h-full gap-10 w-full md:w-[35%] text-[#444444]">
                <p>
                  InfoComm, the largest pro-AV event in the US, is happening from June 12 to 14. It is a great
                  opportunity for you and YES TECH to meet face-to-face and discuss the latest products and cutting-edge
                  solutions together. YES TECH is always dedicated to bringing you a wonderful visual experience:
                  <span className="block my-2 md:my-5"></span>
                  Outdoor Rental Products premier at the show! The MT transparent screen & MU Series, designed for
                  outdoor applications with quick installation, are about to
                </p>
                <div className="flex items-center justify-center w-full pb-5 md:pb-0 md:justify-start ">
                  <Link
                    to="/read-news"
                    className="w-full py-2 mx-auto mt-0 font-semibold text-center border-2 rounded-full md:mt-5 md:w-60 md:px-12 button-primary border-primary"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="items-center justify-center hidden md:flex">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full rotate-180" />
            </div>
          </div>
          <div className="w-[90%] mx-auto bottom-8 flex md:justify-center items-center justify-between gap-2 mt-0 md:mt-5 mb-10">
            <div className="flex items-center justify-center md:hidden">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full" />
            </div>
            <div className="gap-2 flex-center">
              <span className="block w-10 h-[6px] rounded-full bg-primary"></span>
              <span className="block w-2 h-2 rounded-full bg-secondary md:bg-slate-200"></span>
              <span className="block w-2 h-2 rounded-full bg-secondary md:bg-slate-200"></span>
            </div>
            <div className="flex items-center justify-center md:hidden">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full rotate-180" />
            </div>
          </div>
        </section>

        <section className="w-full md:w-[90%] mx-auto mb-10 md:mb-24">
          <h3 className="  font-bold text-[#121221] text-2xl md:text-3xl mb-5">Latest News</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-x-6 gap-y-5 md:gap-y-12">
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="flex flex-row gap-3 card md:flex-col md:gap-0">
              <img src="/images/news/news-item.png" alt="item" className="w-[183px] md:w-[316px] h-auto" />
              <div className="flex flex-col gap-3 mt-0 md:gap-5 md:mt-3">
                <h4 className="text-lg font-bold leading-5 md:text-xl md:leading-6 line-clamp-3 md:line-clamp-2">
                  News Title Lorem Ipsum Dolor Sit Amet
                </h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default News
