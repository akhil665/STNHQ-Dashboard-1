import React from "react";
import "../Styles/home.css";

export default function Home() {
  return (
    <React.Fragment>
      <>
        <div>
          <div className="bg-[rgba(63,120,224)] text-white font-bold text-[.75rem] mb-2">
            <div className="container py-2 xl:flex lg:flex md:flex xl:flex-row lg:flex-row md:flex-row">
              <div className="flex flex-row pt-2 ">
                <div className="icon text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
                  <i className="fas fa-map-marker-alt" />
                </div>
                <address className="mb-0 not-italic leading-[inherit] block blinker-top">
                  STATION HEADQUATERS TRIVANDRUM
                </address>
              </div>
              <div className="flex flex-row items-center me-6 ms-auto">
                <div className="icon text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
                  {" "}
                  <i className="uil uil-phone-volume before:content-['\ec50']" />
                </div>
                <p className="mb-0">0471 235 4715</p>
              </div>
              <div className="flex flex-row items-center">
                <div className="icon text-white !text-[1.1rem] !mt-[.25rem] !mr-[.5rem]">
                  {" "}
                </div>
                <marquee>
                  <p className="mb-0">
                    <i className="uil uil-location-pin-alt before:content-['\ebd8']" />
                    <a
                      href="mailto:sandbox@email.com"
                      className="hover text-white hover:!text-white"
                    >
                      GX4H+53F,Vivekananda Nagar, Pangodu, Thiruvananthapuram
                    </a>
                  </p>
                </marquee>
              </div>
            </div>
          </div>
          <div className="grow shrink-0">
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
            <section className="wrapper  bg-[#21262c] opacity-100 ">
              <div
                className="swiper-container slider-size dots-over relative z-10"
                data-margin={0}
                data-autoplay="true"
                data-autoplaytime={4000}
                data-nav="true"
                data-dots="true"
                data-items={1}
              >
                <div className="swiper">
                  <div className="swiper-wrapper">
                    <div
                      className="slider-img-height swiper-slide  bg-[#21262c] opacity-100  bg-image !bg-cover !bg-[center_center]  before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 "
                      data-image-src="assets/img/slider-1.png"
                    >
                      <div className="container !h-full">
                        <div className="flex flex-wrap mx-[-15px] !h-full">
                          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-0 xl:w-6/12 xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full text-center lg:text-left xl:text-left justify-center self-center items-start">
                            <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s slider-text">
                              VEER
                            </h2>
                            <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s slider-text">
                              A comprehensive digital platform designed to
                              enhance operational efficiency, streamline
                              administrative&nbsp;processes
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slider-img-height swiper-slide  opacity-100  bg-image !bg-cover !bg-[center_center]  before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0"
                      data-image-src="assets/img/slider-2.jpg"
                    >
                      <div className="container !h-full">
                        <div className="flex flex-wrap mx-[-15px] !h-full">
                          <div className="md:w-11/12 lg:w-8/12 xl:w-7/12 xxl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !text-center justify-center self-center">
                            <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s">
                              We are trusted by over a million customers.
                            </h2>
                            <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s">
                              Here a few reasons why our customers choose us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slider-img-height swiper-slide  opacity-100  bg-image !bg-cover !bg-[center_center]  before:content-[''] before:block before:absolute before:z-[1] before:w-full before:h-full before:left-0 before:top-0 "
                      data-image-src="assets/img/slider3.png"
                    >
                      <div className="container !h-full">
                        <div className="flex flex-wrap mx-[-15px] !h-full">
                          <div className="md:w-10/12 md:!ml-[8.33333333%] lg:w-7/12 lg:!ml-[41.66666667%] xl:w-6/12 xl:!ml-[50%] xxl:w-5/12 w-full flex-[0_0_auto] px-[15px] max-w-full xxl:!ml-[50%] text-center lg:text-left xl:text-left justify-center self-center items-start">
                            <h2 className="xl:text-[2.8rem] !leading-[1.2] font-bold text-[calc(1.405rem_+_1.86vw)] mb-4 text-white animate__animated animate__slideInDown animate__delay-1s slider-text">
                              Just sit and relax.
                            </h2>
                            <p className="lead text-[1.15rem] leading-normal mb-7 text-white animate__animated animate__slideInRight animate__delay-2s slider-text">
                              We make sure your spending is stress free so that
                              you can have the perfect control.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="row container col-md-10 wrapper !bg-[#ffffff]">
              <div className="col-md-10  py-[4.5rem] xl:!py-22 lg:!py-22 md:!py-22">
                <div className="col-md-12 flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] items-center">
                  <div className="col-md-12 xl:w-12/12 lg:w-12/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[50px]">
                    <h2 className="col-md-12 !text-[.75rem] uppercase text-line relative align-top pl-[1.4rem] inline-flex tracking-[0.02rem] leading-[1.35] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0] text-[#3f78e0] !mb-3 typewriter">
                      Think unique and be innovative. Make a difference With
                      ECHS CELL
                    </h2>
                    <h3 className="col-md-12 text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] !leading-[1.3] mb-5">
                      Collaboration for Impact: A Project in Action
                    </h3>
                    <p className=" col-md-12">
                      Retired Armed Forces personnel till 2002 could avail
                      medical facilities only for specific high cost
                      surgery/treatment for a limited number of diseases covered
                      under the Army Group Insurance(Medical Branch Scheme)
                      (AGI(MBS)) and Armed Forces Group Insurance
                      Scheme(Management Information System) (AFGIS (MIS))
                      schemes. These medicare schemes could provide some relief
                      to the ESM, but it was not a comprehensive scheme as
                      compared to and available for other Central Government
                      Employees. Therefore, the requirement was felt of
                      establishing a medicare system which could provide quality
                      medicare to the retirees of the Armed Forces. Based on
                      this noble aim, and after detailed deliberations, a
                      comprehensive scheme has taken shape as ECHS, authorised
                      vide Government of India, Ministry of Defence letter No
                      22(i) 01/US/D(Res) dated 30 Dec 2002. The ECHS was
                      launched with effect from 01 Apr 2003. With the advent of
                      this scheme. Ex-servicemen pensioners and their dependants
                      who were only entitled for treatment in service hospital
                      are now authorised treatment, not only in service
                      hospitals, but also in those civil/private hospitals which
                      are specifically empanelled with the ECHS.
                    </p>
                    <a
                      href="#"
                      className="btn btn-primary text-white !bg-[#3f78e0] border-[#3f78e0] hover:text-white hover:bg-[#3f78e0] hover:border-[#3f78e0] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#3f78e0] active:border-[#3f78e0] disabled:text-white disabled:bg-[#3f78e0] disabled:border-[#3f78e0] !rounded-[50rem] mt-3 hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                    >
                      More About Us
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className="">
          <section className="bg-1">
            <div className="container-fluid pt-20 !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="lg:w-10/12 xl:w-9/12 xxl:w-8/12 flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                  <img
                    src="assets/img/svg/doodle4.svg"
                    className="h-8 absolute hidden xl:block lg:block"
                    style={{ top: "6%", right: "2%" }}
                    alt="image"
                  />{" "}
                  --&gt;
                  <h2 className=" text-[0.8rem] !leading-[1.35] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3">
                    Software Features
                  </h2>
                  <h3 className="xl:text-[2rem] text-[calc(1.325rem_+_0.9vw)] font-semibold !leading-[1.2] mb-12 lg:!px-5 xl:!px-0 xxl:!px-6">
                    VEER makes your spending{" "}
                    <span className="text-gradient gradient-7">
                      stress-free
                    </span>{" "}
                    for you to have the perfect control.
                  </h3>
                </div>
              </div>
              <marquee scrollamount={8}>
                <div className="flex !flex-nowrap mx-[-15px] xl:mx-0 lg:mx-0 md:mx-0 !text-center">
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg !bg-[#fef3e4] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/cloud-network-2.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Recruitment Process</h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg bg-[#e1f6f0] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/touchscreen.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Monthly Accounts </h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg bg-[#e9eaf8] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/lock.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Daily DASR Updates</h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg bg-[#f8e7ec] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/rocket.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">
                      Daily Referral State Updates
                    </h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg bg-[#f0eaf6] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/bar-chart.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Reports &amp; Forecasting</h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg bg-[#e0e9fa] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/controls.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Configurable Fields</h4>
                  </div>
                  <div className="w-[10%] flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                    <div className="svg-bg svg-bg-lg !bg-[#eaf3ef] !rounded-[0.8rem] mb-4">
                      {" "}
                      <img
                        src="assets/img/icons/solid/checked.svg"
                        className="svg-inject icon-svg solid text-[#343f52] text-navy"
                        alt="image"
                      />{" "}
                    </div>
                    <h4 className="text-[1rem]">Always up to Date</h4>
                  </div>
                </div>
              </marquee>
            </div>
          </section>
          <section
            id="snippet-3"
            className="wrapper !bg-[#ffffff]  border-b-[rgba(164,174,198,0.2)] border-b border-solid"
          >
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28 ">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-9/12 xl:w-8/12 xxl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <h2 className="!text-[.75rem] !leading-[1.35] uppercase text-[#3f78e0]  !text-center">
                    In under
                  </h2>
                  <h3 className="text-[calc(1.305rem_+_0.66vw)] font-bold xl:text-[1.8rem] !leading-[1.3] !mb-6 !text-center">
                    Think unique and be innovative. Make a difference With ECHS
                    CELL{" "}
                  </h3>
                </div>
              </div>
              <div className="!relative">
                <div
                  className="shape bg-dot primary rellax !w-[7rem] !h-[10rem] !absolute z-[1] opacity-50 !bg-[radial-gradient(#3f78e0_2px,transparent_2.5px)]"
                  data-rellax-speed={1}
                  style={{ top: 0, left: "-1.7rem" }}
                />
                <div
                  className="swiper-container dots-closer blog grid-view !mb-6"
                  data-margin={0}
                  data-dots="true"
                  data-items-xl={3}
                  data-items-md={2}
                  data-items-xs={1}
                >
                  <div className="swiper">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="item-inner">
                          <article>
                            <div className="card founder-card">
                              <figure className="card-img-top overlay overlay-1 hover-scale group">
                                <a href="#">
                                  {" "}
                                  <img
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="./assets//img//Brigg-removebg-preview.png"
                                    alt="image"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2"></figcaption>
                              </figure>
                              <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                <div className="post-header">
                                  <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                    <a
                                      href="#"
                                      className="hover"
                                      rel="category"
                                    >
                                      Station Commander
                                    </a>
                                  </div>
                                  <h2 className="post-title h3 !mt-1 !mb-3 text-[#343f52]">
                                    Brigadier Salil M.P
                                  </h2>
                                </div>
                                <div className="!relative">
                                  <p>Station HeadQuaters Tvm</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="item-inner">
                          <article>
                            <div className="card founder-card">
                              <figure className="card-img-top overlay overlay-1 hover-scale group">
                                <a href="#">
                                  {" "}
                                  <img
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="./assets//img//Brigg-removebg-preview.png"
                                    alt="image"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2"></figcaption>
                              </figure>
                              <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                <div className="post-header">
                                  <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                    <a
                                      href="#"
                                      className="hover"
                                      rel="category"
                                    >
                                      Adam Commander
                                    </a>
                                  </div>
                                  <h2 className="post-title h3 !mt-1 !mb-3 text-[#343f52] ">
                                    Brigadier Salil M.P
                                  </h2>
                                </div>
                                <div className="!relative">
                                  <p>Station HeadQuaters Tvm</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="item-inner">
                          <article>
                            <div className="card founder-card">
                              <figure className="card-img-top overlay overlay-1 hover-scale group">
                                <a href="#">
                                  {" "}
                                  <img
                                    className="!transition-all !duration-[0.35s] !ease-in-out group-hover:scale-105"
                                    src="./assets//img//Brigg-removebg-preview.png"
                                    alt="image"
                                  />
                                </a>
                                <figcaption className="group-hover:opacity-100 absolute w-full h-full opacity-0 text-center px-4 py-3 inset-0 z-[5] pointer-events-none p-2"></figcaption>
                              </figure>
                              <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[1.75rem_1.75rem_1rem_1.75rem] lg:p-[1.75rem_1.75rem_1rem_1.75rem] md:p-[1.75rem_1.75rem_1rem_1.75rem] sm:pb-4 xsm:pb-4  ">
                                <div className="post-header">
                                  <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                                    <a
                                      href="#"
                                      className="hover"
                                      rel="category"
                                    >
                                      Officer-In-Charge
                                    </a>
                                  </div>
                                  <h2 className="post-title h3 !mt-1 !mb-3  text-[#343f52] hover:text-[#3f78e0]">
                                    Lt Col Gopa Kumar
                                  </h2>
                                </div>
                                <div className="!relative">
                                  <p>Station HeadQuaters Tvm</p>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <footer className="footer-background opacity-100  text-[#cacaca] mt-5 xl:!mt-24 lg:!mt-24 md:!mt-24">
          <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
            <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
              <div className="md:w-4/12 xl:w-2/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <img
                    className="!mb-4 footer-icon"
                    src="assets/img/veerlogo.png"
                    srcSet="assets/img/veerlogo.png"
                    alt="image"
                  />
                </div>
                <a href="index.html">
                  <img
                    src="assets/img/ashoka.gif"
                    alt="image"
                    className="responsive-image"
                  />
                </a>
              </div>
              <div className="md:w-3/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3">Quick Links</h4>
                  <ul className="pl-0 list-none   !mb-0">
                    <li>
                      <a
                        className="text-[#cacaca] hover:text-[#3f78e0]"
                        href="./home.html"
                      >
                        Home
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#3f78e0]"
                        href="./gallery.html"
                      >
                        Gallery
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#3f78e0]"
                        href="./about.html"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#3f78e0]"
                        href="./contact.html"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3">
                    Get in Touch
                  </h4>
                  <a
                    className="text-[#cacaca] hover:text-[#3f78e0]"
                    href="mailto:first.last@email.com"
                  >
                    shqtrivandrum@echs.gov.in
                  </a>
                  <br /> 00 (123) 456 78 90
                  <p className="!mb-5">
                    <i className="uil uil-location-pin-alt before:content-['\ebd8']" />{" "}
                    GX4H+53F,Vivekananda Nagar, Pangodu, Thiruvananthapuram
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-full xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <div className="md:w-full xl:w-12/12 lg:w-12/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px] ">
                  <div className="card !shadow-[0_0.25rem_1.75rem_rgba(30,34,40,0.07)]">
                    <div className="card-body flex-[1_1_auto] p-[40px]">
                      <a
                        href="./prisma/index.html"
                        target="_blank"
                        className=" hover text-[#f78b77] focus:text-[#f78b77] hover:text-[#f78b77]"
                      >
                        Powered by <br />
                      </a>
                      <img
                        src="assets/img/p-logo.png"
                        className=""
                        width={150}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
            />
          </svg>
        </div>
      </>
    </React.Fragment>
  );
}
