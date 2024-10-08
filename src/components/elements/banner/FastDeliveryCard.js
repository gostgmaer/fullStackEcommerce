import React from "react";

// import DeliveBoy from "../../../assets/img/delivery-boy.png";
import Link from "next/link";
function FastDeliveryCard() {
const DeliveBoy = '../../../assets/img/delivery-boy.png'
  
  return (
    <div className="w-full bg-white dark:bg-gray-600 shadow-sm lg:px-10 lg:py-5 p-6 rounded-lg ">
      <div className="flex justify-between items-center">
        <div className="lg:w-3/5">
          <span className="text-base lg:text-lg">
            Organic Products and Food
          </span>
          <h2 className="text-lg lg:text-2xl font-bold mb-1">
            Quick Delivery to{" "}
            <span className="text-emerald-500">Your Home</span>
          </h2>
          <p className="text-sm leading-6">
            There are many products you will find our shop, Choose your
            daily necessary product from our KachaBazar shop and get some
            special offer. See Our latest discounted products from here
            and get a special discount.
          </p>
          <Link
            className="lg:w-1/4 hover:no-underline text-md font-medium inline-block mt-5 px-8 py-3 bg-emerald-500 text-center text-white rounded-full hover:text-white hover:bg-emerald-600"
            href="/#downloadApp"
          >
            Download App
          </Link>
        </div>
        <div className="w-1/5 flex-grow hidden lg:lexx md:flex md:justify-items-center lg:justify-end">
          <span
            style={{
          
              display: "inline-block",
              overflow: "hidden",
              width: "initial",
              height: "initial",
              background: "none",
              opacity: " 1",
              border: "0px",
              margin: "0px",
              padding: " 0px",
              position: "relative",
              maxWidth: "100%",
            }}
          >
            <img src={DeliveBoy} alt="app download" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default FastDeliveryCard;
