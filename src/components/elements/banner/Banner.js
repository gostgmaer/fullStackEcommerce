
import { content } from '@/assets/jsonfile/content';
import Link from 'next/link';
import React from 'react';
// import useTranslation from "next-translate/useTranslation";
const Banner = () => {
  // const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-emerald-600 dark:text-emerald-900 font-bold">
            {/* {t("common:Banner-title-span-text")} */}
            {content['Banner-title-span-text']}
            </span>{' '}
            {/* {t("common:Banner-title-text")} */}
            {content['Banner-title-text']}
          </h1>

          <p className="text-gray-500 dark:text-gray-50">
          {/* {t("common:Banner-paragraph-text")} */}
          {content['Banner-paragraph-text']}
            <Link href="#discount" >

            {content['Banner-link-text']}
          
            </Link>
          </p>
        </div>
        <Link href="/product/search?Category=organic-food" >
     

          {content['Banner-btn-text']}
        </Link>
      </div>
    </>
  );
};

export default Banner;
