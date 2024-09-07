import React from "react";
import { IoLogoFacebook, IoLogoLinkedin, IoLogoReddit, IoLogoTwitch, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io5";

function SocialNetwork() {
  return (
    <div className="mt-8">
      <h3 className="text-base font-semibold mb-1 ">
        Share your social network
      </h3>
      <p className=" text-sm text-gray-500">
        For get lots of traffic from social network share this product
      </p>
      <ul className="flex mt-4">
        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500">
          <button
            aria-label="facebook"
            className="react-share__ShareButton"
            style={{backgroundColor: "transparent", border: "none",padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}
          >
            <IoLogoFacebook/>
          </button>
        </li>
        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500">
          <button
         
            aria-label="twitter"
            className="react-share__ShareButton"
            style={{backgroundColor: "transparent", border: "none",padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}
          >
            <IoLogoTwitter/>
          </button>
        </li>
        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500">
          <button
           
            aria-label="reddit"
            className="react-share__ShareButton"
            style={{backgroundColor: "transparent", border: "none",padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}
          >
             <IoLogoReddit/>
          </button>
        </li>
        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500">
          <button
     
            aria-label="whatsapp"
            className="react-share__ShareButton"
            style={{backgroundColor: "transparent", border: "none",padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}
          >
            <IoLogoWhatsapp/>
          </button>
        </li>
        <li className="flex items-center text-center border border-gray-100 rounded-full hover:bg-emerald-500 mr-2 transition ease-in-out duration-500">
          <button
           
            aria-label="linkedin"
            className="react-share__ShareButton"
            style={{backgroundColor: "transparent", border: "none",padding: "0px", font: "inherit", color: "inherit", cursor: "pointer"}}
          >
              <IoLogoLinkedin/>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default SocialNetwork;
