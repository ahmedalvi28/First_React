import React from "react";
import styles from "./happyCustomer.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HappyCustomer = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mobile default
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className={`${styles.happycustomersection} last-spacing`}>
      <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
        <h2>Our Happy Customer</h2>
        <div className="no-scrollbar">
          <Slider {...settings} className={`${styles.happycustomerdiv} gap-4`}>
            {[1, 2, 3, 4].map((_, index) => (
              <div
                key={index}
                className=" justify-center px-2" // fixes layout inside slide
              >
                <div className="min-w-[260px] max-w-[600px] rounded-[20px] p-6 lg:py-[28px] lg:px-[32px] border-2 border-gray-300">
                  <div className="flex items-center max-w-[fit-content] pb-3">
                    {[...Array(5)].map((_, i) => (
                      <img key={i} src="images/star.png" alt="" />
                    ))}
                  </div>
                  <div >
                    <div className="pb-3 flex items-center gap-2">
                    <h4 >James L.</h4> <img src="images/tick-icon.png" alt="" className="w-[19px] h-[19px]"/>
                    </div>
                    <p>
                      "As someone who's always on the lookout for unique fashion
                      pieces, I'm thrilled to have stumbled upon Shop.co. The
                      selection of clothes is not only diverse but also on-point
                      with the latest trends.”
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default HappyCustomer;

// export default function HappyCustomer() {
//   return (
//     <div>
//       <section>
//         <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
//           <h2>Our Happy Customer</h2>
//           <div
//             className={`${styles.happycustomerdiv}grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex gap-4 overflow-x-auto`}
//           >
//             <div className=" rounded-[20px] pt-8 pr-8 pb-[50px] pl-8 border-2 border-gray-300">
//               <div className="flex items-center fit-content max-w-[fit-content] pb-3">
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//               </div>
//               <div>
//               <h4 className="pb-3">James L.</h4>
//               <p>
//                 "As someone who's always on the lookout for unique fashion
//                 pieces, I'm thrilled to have stumbled upon Shop.co. The
//                 selection of clothes is not only diverse but also on-point with
//                 the latest trends.”
//               </p>
//               </div>
//             </div>

//             <div className=" rounded-[20px] pt-8 pr-8 pb-[50px] pl-8 border-2 border-gray-300">
//               <div className="flex items-center fit-content max-w-[fit-content] pb-3">
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//               </div>
//               <div>
//               <h4 className="pb-3">James L.</h4>
//               <p>
//                 "As someone who's always on the lookout for unique fashion
//                 pieces, I'm thrilled to have stumbled upon Shop.co. The
//                 selection of clothes is not only diverse but also on-point with
//                 the latest trends.”
//               </p>
//               </div>
//             </div>

//             <div className=" rounded-[20px] pt-8 pr-8 pb-[50px] pl-8 border-2 border-gray-300">
//               <div className="flex items-center fit-content max-w-[fit-content] pb-3">
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//               </div>
//               <div>
//               <h4 className="pb-3">James L.</h4>
//               <p>
//                 "As someone who's always on the lookout for unique fashion
//                 pieces, I'm thrilled to have stumbled upon Shop.co. The
//                 selection of clothes is not only diverse but also on-point with
//                 the latest trends.”
//               </p>
//               </div>
//             </div>

//             {/* <div className=" rounded-[20px] pt-8 pr-8 pb-[50px] pl-8 border-2 border-gray-300">
//               <div className="flex items-center fit-content max-w-[fit-content] pb-3">
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//                 <img src="images/star.png" alt="" />
//               </div>
//               <div>
//               <h4 className="pb-3">James L.</h4>
//               <p>
//                 "As someone who's always on the lookout for unique fashion
//                 pieces, I'm thrilled to have stumbled upon Shop.co. The
//                 selection of clothes is not only diverse but also on-point with
//                 the latest trends.”
//               </p>
//               </div>
//             </div> */}

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }
