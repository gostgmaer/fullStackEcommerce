import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeliveBoy from "../../../assets/img/delivery-boy.png";

function FastDeliveryCard() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/20 border border-border/50 shadow-premium lg:px-12 lg:py-10 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] group">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full mix-blend-multiply opacity-50 transform group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-3/5 text-center lg:text-left space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block">
            Organic Products and Food
          </span>
          <h2 className="text-2xl lg:text-4xl font-black font-serif tracking-tight text-foreground leading-tight">
            Quick Delivery to <span className="text-primary relative inline-block">
              Your Home
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground font-medium max-w-lg mx-auto lg:mx-0">
            There are many products you will find in our shop. Choose your
            daily necessary products from our storefront and get special offers.
            See our latest discounted products and get a special discount.
          </p>
          <div className="pt-4">
            <Link
              className="btn-premium px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(var(--primary)/40%)] !no-underline"
              href="/product/search?query="
            >
              Shop Organic Now
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-56 h-56 lg:w-72 lg:h-72 transform group-hover:-translate-y-2 transition-transform duration-500 drop-shadow-2xl">
            <Image
              src={DeliveBoy}
              alt="App download and quick delivery illustration"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastDeliveryCard;
