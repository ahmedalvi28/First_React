// import React from "react";
// import styles from "./product.module.css";

// export default function Product() {
//   return (
//     <div>
//       <section className="spacing">
//         <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
//           <h2>NEW ARRIVALS</h2>
//           <div class="flex gap-4 overflow-x-auto">
//             <div class="flex-1 min-w-[250px] max-w-sm">
//               <img src="images/product-img.png" alt="" />
//               <strong className="py-3 block">T-SHIRT WITH TAPE DETAILS</strong>
//               <div className="flex pb-3 gap-3 items-center">
//                 <div className="flex gap-1">
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/half-star.png"
//                     alt="half-star"
//                     className="w-[8px] h-[16px]"
//                   />
//                 </div>
//                 <div className={`${styles.ratingnumber}`}>
//                   <span>4.5/</span>
//                   <span className="opacity-80 text-[#8A8A8A]">5</span>
//                 </div>
//               </div>
//               <div className="flex gap-3"><h3>$120</h3></div>
              
//             </div>
//             <div class="flex-1 min-w-[250px] max-w-sm">
//               <img src="images/product-img.png" alt="" />
//               <strong className="py-3 block">SKINNY FIT JEANS</strong>
//               <div className="flex pb-3 gap-3 items-center">
//                 <div className="flex gap-1">
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
                 
//                   <img
//                     src="images/half-star.png"
//                     alt="half-star"
//                     className="w-[8px] h-[16px]"
//                   />
//                 </div>
//                 <div className={`${styles.ratingnumber}`}>
//                   <span>3.5/</span>
//                   <span className="opacity-80 text-[#8A8A8A]">5</span>
//                 </div>
//               </div>
//               <div className="flex gap-3 items-center">
//               <h3>$240</h3>
//               <h3 className="opacity-80 text-[#8A8A8A]">$260</h3>
//               <span className={`${styles.discount}`}>-20%</span>
//               </div>
              
//             </div>
//              <div class="flex-1 min-w-[250px] max-w-sm">
//               <img src="images/product-img.png" alt="" />
//               <strong className="py-3 block">CHECKERED SHIRT</strong>
//               <div className="flex pb-3 gap-3 items-center">
//                 <div className="flex gap-1">
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/half-star.png"
//                     alt="half-star"
//                     className="w-[8px] h-[16px]"
//                   />
//                 </div>
//                 <div className={`${styles.ratingnumber}`}>
//                   <span>4.5/</span>
//                   <span className="opacity-80 text-[#8A8A8A]">5</span>
//                 </div>
//               </div>
//               <div className="flex gap-3"><h3>$180</h3></div>
              
//             </div>
//            <div class="flex-1 min-w-[250px] max-w-sm">
//               <img src="images/product-img.png" alt="" />
//               <strong className="py-3 block">SLEEVE STRIPED T-SHIRT</strong>
//               <div className="flex pb-3 gap-3 items-center">
//                 <div className="flex gap-1">
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
//                   <img
//                     src="images/star.png"
//                     alt="star"
//                     className="w-[18px] h-[16px]"
//                   />
                 
//                   <img
//                     src="images/half-star.png"
//                     alt="half-star"
//                     className="w-[8px] h-[16px]"
//                   />
//                 </div>
//                 <div className={`${styles.ratingnumber}`}>
//                   <span>3.5/</span>
//                   <span className="opacity-80 text-[#8A8A8A]">5</span>
//                 </div>
//               </div>
//               <div className="flex gap-3 items-center">
//               <h3>$130</h3>
//               <h3 className="opacity-80 text-[#8A8A8A]">$160</h3>
//               <span className={`${styles.discount}`}>-30%</span>
//               </div>
              
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









import axios from 'axios'
import { useEffect, useState } from 'react'

function Product() {
    const [state, setstate] = useState([])

    const card = async () => {
        try {
            let tues = await axios.get('https://fakestoreapi.com/products')
            console.log(tues.data)
            setstate(tues.data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        card()
    }, [])

    return (
      <section className="spacing">
    <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
          <h2>NEW ARRIVALS</h2>
         <div class="flex gap-4 overflow-x-auto">
    {
      state.map((item, index) => (
        <div key={index} className="flex-1 min-w-[250px] md:min-w-[21rem] max-w-sm ">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-[250px] object-contain"
          />
          <strong className="py-3 block text-sm line-clamp-2">{item.title}</strong>
          <div className="flex pb-3 gap-3 items-center">
            <div className="flex gap-1">
              {Array.from({ length: 4 }, (_, i) => {
                const rate = item.rating.rate;
                if (i < Math.floor(rate)) {
                  return (
                    <img
                      key={i}
                      src="images/star.png"
                      alt="star"
                      className="w-[18px] h-[16px]"
                    />
                  );
                } else if (i < rate) {
                  return (
                    <img
                      key={i}
                      src="images/half-star.png"
                      alt="half-star"
                      className="w-[8px] h-[16px]"
                    />
                  );
                } else {
                  return (
                    <img
                      key={i}
                      src="images/empty-star.png"
                      alt="empty-star"
                      className="w-[18px] h-[16px]"
                    />
                  );
                }
              })}
            </div>
            <div className="text-sm text-gray-500">
              <span>{item.rating.rate}/</span>
              <span className="opacity-80 text-[#8A8A8A]">5</span>
            </div>
          </div>
          <div className="flex gap-3">
            <h3 className="text-lg font-semibold">${item.price}</h3>
          </div>
        </div>
      ))
    }
  </div>
</div>
</section>

    )
}

export default Product
