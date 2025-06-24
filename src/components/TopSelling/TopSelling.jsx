import axios from "axios";
import { useEffect, useState } from "react";

function TopSelling() {
  const [state, setState] = useState([]);

  const fetchtopselling = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products?limit=10"
      );
      setState(response.data); // ✅ FakeStoreAPI returns array directly
    } catch (error) {
      console.error("Error fetching topselling:", error);
      setState([]); // fallback to avoid .map error
    }
  };

  useEffect(() => {
    fetchtopselling();
  }, []);

  return (
    <section className="spacing">
      <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
        <h2 className='text-center'>Top Selling</h2>
        <div className="flex gap-4 overflow-x-auto custom-scrollbar">
          {state.map((item, index) => (
            <div
              key={index}
              className="flex-1 min-w-[250px] md:min-w-[21rem] max-w-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[250px] object-contain"
              />
              <strong className="py-3 block text-sm line-clamp-2">
                {item.title}
              </strong>
              <div className="flex pb-3 gap-3 items-center">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }, (_, i) => {
                    const rate = item.rating?.rate ?? 0;
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
                  <span>{item.rating?.rate ?? 0}/</span>
                  <span className="opacity-80 text-[#8A8A8A]">5</span>
                </div>
              </div>
              <div className="flex gap-3">
                <h3 className="text-lg font-semibold">${item.price}</h3>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 lg:mt-10">
          <div className="secondarybtn">
            <a href="">View All</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TopSelling;
