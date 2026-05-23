"use client"
const Price = ({ product, price, card, currency, originalPrice }) => {
  return (
    <div className="font-sans product-price flex items-baseline gap-1.5">
      {product?.variants?.length > 0 ? (
        <>
          <span
            className={
              card
                ? "text-base lg:text-lg font-bold text-slate-900 dark:text-slate-100"
                : "text-2xl font-extrabold text-slate-900 dark:text-slate-100"
            }
          >
            {currency}
            {price}
          </span>
          {originalPrice > price && !card ? (
            <del
              className={
                card
                  ? "text-xs font-normal text-slate-400 dark:text-slate-500 ml-1 line-through"
                  : "text-base font-normal text-slate-400 dark:text-slate-500 ml-1 line-through"
              }
            >
              {currency}
              {parseFloat(originalPrice).toFixed(2)}
            </del>
          ) : null}
        </>
      ) : (
        <>
          <span
            className={
              card
                ? "text-base lg:text-lg font-bold text-slate-900 dark:text-slate-100"
                : "text-2xl font-extrabold text-slate-900 dark:text-slate-100"
            }
          >
            {currency}
            {parseFloat(product?.prices?.price).toFixed(2)}
          </span>
          {originalPrice > price && card ? (
            <del
              className={
                card
                  ? "text-xs font-normal text-slate-400 dark:text-slate-500 ml-1 line-through"
                  : "text-base font-normal text-slate-400 dark:text-slate-500 ml-1 line-through"
              }
            >
              {currency}
              {parseFloat(originalPrice).toFixed(2)}
            </del>
          ) : null}
        </>
      )}
    </div>
  );
};

export default Price;
