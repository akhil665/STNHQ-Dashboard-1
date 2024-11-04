import React from "react";
import "../Styles/about.css";

export default function Footer() {
  return (
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
              <h4 className="widget-title text-white !mb-3">Get in Touch</h4>
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
  );
}
