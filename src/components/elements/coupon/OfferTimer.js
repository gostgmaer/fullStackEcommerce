import React from 'react';
import { useTimer } from 'react-timer-hook';

const OfferTimer = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({ expiryTimestamp });

  return (
    <div className="flex items-center gap-1 font-sans text-xs">
      <span className="flex items-center justify-center bg-primary text-white font-bold w-7 h-7 rounded shadow-sm">
        {days}
      </span>
      <span className="text-slate-400 font-bold">:</span>
      <span className="flex items-center justify-center bg-primary text-white font-bold w-7 h-7 rounded shadow-sm">
        {hours}
      </span>
      <span className="text-slate-400 font-bold">:</span>
      <span className="flex items-center justify-center bg-primary text-white font-bold w-7 h-7 rounded shadow-sm">
        {minutes}
      </span>
      <span className="text-slate-400 font-bold">:</span>
      <span className="flex items-center justify-center bg-primary text-white font-bold w-7 h-7 rounded shadow-sm">
        {seconds}
      </span>
    </div>
  );
};

export default React.memo(OfferTimer);
