import React from "react";
import "./dressStyle.module.css";

export default function DressStyle() {
  return (
    <div>
      <section className="">
        <div className="custom-container lg:px-[5%] md:px-[3%] px-[7%]">
          <div className="bg-gray-300 w-full p-8 2xl:p-12 rounded-3xl ">
            <h2 className='text-center'>BROWSE BY DRESS STYLE</h2>
            <div className="grid lg:grid-cols-3 gap-4">
              <div className="lg:col-span-1 overflow-hidden">
                <img
                  src="images/casual-s.png"
                  alt="Casual"
                  className="block lg:hidden w-full object-cover rounded-[20px]"
                />
                <img
                  src="images/casual-l.png"
                  alt="Casual"
                  className="hidden lg:block w-full h-full object-cove rounded-[20px]"
                />
              </div>

              <div className="lg:col-span-2 overflow-hidden">
                <img
                  src="images/formal-s.png"
                  alt="Formal"
                  className="block lg:hidden w-full object-cover rounded-[20px]"
                />
                <img
                  src="images/formal-l.png"
                  alt="Formal"
                  className="hidden lg:block w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="lg:col-span-2 overflow-hidden">
                <img
                  src="images/party-s.png"
                  alt="Party"
                  className="block lg:hidden w-full object-cover rounded-[20px]"
                />
                <img
                  src="images/party-l.png"
                  alt="Party"
                  className="hidden lg:block w-full h-full object-cover rounded-[20px]"
                />
              </div>

              <div className="lg:col-span-1 overflow-hidden">
                <img
                  src="images/gym-s.png"
                  alt="Gym"
                  className="block lg:hidden w-full object-cover rounded-[20px]"
                />
                <img
                  src="images/gym-l.png"
                  alt="Gym"
                  className="hidden lg:block w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
