export default function Skils() {
  const portfolio = [
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    },
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    },
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    },
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    },
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    },
    {
      name: 'aurehome',
      image: 'https://i.imgur.com/8RvoUhC.png',
      href: 'https://aurehome.com/'
    }
  ];

  return (
    <>
      <div class="text-center mb-2 mt-16" id="portfolio">
        <h1 class="text-3xl uppercase text-gray-900 font-bold">
          My <span className="text-blue-500">Portfolio</span>
        </h1>
      </div>
      <section class="py-5">
        <div class="max-w-5xl mx-auto text-center">
          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolio.map((i) => (
                <div class="max-w-xs w-full bg-blue-500 rounded-lg">
                  <a
                    href={i.href}
                    target="__blank"
                    class="flex items-center justify-center h-64 border-b-8 border-blue-500 rounded-md overflow-hidden hover:opacity-50 transition duration-150 ease-in-out"
                  >
                    <img class="object-cover h-full w-full" src={i.image} alt="" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
