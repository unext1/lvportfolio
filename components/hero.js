export default function Hero() {
  return (
    <>
      <div>
        <div class="bg-gray-900 md:overflow-hidden mb-24 md:mb-0" id="home">
          <div class="px-4 py-56 md:py-40">
            <div class="md:max-w-6xl md:mx-auto">
              <div class="md:flex md:flex-wrap">
                <div class="md:w-1/2 text-center md:text-left md:pt-16">
                  <h1 class="font-bold text-white text-3xl md:text-6xl leading-tight mb-4">Laurynas Valiulis</h1>

                  <p class="text-indigo-200 md:text-lg md:pr-48">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id vitae corrupti asperiores veritatis
                    dolorum, commodi aperiam enim.
                  </p>

                  <a
                    href="/#journey"
                    class="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow transform duration-150 ease-in-out"
                  >
                    About Me
                  </a>
                </div>
                <div class="md:w-1/2 absolute right-0 ">
                  <div class="hidden md:block">
                    <div class="text-center">
                      <i class="fa fa-laptop z-50  text-blue-500" style={{ fontSize: '400px' }}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            class="fill-current text-white hidden md:block"
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
