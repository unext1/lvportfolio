import Burger from '@animated-burgers/burger-arrow';

import '@animated-burgers/burger-arrow/dist/styles.css';

export default function Header() {
  const navLinks = [
    {
      name: 'home',
      href: '/#home'
    },
    {
      name: 'user',
      href: '/#about'
    },
    {
      name: 'plane',
      href: '/#journey'
    },
    {
      name: 'address-card',
      href: '/#portfolio'
    },
    { name: 'book', href: '/#contact' }
  ];

  const [nav, setNav] = React.useState(false);

  React.useEffect(() => {
    if (screen.width > 800) {
      setNav(true);
    }
  }, []);

  return (
    <>
      <div className={`flex-row hidden md:flex transition duration-150 ease-in-out` && nav ? 'flex' : 'hidden'}>
        <nav className="fixed z-40 flex flex-col justify-between w-20 h-full bg-gray-900">
          <div className="mx-auto mt-5">
            <a href="/#home" className="">
              <img
                src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/40664551_1933389363366520_3070774279449608192_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=OCq9805fy2QAX-UAne3&_nc_ht=scontent.fmmx3-1.fna&oh=b4c12dceef189bd0ce3ae5d7331dafe2&oe=5FD4721D"
                className="w-10 h-10 mx-auto mb-3 transition duration-150 ease-in-out border-2 border-transparent rounded-full hover:border-blue-500"
              />
            </a>
            ;
            <div className="">
              <ul>
                {navLinks.map((i) => (
                  <li className="mb-8 text-center">
                    <a href={i.href}>
                      <span className="text-center text-gray-300 transition duration-150 ease-in-out fill-current hover:text-blue-500">
                        <i className={`text-lg fa fa-${i.name}`}></i>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="text-center">
            <ul>
              <li className="mb-8">
                <a href="#">
                  <span className="text-center text-gray-300 transition duration-150 ease-in-out fill-current hover:text-red-500">
                    <i className="text-lg fa fa-instagram"></i>
                  </span>
                </a>
              </li>
              <li className="mb-8">
                <a href="#">
                  <span className="text-center text-gray-300 transition duration-150 ease-in-out fill-current hover:text-blue-500 ">
                    <i className="text-lg fa fa-facebook"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <button
        onClick={() => setNav(!nav)}
        class="md:hidden fixed z-50 top-0 mt-5 bg-gray-900 shadow-lg border-blue-500 text-white pt-2 pb-3 px-4 border-b-4 border-blue-dark rounded-lg active:outline-none hover:outline-none focus:outline-none hover:bg-blue-500 transition duration-150 ease-in-out"
        style={{ marginLeft: 16 }}
      >
        <Burger isOpen={nav} Component="button" type="button" style={{ fontSize: '6px', outline: 'none ' }} />
      </button>
    </>
  );
}
