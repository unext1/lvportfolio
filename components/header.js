export default function Header() {
  const navLinks = [
    {
      name: 'home',
      href: '/#home'
    },
    {
      name: 'plane',
      href: '/#journey'
    },
    {
      name: 'signal',
      href: '/#skils'
    },
    {
      name: 'book',
      href: '/#portfolio'
    }
  ];

  return (
    <>
      <div class="flex flex-row">
        <nav class="bg-gray-900 w-20 h-full justify-between flex flex-col fixed z-50">
          <div class="mt-5">
            <a href="/#home">
              <img
                src="https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-9/40664551_1933389363366520_3070774279449608192_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=OCq9805fy2QAX-UAne3&_nc_ht=scontent.fmmx3-1.fna&oh=b4c12dceef189bd0ce3ae5d7331dafe2&oe=5FD4721D"
                class="rounded-full w-10 h-10 mb-3 mx-auto  border-transparent hover:border-blue-500 border-2 transition duration-150 ease-in-out"
              />
            </a>
            <div class="mt-8">
              <ul>
                {navLinks.map((i) => (
                  <li class="mb-8 text-center">
                    <a href={i.href}>
                      <span class="fill-current text-gray-300 text-center hover:text-blue-500  transition duration-150 ease-in-out">
                        <i className={`text-lg fa fa-${i.name}`}></i>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div class="text-center">
            <ul>
              <li className="mb-8">
                <a href="#">
                  <span class="fill-current text-gray-300 text-center hover:text-red-500 transition duration-150 ease-in-out">
                    <i className="text-lg fa fa-instagram"></i>
                  </span>
                </a>
              </li>
              <li className="mb-8">
                <a href="#">
                  <span class="fill-current text-gray-300 text-center hover:text-blue-500 transition duration-150 ease-in-out ">
                    <i className="text-lg fa fa-facebook"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
