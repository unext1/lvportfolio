import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

export default function Skils() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    rtl: true,
    slidesPerView: 3,
    spacing: 20,
    breakpoints: {
      '(max-width: 1180px)': {
        slidesPerView: 2
      },
      '(max-width: 780px)': {
        slidesPerView: 1
      }
    }
  });

  const portfolio = [
    {
      name: 'Aurehome.com',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/',
      id: 1
    },
    {
      name: 'Aurehome.com',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/',
      id: 2
    },
    {
      name: 'Aurehome.com',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/',
      id: 3
    },
    {
      name: 'Aurehome.com',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/',
      id: 3
    }
  ];

  return (
    <>
      <div className="mt-16 mb-8 text-center" id="portfolio">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          My <span className="text-blue-500">Portfolio</span>
        </h1>
      </div>

      <div ref={sliderRef} className="w-5/6 mx-auto mb-12 keen-slider">
        {portfolio.map((i) => (
          <div
            className={`porftolio-item w-48 rounded-lg keen-slider__slide number-slide${i.id}`}
            style={{ minWidth: '600px' }}
          >
            <a
              href={i.href}
              target="__blank"
              className="flex items-center justify-center h-64 overflow-hidden transition duration-150 ease-in-out border-b-8 border-blue-500 rounded-md "
            >
              <img className="object-cover w-full h-full" src={i.image} alt="" />
              <div class="portfolio-hover text-white bg-blue-500 bg-opacity-75 absolute w-full left-0 ">
                <h4 className="text-lg font-extrabold">{i.name}</h4>
                <div className="mt-2 text-xs text-gray-300 uppercase">eShop / Perfum </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* <section className="py-5">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((i) => (
                <div className="w-full max-w-xs bg-blue-500 rounded-lg">
                  <a
                    href={i.href}
                    target="__blank"
                    className="flex items-center justify-center h-64 overflow-hidden transition duration-150 ease-in-out border-b-8 border-blue-500 rounded-md hover:opacity-50"
                  >
                    <img className="object-cover w-full h-full" src={i.image} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}
