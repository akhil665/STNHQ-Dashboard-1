import React from "react";

export default function Header() {
  return (
    <div>
      <header className=" relative wrapper  bg-[rgba(246,247,249,1)] ">
        <nav className="navbar navbar-expand-lg center-nav navbar-light !bg-[#ffffff] ">
          <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
            <div className="navbar-brand w-full flexing-responsive">
              <a href="index.html">
                <img
                  src="assets/img/govt.colour.png"
                  alt="image"
                  className="responsive-image mr-3"
                />
              </a>
              <a href="index.html">
                <img
                  src="assets/img/Ministry_of_Defence-1.webp"
                  alt="image"
                  className="responsive-image ml-2 mr-2"
                />
              </a>
              <a href="index.html">
                <img
                  src="assets/img/flag.png"
                  alt="image"
                  className="responsive-image ml-2"
                />
              </a>
              <a href="index.html">
                <img
                  src="assets/img/ECHS-removebg-preview.png"
                  alt="image"
                  className="responsive-image"
                />
              </a>
            </div>
            <div className="responsive-position navbar-collapse offcanvas offcanvas-nav offcanvas-start ">
              <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
                <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0" />
                <button
                  type="button"
                  className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                <ul className="navbar-nav ">
                  <li className="nav-item ">
                    <a
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#d16b86] after:!text-[#d16b86]"
                      href="./home.html"
                      data-bs-toggle="dropdown"
                    >
                      Home
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle  font-bold tracking-[-0.01rem] hover:!text-[#d16b86] after:!text-[#d16b86]"
                      href="#"
                      data-bs-toggle="dropdown"
                    >
                      About
                    </a>
                    <ul className="dropdown-menu">
                      <li className="dropdown dropdown-submenu dropend">
                        <a
                          className="dropdown-item hover:!text-[#d16b86] dropdown-toggle"
                          href="./about.html"
                        >
                          ECHS
                        </a>
                      </li>
                      <li className="dropdown dropdown-submenu dropend">
                        <a
                          className="dropdown-item hover:!text-[#d16b86] dropdown-toggle"
                          href="#"
                          data-bs-toggle="dropdown"
                        >
                          VEER
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#d16b86] after:!text-[#d16b86]"
                      href="./contact.html"
                    >
                      Contact Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link font-bold tracking-[-0.01rem] hover:!text-[#d16b86] after:!text-[#d16b86]"
                      href="./gallery.html"
                    >
                      Gallery
                    </a>
                  </li>
                  <li className="nav-item hidden xl:block lg:block md:block pt-2">
                    <a
                      className="btn btn-sm btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)] sheen-effect"
                      href="./login.html"
                    >
                      Login
                    </a>
                  </li>
                </ul>
                <div className="offcanvas-footer xl:hidden lg:hidden">
                  <div>
                    <a
                      href="mailto:first.last@email.com"
                      className="link-inverse"
                    >
                      info@email.com
                    </a>
                    <br /> 00 (123) 456 78 90 <br />
                  </div>
                </div>
              </div>
            </div>
            <div className="navbar-other w-full !flex !ml-auto">
              <ul className="navbar-nav !flex-row !items-center !ml-auto">
                <li className="nav-item"></li>
                <li className="nav-item xl:hidden lg:hidden">
                  <button className="hamburger offcanvas-nav-btn">
                    <span />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
