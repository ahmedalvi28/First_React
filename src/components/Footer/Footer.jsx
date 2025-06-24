import React from "react";
import styles from "./footer.module.css";

function TwitterIcon() {
  return (
    <svg
      className="w-6 h-6 fill-black transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      className="w-[22px] h-[22px] fill-black transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 8 14"
    >
      <path d="M2.70873 12.8875V7.334H0.839844V5.16968H2.70873V3.57355C2.70873 1.72126 3.84005 0.712646 5.49242 0.712646C6.28392 0.712646 6.96418 0.771576 7.16243 0.797915V2.73367L6.01642 2.73419C5.11776 2.73419 4.94376 3.16122 4.94376 3.78785V5.16968H7.08697L6.80791 7.334H4.94376V12.8875H2.70873Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      className="w-6 h-6 fill-black transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 14 15"
    >
      <path d="M7.00076 2.03095C8.80947 2.03095 9.02366 2.03772 9.73818 2.0703C10.1678 2.07556 10.5933 2.15444 10.9962 2.30353C11.2884 2.41622 11.5538 2.58885 11.7753 2.8103C11.9967 3.03176 12.1694 3.29713 12.282 3.58933C12.4311 3.99227 12.51 4.4178 12.5153 4.8474C12.5475 5.56191 12.5546 5.77611 12.5546 7.58482C12.5546 9.39353 12.5479 9.60772 12.5153 10.3222C12.51 10.7518 12.4311 11.1774 12.282 11.5803C12.1694 11.8725 11.9967 12.1379 11.7753 12.3593C11.5538 12.5808 11.2884 12.7534 10.9962 12.8661C10.5933 13.0152 10.1678 13.0941 9.73818 13.0993C9.02398 13.1316 8.80979 13.1387 7.00076 13.1387C5.19172 13.1387 4.97753 13.1319 4.26334 13.0993C3.83373 13.0941 3.40821 13.0152 3.00527 12.8661C2.71307 12.7534 2.44769 12.5808 2.22624 12.3593C2.00479 12.1379 1.83216 11.8725 1.71947 11.5803C1.57038 11.1774 1.4915 10.7518 1.48624 10.3222C1.45398 9.60772 1.44689 9.39353 1.44689 7.58482C1.44689 5.77611 1.45366 5.56191 1.48624 4.8474C1.4915 4.4178 1.57038 3.99227 1.71947 3.58933C1.83216 3.29713 2.00479 3.03176 2.22624 2.8103C2.44769 2.58885 2.71307 2.41622 3.00527 2.30353C3.40821 2.15444 3.83373 2.07556 4.26334 2.0703C4.97785 2.03804 5.19205 2.03095 7.00076 2.03095ZM7.00076 0.810303C5.16205 0.810303 4.93043 0.818045 4.20785 0.850948C3.64561 0.862131 3.08934 0.968587 2.56269 1.16579C2.11092 1.336 1.70172 1.60274 1.36366 1.9474C1.01869 2.28558 0.751722 2.69501 0.581401 3.14708C0.384201 3.67372 0.277746 4.23 0.266563 4.79224C0.234304 5.51417 0.226562 5.74579 0.226562 7.5845C0.226562 9.4232 0.234304 9.65482 0.267208 10.3774C0.278391 10.9396 0.384847 11.4959 0.582046 12.0226C0.752178 12.4746 1.01892 12.884 1.36366 13.2222C1.70191 13.567 2.11133 13.8337 2.56334 14.0038C3.08998 14.201 3.64626 14.3075 4.2085 14.3187C4.93108 14.3509 5.16172 14.3593 7.0014 14.3593C8.84108 14.3593 9.07172 14.3516 9.7943 14.3187C10.3565 14.3075 10.9128 14.201 11.4395 14.0038C11.8893 13.8295 12.2978 13.5631 12.6389 13.2219C12.98 12.8806 13.246 12.4719 13.4201 12.0219C13.6173 11.4953 13.7238 10.939 13.735 10.3768C13.7672 9.65482 13.775 9.4232 13.775 7.5845C13.775 5.74579 13.7672 5.51417 13.7343 4.79159C13.7231 4.22935 13.6167 3.67308 13.4195 3.14643C13.2493 2.69442 12.9826 2.285 12.6379 1.94675C12.2996 1.60202 11.8902 1.33527 11.4382 1.16514C10.9115 0.967942 10.3553 0.861486 9.79301 0.850303C9.07108 0.818045 8.83947 0.810303 7.00076 0.810303Z" />
      <path d="M7.00215 4.10718C6.31413 4.10718 5.64155 4.3112 5.06948 4.69345C4.49741 5.07569 4.05154 5.61899 3.78824 6.25464C3.52494 6.89029 3.45605 7.58975 3.59028 8.26455C3.72451 8.93935 4.05582 9.5592 4.54233 10.0457C5.02884 10.5322 5.64868 10.8635 6.32349 10.9978C6.99829 11.132 7.69774 11.0631 8.33339 10.7998C8.96904 10.5365 9.51234 10.0906 9.89459 9.51855C10.2768 8.94648 10.4809 8.27391 10.4809 7.58589C10.4809 6.66328 10.1144 5.77845 9.46197 5.12607C8.80958 4.47368 7.92476 4.10718 7.00215 4.10718ZM7.00215 9.84395C6.55555 9.84395 6.11897 9.71152 5.74764 9.4634C5.3763 9.21528 5.08688 8.86262 4.91597 8.45001C4.74506 8.0374 4.70034 7.58338 4.78747 7.14536C4.8746 6.70734 5.08966 6.30499 5.40546 5.98919C5.72125 5.6734 6.1236 5.45834 6.56162 5.37121C6.99964 5.28408 7.45367 5.3288 7.86627 5.49971C8.27888 5.67062 8.63154 5.96004 8.87966 6.33137C9.12778 6.70271 9.26021 7.13928 9.26021 7.58589C9.26021 8.18476 9.02231 8.75911 8.59884 9.18258C8.17537 9.60605 7.60102 9.84395 7.00215 9.84395Z" />
      <path d="M10.6176 4.78181C11.0665 4.78181 11.4305 4.41786 11.4305 3.96891C11.4305 3.51995 11.0665 3.15601 10.6176 3.15601C10.1686 3.15601 9.80469 3.51995 9.80469 3.96891C9.80469 4.41786 10.1686 4.78181 10.6176 4.78181Z" />
      <path d="M10.6176 4.78181C11.0665 4.78181 11.4305 4.41786 11.4305 3.96891C11.4305 3.51995 11.0665 3.15601 10.6176 3.15601C10.1686 3.15601 9.80469 3.51995 9.80469 3.96891C9.80469 4.41786 10.1686 4.78181 10.6176 4.78181Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      className="w-6 h-6 fill-black transition"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 12 14"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.60685 0.810303C3.01591 0.810303 0.126953 3.69926 0.126953 7.2902C0.126953 10.1522 1.98992 12.5821 4.55488 13.4461C4.87888 13.5001 4.98688 13.3111 4.98688 13.1221C4.98688 12.9601 4.98688 12.5551 4.98688 12.0151C3.1779 12.4201 2.79991 11.1511 2.79991 11.1511C2.50291 10.3951 2.07092 10.2062 2.07092 10.2062C1.47693 9.80116 2.12492 9.80116 2.12492 9.80116C2.77291 9.85516 3.1239 10.4761 3.1239 10.4761C3.6909 11.4751 4.63588 11.1781 5.01387 11.0161C5.06787 10.5841 5.22987 10.3142 5.41887 10.1522C3.98789 9.99016 2.47592 9.42316 2.47592 6.9392C2.47592 6.23722 2.71891 5.64322 3.1509 5.21123C3.09691 5.04923 2.85391 4.40124 3.2049 3.48326C3.2049 3.48326 3.74489 3.32126 4.98688 4.15825C5.49987 4.02325 6.06686 3.94225 6.60685 3.94225C7.14684 3.94225 7.71383 4.02325 8.22682 4.15825C9.4688 3.32126 10.0088 3.48326 10.0088 3.48326C10.3598 4.37425 10.1438 5.02223 10.0628 5.21123C10.4678 5.67022 10.7378 6.23722 10.7378 6.9392C10.7378 9.42316 9.22581 9.96316 7.76783 10.1252C8.01083 10.3141 8.19982 10.7191 8.19982 11.3131C8.19982 12.1771 8.19982 12.8791 8.19982 13.0951C8.19982 13.2571 8.30782 13.4731 8.65882 13.4191C11.2238 12.5821 13.0867 10.1522 13.0867 7.2902C13.0867 3.69926 10.1978 0.810303 6.60685 0.810303Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <div>
      <section
        className={`${styles.footersection} footersection bg-[#F5F5F5] relative`}
      >
        <div className="bg-black lg:items-center py-8 px-6 xl:py-[43px] xl:px-[64px] lg:flex lg:justify-between  absolute left-1/2 top-[-16%] lg:top-[-17%] xl:top-[-20%] transform -translate-x-1/2 rounded-[20px] sm:text-center lg:text-start w-[90%] md:w-[715px] lg:w-[917px] xl:w-[1146px] 2xl:w-[1366px] ">
          <h2 className="text-white lg:mb-0  lg:w-[560px] xl:w-[660px] ">
            STAY UPTO DATE ABOUT OUR LATEST OFFERS
          </h2>
          <div>
            <form className="flex flex-col gap-4 max-w-sm mx-auto">
              <div class="relative lg:w-[300px]">
                <img
                  src="images/email-icon.png"
                  alt="email icon"
                  class="absolute left-4 top-[53%] transform -translate-y-1/2 w-[20px] h-[15px] z-10"
                />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  class="pl-12 pr-4 py-4 w-full rounded-[62px] focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="bg-white text-black py-4 transition rounded-[62px]"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
        <div className=" pt-[210px] pb-[80px] lg:pt-[140px] lg:px-[5%] md:px-[3%] px-[7%] custom-container ">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start">
            <div className={`${styles.footerlogo} `}>
              <img src="images/SHOP-CO.png" alt="" />
              <p>
                We have clothes that suits your style and which you’re proud to
                wear. From women to men.
              </p>
              <div className={`${styles.socialicons} flex gap-4`}>
                <a href="">
                  <TwitterIcon />
                </a>
                <a href="">
                  <FacebookIcon />
                </a>
                <a href="">
                  <InstagramIcon />
                </a>
                <a href="">
                  <GitHubIcon />
                </a>
              </div>
            </div>

            <div className="flex flex-wrap lg:justify-between pt-4 lg:pt-0 lg:w-[70%] xl:w-[72%] 2xl:w-[74%]">
              <div className={`${styles.footerlinks} w-[50%] lg:w-[17%]`}>
                <span>COMPANY</span>
                <ul>
                  <li>
                    <a href="">About</a>
                  </li>
                  <li>
                    <a href="">Features </a>
                  </li>
                  <li>
                    <a href="">Works</a>
                  </li>
                  <li>
                    <a href="">Career</a>{" "}
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerlinks} w-[50%] lg:w-[23%] xl:w-[20%] 2xl:w-[17%]`}
              >
                <span>HELP</span>
                <ul>
                  <li>
                    <a href="">Customer Support</a>
                  </li>
                  <li>
                    <a href="">Delivery Details</a>
                  </li>
                  <li>
                    <a href="">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerlinks} w-[50%] lg:w-[23%] xl:w-[20%] 2xl:w-[17%]`}
              >
                <span>FAQ</span>
                <ul>
                  <li>
                    <a href="">Account</a>
                  </li>
                  <li>
                    <a href="">Manage Deliveries</a>
                  </li>
                  <li>
                    <a href="">Orders</a>
                  </li>
                  <li>
                    <a href="">Payment</a>
                  </li>
                </ul>
              </div>
              <div
                className={`${styles.footerlinks} w-[50%] lg:w-[23%] xl:w-[20%] 2xl:w-[17%]`}
              >
                <span>RESOURCES</span>
                <ul>
                  <li>
                    <a href="">Free eBooks</a>
                  </li>
                  <li>
                    <a href="">Development Tutorial</a>
                  </li>
                  <li>
                    <a href="">How to - Blog</a>
                  </li>
                  <li>
                    <a href="">Youtube Playlist</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-300 mt-10 pt-6">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-3">
              <div>
                <p>Shop.co © 2000-2023, All Rights Reserved</p>
              </div>
              <div className="flex gap-2">
                <img src="images/visa-badge.png" alt="" />
                <img src="images/master.png" alt="" />
                <img src="images/paypal.png" alt="" />
                <img src="images/apple.png" alt="" />
                <img src="images/gpay.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
