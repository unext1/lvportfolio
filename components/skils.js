export default function Skils() {
  return (
    <>
      <div className="container flex items-center mx-auto text-gray-800" id="skils">
        <div className="w-full p-10">
          <div className="grid grid-cols-6 gap-4 md:grid-cols-8">
            <div className="col-span-12 shadow-md sm:col-span-12 md:col-span-4 lg:col-span-2">
              <div className="flex flex-row h-full p-6 bg-gray-900 rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-white rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-white">Graphic Design</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-12 md:col-span-4 lg:col-span-2">
              <div className="flex flex-row p-6 bg-white rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-900 bg-gray-100 rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-gray-900">Web Design</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-12 md:col-span-4 lg:col-span-2">
              <div className="flex flex-row h-full p-6 bg-gray-900 rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-white rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-white">Software</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-12 md:col-span-4 lg:col-span-2">
              <div className="flex flex-row p-6 bg-white rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-900 bg-gray-100 rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-gray-900">Web Developer</div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
