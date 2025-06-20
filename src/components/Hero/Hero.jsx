import React from "react";
import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div>
      <section className={`${styles.herobg}`}>
        <div className="custom-container lg:flex items-center gap-x-4 lg:px-[5%] md:px-[3%] ">
          <div className={`w-full lg:w-6/12 py-7 px-[7%] md:px-0  ${styles.herocontent}`}>
            <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
            <p>
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <div className="blackbtn">
              <a href="">Shop Now</a>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-normal items-center">
              <div className={`flex flex-col ${styles.herostatsdiv}`}>
                <span className="font-bold text-2xl xl:text-4xl">200+</span>
                <span className={`${styles.herocompanyno}`}>
                  International Brands
                </span>
              </div>

              <div className={`flex flex-col ${styles.herostatsdiv}`}>
                <span className="font-bold text-2xl xl:text-4xl">2,000+</span>
                <span className={`${styles.herocompanyno}`}>
                  High-Quality Products
                </span>
              </div>

              <div className={`flex flex-col ${styles.herostatsdiv}`}>
                <span className="font-bold text-2xl xl:text-4xl">30,000+</span>
                <span className={`${styles.herocompanyno}`}>
                  Happy Customers
                </span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12">
            <img src="images/hero-img2.png" alt="Hero Image" />
          </div>
        </div>
        <div className="bg-black py-3 lg:py-6 ">
          <div className="custom-container  px-[7%] lg:px-[5%] md:px-[3%]">
            <div className= {` flex flex-wrap items-center justify-center gap-8 md:gap-0 md:justify-between ${styles.bannerdivlogos}`}>
              <div className={`${styles.bannerlogowrap}`}>
                <img src="images/versace.png" alt="" />
              </div>
              <div className={`${styles.bannerlogowrap}`}>
                <img src="images/zara.png" alt="" />
              </div>
              <div className={`${styles.bannerlogowrap}`}>
                <img src="images/prada.png" alt="" />
              </div>
              <div className={`${styles.bannerlogowrap}`}>
                <img src="images/gucci.png" alt="" />
              </div>
              <div className={`${styles.bannerlogowrap}`}>
                <img src="images/ck.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
