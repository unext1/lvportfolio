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
      <div className="mt-16 mb-2 text-center" id="portfolio">
        <h1 className="text-3xl font-bold text-gray-900 uppercase">
          My <span className="text-blue-500">Portfolio</span>
        </h1>
      </div>
      <section className="py-5">
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
      </section>
    </>
  );
}
