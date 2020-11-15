export default function Journey() {
  return (
    <>
      <div class="text-center mb-2 mt-16" id="journey">
        <h1 class="text-3xl uppercase text-gray-900 font-bold">
          My <span className="text-blue-500">Journey</span>
        </h1>
      </div>
      <div class="container bg-transparent mx-auto w-full">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-opacity-20 border-gray-900 h-full border"
            style={{ left: '50%' }}
          ></div>
          <div class="mb-8  flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12 hidden md:block"></div>
            <div class="z-50 hidden md:flex items-center order-1 bg-gray-900 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">1</h1>
            </div>
            <div class="order-1 z-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-6 bg-gray-900">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12 hidden md:block"></div>
            <div class="z-50 hidden md:flex items-center order-1 bg-gray-900 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">2</h1>
            </div>
            <div class="order-1 z-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-6 bg-blue-500">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full right-timeline">
            <div class="order-1 w-5/12 hidden md:block"></div>
            <div class="z-50 hidden md:flex items-center order-1 bg-gray-900 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">3</h1>
            </div>
            <div class="order-1 z-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-6 bg-gray-900">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div class="mb-2 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div class="order-1 w-5/12 hidden md:block"></div>
            <div class="z-50 hidden md:flex items-center order-1 bg-gray-900 shadow-xl w-8 h-8 rounded-full">
              <h1 class="mx-auto font-semibold text-lg text-white">4</h1>
            </div>
            <div class="order-1 z-50 rounded-lg shadow-xl w-full md:w-5/12 px-6 py-6 bg-blue-500">
              <h3 class="mb-3 font-bold text-white text-xl">Lorem Ipsum</h3>
              <p class="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
