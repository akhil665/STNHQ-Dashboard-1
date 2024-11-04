import React from "react";
import "../Styles/about.css";

export default function About() {
  return (
    <>
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
      <header className=" relative wrapper  bg-[rgba(246,247,249,1)] ">
        <nav className="navbar navbar-expand-lg center-nav navbar-light !bg-[#ffffff] ">
          <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
            <div className="navbar-brand w-full flexing-responsive">
              <a href="index.html">
                <img
                  src="assets/img/Ministry_of_Defence-1.webp"
                  alt="image"
                  className="responsive-image"
                />
              </a>
              <a href="index.html">
                <img
                  src="assets/img/India_120-animated-flag-gifs.gif"
                  alt="image"
                  className=""
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
                <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
                  Sandbox
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>
              <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link  font-bold tracking-[-0.01rem] hover:!text-[#d16b86] after:!text-[#d16b86]"
                      href="./home.html"
                      data-bs-toggle=""
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
                      data-bs-toggle=""
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
      <div>
        <section className="wrapper background-gif">
          <div className="container !pt-10 !pb-36 xl:!pt-[4.5rem] lg:!pt-[4.5rem] md:!pt-[4.5rem] xl:!pb-40 lg:!pb-40 md:!pb-40 !text-center">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="md:w-10/12 lg:w-8/12 xl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <h1 className="text-[calc(1.365rem_+_1.38vw)] font-bold leading-[1.2] xl:text-[2.4rem] !mb-3">
                  About Us
                </h1>
                <p className="lead lg:!px-[1.25rem] xl:!px-[1.25rem] xxl:!px-[2rem] leading-[1.65] text-[0.9rem] font-medium max-w-full">
                  ECHS (Ex-Servicemen Contributory Health Scheme).
                </p>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </section>
        {/* /section */}
        <div className="wrapper !bg-[#ffffff]">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px]">
              <div className="xl:w-12/12 lg:w-12/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                <div className="blog classic-view !mt-[-7rem]">
                  <article className="post mb-8">
                    <div className="card content-section">
                      <div className="card-body flex-[1_1_auto] p-[40px] xl:p-[2rem_2.5rem_1.25rem] lg:p-[2rem_2.5rem_1.25rem] md:p-[2rem_2.5rem_1.25rem] sm:pb-4 xsm:pb-4  ">
                        <div className="post-header !mb-[.9rem]">
                          <div className="inline-flex mb-[.4rem] uppercase tracking-[0.02rem] text-[0.7rem] font-bold text-[#aab0bc] relative align-top pl-[1.4rem] before:content-[''] before:absolute before:inline-block before:translate-y-[-60%] before:w-3 before:h-[0.05rem] before:left-0 before:top-2/4 before:bg-[#3f78e0]">
                            <a href="#" className="hover" rel="category">
                              Who we are
                            </a>
                          </div>
                          {/* /.post-category */}
                          <h2
                            className="post-title mt-1 !leading-[1.35] !mb-0"
                            style={{ textAlign: "center" }}
                          >
                            <a
                              className="text-[#343f52] hover:text-[#3f78e0]"
                              href="blog-post.html"
                            >
                              Collaboration for Impact: A Project in Action
                            </a>
                          </h2>
                        </div>
                        {/* /.post-header */}
                        <div className="!relative">
                          <p style={{ textAlign: "justify" }}>
                            Retired Armed Forces personnel till 2002 could avail
                            medical facilities only for specific high cost
                            surgery/treatment for a limited number of diseases
                            covered under the Army Group Insurance(Medical
                            Branch Scheme) (AGI(MBS)) and Armed Forces Group
                            Insurance Scheme(Management Information System)
                            (AFGIS (MIS)) schemes. These medicare schemes could
                            provide some relief to the ESM, but it was not a
                            comprehensive scheme as compared to and available
                            for other Central Government Employees. Therefore,
                            the requirement was felt of establishing a medicare
                            system which could provide quality medicare to the
                            retirees of the Armed Forces. Based on this noble
                            aim, and after detailed deliberations, a
                            comprehensive scheme has taken shape as ECHS,
                            authorised vide Government of India, Ministry of
                            Defence letter No 22(i) 01/US/D(Res) dated 30 Dec
                            2002. The ECHS was launched with effect from 01 Apr
                            2003. With the advent of this scheme. Ex-servicemen
                            pensioners and their dependants who were only
                            entitled for treatment in service hospital are now
                            authorised treatment, not only in service hospitals,
                            but also in those civil/private hospitals which are
                            specifically empanelled with the ECHS.
                          </p>
                        </div>
                        {/* /.post-content */}
                      </div>
                    </div>
                    {/* /.card */}
                  </article>
                  {/* /.post */}
                </div>
              </div>
              {/* /column */}
            </div>
            {/* /.row */}
          </div>
          {/* /.container */}
        </div>
        <section className="bg-1 mb-5">
          <div className="container !pb-[4.5rem] xl:!pb-24 lg:!pb-24 md:!pb-24">
            <div className="flex flex-wrap mx-[-15px] !text-center mb-14 xl:!mb-20 lg:!mb-20 md:!mb-20">
              {/* /column */}
            </div>
            {/*/.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] xl:mt-0 lg:mt-0 md:mt-0 !text-center">
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full sm:mt-[30px] xsm:mt-[30px]">
                <img
                  src="assets/img/icons/lineal/megaphone.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#3f78e0] text-blue !mb-3  m-[0_auto]"
                  alt="image"
                />
                <h4>Medical Facilities Availability</h4>
                <p className="!mb-2">
                  ECHS ensures that essential medical facilities are
                  consistently available to meet the healthcare needs of
                  ex-servicemen and their families.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full sm:mt-[30px] xsm:mt-[30px]">
                <img
                  src="assets/img/icons/lineal/target.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#45c4a0] text-green !mb-3 m-[0_auto]"
                  alt="image"
                />
                <h4>Patient Care Quality</h4>
                <p className="!mb-2">
                  With a strong emphasis on high standards, ECHS delivers
                  exceptional patient care, ensuring that beneficiaries receive
                  the best possible treatment and support.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full sm:mt-[30px] xsm:mt-[30px]">
                <img
                  src="assets/img/icons/lineal/settings-3.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#fab758] text-yellow !mb-3  m-[0_auto]"
                  alt="image"
                />
                <h4>Drug and Equipment Supply</h4>
                <p className="!mb-2">
                  ECHS maintains a reliable supply chain for necessary
                  medications and medical equipment, ensuring that patients
                  receive the treatments they require.
                </p>
              </div>
              {/*/column */}
              <div className="md:w-6/12 lg:w-3/12 xl:w-3/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full sm:mt-[30px] xsm:mt-[30px]">
                <img
                  src="assets/img/icons/lineal/bar-chart.svg"
                  className="svg-inject icon-svg icon-svg-md !w-[2.6rem] !h-[2.6rem] text-[#f78b77] text-orange !mb-3 m-[0_auto]"
                  alt="image"
                />
                <h4>Beneficiary Satisfaction</h4>
                <p className="!mb-2">
                  ECHS consistently achieves high levels of beneficiary
                  satisfaction, reflecting its commitment to meeting the
                  healthcare needs of its members.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
        </section>
        <section className="mb-5">
          <div className="container !pb-[1.5rem] xl:!pb-12 lg:!pb-12 md:!pb-12">
            <div className="flex flex-wrap mx-[-15px] !text-center mb-14 xl:!mb-20 lg:!mb-20 md:!mb-20">
              {/* /column */}
            </div>
            {/* /.row */}
            <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-30px] mb-10 items-center">
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full xl:!order-2 lg:!order-2">
                <ul className="progress-list m-0 p-0 list-none">
                  <li className="mb-4">
                    <p className="mb-1">Medical Facilities Availability</p>
                    <div
                      className="progressbar line relative blue"
                      data-value={100}
                    />
                  </li>
                  <li className="mb-4">
                    <p className="mb-1">Referral Management Efficiency</p>
                    <div
                      className="progressbar line relative yellow"
                      data-value={98}
                    />
                  </li>
                  <li className="mb-4">
                    <p className="mb-1">Beneficiary Satisfaction</p>
                    <div
                      className="progressbar line relative orange"
                      data-value={99}
                    />
                  </li>
                  <li className="mb-4">
                    <p className="mb-1">Drug and Equipment Supply</p>
                    <div
                      className="progressbar line relative green"
                      data-value={100}
                    />
                  </li>
                  <li className="mb-4">
                    <p className="mb-1">Patient Care Quality</p>
                    <div
                      className="progressbar line relative violet"
                      data-value={99}
                    />
                  </li>
                  <li className="mb-4">
                    <p className="mb-1">Data and Records Accuracy</p>
                    <div
                      className="progressbar line relative pink"
                      data-value={100}
                    />
                  </li>
                </ul>
                {/* /.progress-list */}
              </div>
              {/*/column */}
              <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] px-[15px] mt-[30px] max-w-full">
                <h3 className="text-[calc(1.285rem_+_0.42vw)] font-bold xl:text-[1.6rem] !leading-[1.3] mb-5">
                  "Comprehensive Healthcare for Heroes: ECHS Ensuring Wellness
                  Beyond Service"
                </h3>
                <p>
                  We offers comprehensive medical care and healthcare services
                  to ex-servicemen pensioners and their dependents, providing
                  access to outpatient treatment, hospitalization, specialist
                  consultations, diagnostics, and referral services through a
                  network of polyclinics, empaneled hospitals, and diagnostic
                  centers across India.
                </p>
              </div>
              {/*/column */}
            </div>
            {/*/.row */}
          </div>
          {/* /.container */}
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
                {/*  <p class="!mb-4 bg-[#21262c]">© 2024 Sandbox. <br class="hidden xl:block lg:block text-[#cacaca]">All rights reserved.</p> */}
                {/*  <nav class="nav social social-white">
          <a class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="#"><i class="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i></a>
          <a class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="#"><i class="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i></a>
          <a class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="#"><i class="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i></a>
          <a class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="#"><i class="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i></a>
          <a class="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]" href="#"><i class="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i></a>
        </nav> */}
                {/* /.social */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            {/* /column */}
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
              {/* /.widget */}
            </div>
            <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <h4 className="widget-title text-white !mb-3">Get in Touch</h4>
                <a
                  className="text-[#cacaca] hover:text-[#3f78e0]"
                  href="mailto:first.last@email.com"
                >
                  info@email.com
                </a>
                <br /> 00 (123) 456 78 90
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
            <div className="md:w-full xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
              <div className="widget text-[#cacaca]">
                <h4 className="widget-title text-white !mb-3">Our Location</h4>
                <p className="!mb-5">
                  <i className="uil uil-location-pin-alt before:content-['\ebd8']" />{" "}
                  GX4H+53F,Vivekananda Nagar, Pangodu, Thiruvananthapuram
                </p>
                {/* /.newsletter-wrapper */}
              </div>
              {/* /.widget */}
            </div>
            {/* /column */}
          </div>
          {/*/.row */}
        </div>
        {/* <div class="footer-copyright" ><p>© VEER .All Rights Reserved</p></div> */}
        {/*  <div class="footer-copyright pb-3 pt-3 ">
    <div class="container pt-3">
        <div class="row pt-3">
            <div class="col-md-12 pt-3">
                <p>© 2024 VEER. All rights reserved.</p>
            </div>
        </div>
    </div>
      </div> */}
        {/* /.container */}
      </footer>
      {/* progress wrapper */}
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
  );
}
