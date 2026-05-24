import React from 'react';
import { content } from '@/assets/jsonfile/content';
import Coupon from '../coupon/Coupon';

const OfferCard = () => {
  return (
    <div className="w-full group h-full">
      <div className="card-base h-full flex flex-col justify-between overflow-hidden shadow-premium hover:shadow-premium-hover rounded-3xl relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl pointer-events-none"></div>
        
        <div className="bg-muted/30 backdrop-blur-md px-6 py-5 border-b border-border/40 flex items-center justify-center relative z-10">
          <h3 className="text-sm font-sans font-black tracking-widest text-primary text-center uppercase">
            {content['OfferCard-Title'] || "Special Offers"}
          </h3>
        </div>
        <div className="p-6 relative z-10 flex-grow flex items-center justify-center bg-card">
          <Coupon couponInHome />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
