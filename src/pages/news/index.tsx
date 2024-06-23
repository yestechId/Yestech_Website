import { Link } from 'react-router-dom'

const News = () => {
  return (
    <>
      <header className="w-full h-[391px]  bg-[url('/images/news/hero.png')] bg-cover rounded-br-[50px]">
        <div className="container flex items-center justify-center w-full h-full px-16">
          <div className="flex flex-col w-[50%]">
            <h2 className="font-bold text-white text-[5rem]">News</h2>
          </div>
          <div className=" flex items-start justify-start w-[50%] ">
            <p className="text-white font-medium text-lg w-[70%]">
              The glory of the oriental shines all over the world
            </p>
          </div>
        </div>
      </header>
      <div className="container p-5 my-10">
        <section>
          <h3 className=" w-[90%] mx-auto font-bold text-[#B1B1B1] text-xl mb-3">Updated News</h3>

          <div className="flex-center ">
            <div className="flex-center">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full" />
            </div>

            <div className="gap-5 w-[90%] mx-auto flex">
              <img src="/images/news/banner.png" className="w-[874px] h-auto" />
              <div className="flex flex-col items-start justify-start w-full h-full gap-10 ">
                <p>
                  InfoComm, the largest pro-AV event in the US, is happening from June 12 to 14. It is a great
                  opportunity for you and YES TECH to meet face-to-face and discuss the latest products and cutting-edge
                  solutions together. YES TECH is always dedicated to bringing you a wonderful visual experience:
                  <span className="block my-5"></span>
                  Outdoor Rental Products premier at the show! The MT transparent screen & MU Series, designed for
                  outdoor applications with quick installation, are about to
                </p>
                <Link
                  to="/read-news"
                  className="px-16 py-1 mt-5 font-semibold border-2 rounded-full button-primary text-primary border-primary"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="flex-center">
              <img src="/icons/arrow-right-grey.svg" alt="icon right grey" className="w-full rotate-180" />
            </div>
          </div>
          <div className="w-[90%] mx-auto bottom-8 flex-center gap-2 mt-5 mb-10">
            <span className="block w-10 h-[6px] rounded-full bg-primary"></span>
            <span className="block w-2 h-2 rounded-full bg-slate-200"></span>
            <span className="block w-2 h-2 rounded-full bg-slate-200"></span>
          </div>
        </section>
        <section className="w-[90%] mx-auto mb-24">
          <h3 className="  font-bold text-[#121221] text-3xl mb-5">Latest News</h3>

          <div className="grid grid-cols-4 gap-x-6 gap-y-12">
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>{' '}
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>{' '}
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>{' '}
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>{' '}
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
                <ul className="text-xs flex gap-3 font-normal text-[#949494]">
                  <li>1 Hour Ago</li>
                  <li>1 Hour Ago</li>
                </ul>
              </div>
            </Link>
            <Link to="/read-news" className="card">
              <img src="/images/news/news-item.png" alt="item" />
              <div className="flex flex-col gap-5 mt-3">
                <h4 className="text-xl font-bold leading-6 line-clamp-2">News Title Lorem Ipsum Dolor Sit Amet</h4>
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
