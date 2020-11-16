export default function Journey() {
  return (
    <>
      <div className="mt-16 mb-2 text-center" id="journey">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          My <span className="text-blue-500">Journey</span>
        </h1>
      </div>
      <div className="container w-full mx-auto bg-transparent">
        <div className="relative h-full p-10 overflow-hidden wrap">
          <div
            className="absolute h-full border border-gray-900 border-2-2 border-opacity-20"
            style={{ left: '50%' }}
          ></div>
          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className="z-30 items-center order-1 hidden w-8 h-8 bg-gray-900 rounded-full shadow-xl md:flex">
              <h1 className="mx-auto text-lg font-semibold text-white">1</h1>
            </div>
            <div className="z-30 order-1 w-full px-6 py-6 bg-gray-900 rounded-lg shadow-xl md:w-5/12">
              <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-between w-full mb-8 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className="z-30 items-center order-1 hidden w-8 h-8 bg-gray-900 rounded-full shadow-xl md:flex">
              <h1 className="mx-auto text-lg font-semibold text-white">2</h1>
            </div>
            <div className="z-30 order-1 w-full px-6 py-6 bg-blue-500 rounded-lg shadow-xl md:w-5/12">
              <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between w-full mb-8 right-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className="z-30 items-center order-1 hidden w-8 h-8 bg-gray-900 rounded-full shadow-xl md:flex">
              <h1 className="mx-auto text-lg font-semibold text-white">3</h1>
            </div>
            <div className="z-30 order-1 w-full px-6 py-6 bg-gray-900 rounded-lg shadow-xl md:w-5/12">
              <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
              <p className="text-sm leading-snug tracking-wide text-white text-opacity-100">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book.
              </p>
            </div>
          </div>

          <div className="flex flex-row-reverse items-center justify-between w-full mb-2 left-timeline">
            <div className="order-1 hidden w-5/12 md:block"></div>
            <div className="z-30 items-center order-1 hidden w-8 h-8 bg-gray-900 rounded-full shadow-xl md:flex">
              <h1 className="mx-auto text-lg font-semibold text-white">4</h1>
            </div>
            <div className="z-30 order-1 w-full px-6 py-6 bg-blue-500 rounded-lg shadow-xl md:w-5/12">
              <h3 className="mb-3 text-xl font-bold text-white">Lorem Ipsum</h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
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
