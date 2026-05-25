import React from "react";
import Image from "next/image";
import Link from "next/link";

function FastDeliveryCard() {
  return (
    <div className="w-full relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-muted/20 border border-border/50 shadow-premium lg:px-12 lg:py-10 p-8 rounded-3xl transition-all duration-500 hover:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] group">
      <div className="absolute right-0 top-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full mix-blend-multiply opacity-50 transform group-hover:scale-110 transition-transform duration-700"></div>
      
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center gap-10">
        <div className="lg:w-3/5 text-center lg:text-left space-y-4">
          <span className="text-xs font-bold tracking-widest text-primary uppercase block">
            White-Glove Delivery
          </span>
          <h2 className="text-2xl lg:text-4xl font-black font-serif tracking-tight text-foreground leading-tight">
            Premium Delivery to <span className="text-primary relative inline-block">
              Your Doorstep
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground font-medium max-w-lg mx-auto lg:mx-0">
            Experience seamless, fully assembled delivery on all our signature collections. Let our expert team carefully set up your new living space so you do not have to lift a finger.
          </p>
          <div className="pt-4">
            <Link
              className="btn-premium px-8 py-3.5 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_4px_14px_0_hsl(var(--primary)/40%)] !no-underline"
              href="/product/search?query="
            >
              Shop Collections Now
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
          <div className="relative w-full h-64 lg:h-80 transform group-hover:-translate-y-2 transition-transform duration-500 shadow-xl rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="White glove furniture delivery"
              className="object-cover"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FastDeliveryCard;
