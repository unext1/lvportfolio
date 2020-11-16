export default function Hero() {
  return (
    <>
      <div>
        <div className="mb-24 bg-gray-900 md:overflow-hidden md:mb-0" id="home">
          <div className="px-4 py-56 md:py-40">
            <div className="md:max-w-6xl md:mx-auto">
              <div className="md:flex md:flex-wrap">
                <div className="text-center md:w-1/2 md:text-left md:pt-16">
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl ">
                    Laurynas Valiulis
                  </h1>

                  <p className="text-indigo-200 md:text-lg md:pr-32 lg:pr-48">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae corrupti asperiores veritatis
                    dolorum, commodi aperiam enim.
                  </p>

                  <a
                    href="/#portfolio"
                    className="inline-block px-8 py-3 mt-6 mb-12 text-white duration-150 ease-in-out transform bg-blue-500 rounded-lg shadow md:mb-0 md:mt-10 hover:bg-blue-600"
                  >
                    My Portfolio
                  </a>
                </div>
                <div className="absolute right-0 md:w-1/2 ">
                  <div className="hidden md:block">
                    <div className="text-center">
                      <i className="z-50 text-blue-500 fa fa-laptop loptop-size"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hidden text-white fill-current md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path fill-opacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </>
  );
}
