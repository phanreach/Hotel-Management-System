export default function NavBar() {
  return (
    <div>
      <nav className="bg-neutral-primary fixed w-full z-20 top-0 start-0 border-b border-default">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-7"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-multi-level-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
            aria-controls="navbar-multi-level-dropdown"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level-dropdown"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-neutral-primary">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  id="multiLevelDropdownButton"
                  data-dropdown-toggle="multi-dropdown"
                  className="flex items-center justify-between w-full py-2 px-3 rounded font-medium text-heading md:w-auto hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0"
                >
                  Dropdown
                </button>
                <div
                  id="multi-dropdown"
                  className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
                >
                  <ul
                    className="p-2 text-sm text-body font-medium"
                    aria-labelledby="multiLevelDropdownButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Dashboard
                      </a>
                    </li>
                    <li>
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Dropdown
                      </button>
                      <div
                        id="doubleDropdown"
                        className="z-10 hidden bg-neutral-primary-medium border border-default-medium rounded-base shadow-lg w-44"
                      >
                        <ul
                          className="p-2 text-sm text-body font-medium"
                          aria-labelledby="dropdownMultiLevelButton"
                        >
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                            >
                              Overview
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                            >
                              My downloads
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                            >
                              Billing
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                            >
                              Rewards
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Earnings
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="inline-flex items-center w-full p-2 hover:bg-neutral-tertiary-medium hover:text-heading rounded"
                      >
                        Sign out
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
