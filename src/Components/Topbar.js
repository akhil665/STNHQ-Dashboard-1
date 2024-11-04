import React from "react";

export default function Topbar() {
  return (
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
    </div>
  );
}
