export default function About() {
  return (
    <>
      <div class="pt-16" id="about" style={{ marginTop: '-12%' }}>
        <div class="container m-auto px-10">
          <div class="lg:flex justify-between items-center">
            <div class="lg:w-6/12 lg:p-0 p-7">
              <h1 class="text-5xl font-bold leading-tight mb-3 capitalize ">
                <span className="text-blue-500">About</span> Me
              </h1>
              <p class="text-lg text-gray-500 leading-6 tracking-wide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.{' '}
              </p>

              <div class="py-5">
                <a
                  href="/#portfolio"
                  className="inline-block px-8 py-3 mt-6 mb-12 text-white duration-150 ease-in-out transform bg-blue-500 rounded-lg shadow lg:mb-0 lg:mt-10 hover:bg-blue-600"
                >
                  Contact Me
                </a>
              </div>
            </div>
            <div class="lg:w-5/12 order-2">
              <img
                src="https://instagram.fmmx3-1.fna.fbcdn.net/v/t51.2885-15/e35/117174229_174356654134856_6049419479669161602_n.jpg?_nc_ht=instagram.fmmx3-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=deM_BRhyllAAX_A4S4D&tp=18&oh=cf08cd7665b40939ad1e254f1ff9359f&oe=5FDE9B83"
                alt=""
                class="rounded shadow-lg w-full object-cover img-about"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
