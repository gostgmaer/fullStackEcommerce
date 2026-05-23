import React from 'react';
import { content } from '@/assets/jsonfile/content';
import Coupon from '../coupon/Coupon';

const OfferCard = () => {
  return (
    <div className="w-full group h-full">
      <div className="bg-white dark:bg-slate-850 h-full border border-slate-100 dark:border-slate-700 transition-all duration-300 rounded-xl overflow-hidden shadow-sm group-hover:shadow-md">
        <div className="bg-slate-50 dark:bg-slate-800/50 text-slate-900 dark:text-white px-6 py-4 border-b border-slate-100 dark:border-slate-700 flex items-center justify-center">
          <h3 className="text-sm font-sans font-bold tracking-tight text-center uppercase">
            {content['OfferCard-Title']}
          </h3>
        </div>
        <div className="overflow-hidden p-4">
          <Coupon couponInHome />
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
