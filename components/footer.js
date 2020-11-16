export default function Footer() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="flex flex-wrap justify-start max-w-6xl m-auto text-gray-900">
          <div className="pt-2 bg-gray-900 ">
            <div className="flex flex-col max-w-6xl pt-5 pb-5 pl-24 m-auto text-sm text-white md:pl-16 md:flex-row">
              <div className="mt-2">© Copyright 2020. All Rights Reserved.</div>
              <div className="flex flex-row mt-2 md:flex-auto md:flex-row-reverse">
                <a href="/#" className="w-6 mx-1"></a>
                <a href="/#" className="w-6 mx-1"></a>
                <a href="/#" className="w-6 mx-1"></a>
                <a href="/#" className="w-6 mx-1"></a>
                <a href="/#" className="w-6 mx-1"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
