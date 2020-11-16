export default function Skils() {
  return (
    <>
      <div className="flex items-center text-gray-800" style={{ marginTop: '-8%' }} id="skils">
        <div className="w-full p-10">
          <div className="grid h-24 grid-cols-12 gap-4">
            <div className="col-span-12 shadow-md sm:col-span-6 md:col-span-3">
              <div className="flex flex-row h-full p-6 bg-gray-900 rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-white rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-white">Up to Date</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-6 md:col-span-3">
              <div className="flex flex-row p-6 bg-white rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-900 bg-gray-100 rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-gray-900">Responsive Design</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-6 md:col-span-3">
              <div className="flex flex-row h-full p-6 bg-gray-900 rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-blue-500 bg-white rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-white">Up to Date</div>
                </div>
              </div>
            </div>
            <div className="col-span-12 shadow-md sm:col-span-6 md:col-span-3">
              <div className="flex flex-row p-6 bg-white rounded shadow-sm">
                <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-gray-900 bg-gray-100 rounded-full">
                  <i className="text-2xl fa fa-home"></i>
                </div>
                <div className="mt-4 ml-4">
                  <div className="text-sm text-gray-900">Responsive Design</div>
                </div>
              </div>
            </div>{' '}
          </div>
        </div>
      </div>
    </>
  );
}
