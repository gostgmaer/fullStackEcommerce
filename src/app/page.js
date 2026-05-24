
import { attributes, } from "@/assets/fakeData/Products";
import { content } from "@/assets/jsonfile/content";
import Banner from "@/components/elements/banner/Banner";
import FastDeliveryCard from "@/components/elements/banner/FastDeliveryCard";
import MainCarousel from "@/components/elements/carousel/MainCarousel";
import FeatureCategory from "@/components/elements/category/FeatureCategory";

import OfferCard from "@/components/elements/offer/OfferCard";
import ProductCard from "@/components/elements/product/ProductCard";
import Layout from "@/components/global/layout/Layout";
import CategoryServices from "@/helper/network/services/CategoryServices";
import ProductServices from "@/helper/network/services/ProductServices";
import { TrustBar, Testimonials, NewsletterSignup } from "@/components/elements/home/HomeUpgrades";
import RecentlyViewed from "@/components/elements/product/RecentlyViewed";

// import { serverMethod } from "@/helper/network/serverCall/datafetch";

export const metadata = {
  generator: "Next.js",
  applicationName: "Ecommerce App",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kishor Sarkar" }, { name: "Kishor Sarkar", url: "https://nextjs.org" }],
  creator: "Kishor Sarkar",
  publisher: "Github",
  title: "Ecommerce Web &amp; Store e-commerce Template",
  description:
    "Ecommerce Web &amp; Store e-commerce Template Made for Fun.",

  twitter: {
    card: "app",
    title: "Next.js",
    description: "The React Framework for the Web",
    siteId: "1467726470533754880",
    creator: "@nextjs",
    creatorId: "1467726470533754880",
    images: {
      url: "https://nextjs.org/og.png",
      alt: "Next.js Logo",
    },
    app: {
      name: "twitter_app",
      id: {
        iphone: "twitter_app://iphone",
        ipad: "twitter_app://ipad",
        googleplay: "twitter_app://googleplay",
      },
      url: {
        iphone: "https://iphone_url",
        ipad: "https://ipad_url",
      },
    },
  },
  openGraph: {
    title: "Ecommerce Web &amp; Store e-commerce Template",
    description: "Ecommerce Web &amp; Store e-commerce Template Made for Fun.",
    url: "https://full-stack-ecommerce-iota.vercel.app/",
    siteName: "Ecommerce",
    images: [
      {
        url: "https://nextjs.org/og.png", // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: "https://nextjs.org/og-alt.png", // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    videos: [
      {
        url: "https://nextjs.org/video.mp4", // Must be an absolute URL
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: 'https://nextjs.org',
    languages: {
      'en-US': 'https://nextjs.org/en-US',
      'de-DE': 'https://nextjs.org/de-DE',
    },
    media: {
      'only screen and (max-width: 600px)': 'https://nextjs.org/mobile',
    },
    types: {
      'application/rss+xml': 'https://nextjs.org/rss',
    },
  },
  canonical: "https://example.com",
  facebook: {
    appId: '12345678',
  },
};

export default async function Home() {

  const result = await getAllRecord()

  return (
    <Layout  >
      <div className="min-h-screen bg-background text-foreground transition-colors duration-200">
        {/* <StickyCart /> */}
        <div className="bg-background dark:bg-slate-900 border-b border-slate-100 dark:border-slate-800/50">
          <div className="mx-auto py-8 max-w-screen-2xl px-3 sm:px-10">
            <div className="flex flex-col lg:flex-row w-full gap-6">
              <div className="flex-shrink-0 lg:w-3/5 w-full">
                <MainCarousel />
              </div>
              <div className="lg:w-2/5 w-full flex">
                <OfferCard />
              </div>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 px-10 py-6 rounded-xl mt-6 hidden lg:block">
              <Banner />
            </div>
          </div>
        </div>

        {/* feature category's */}
        <div className="bg-slate-50/50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-800 lg:py-16 py-10">
          <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
            <div className="mb-10 flex justify-center">
              <div className="text-center w-full lg:w-2/5">
                <h2 className="text-2xl lg:text-3xl mb-2 font-sans font-bold tracking-tight text-slate-900 dark:text-white">
                  {/* {t("common:Featured-title")} */}
                  {content["Featured-title"]}
                </h2>
                <p className="text-sm sm:text-base font-sans text-slate-500 dark:text-slate-400 leading-relaxed">
                  {/* {t("common:Featured-sub-title")} */}


                  {content["Featured-sub-title"]}
                </p>
              </div>
            </div>
            <FeatureCategory category={result.category} />

            {/* Trust Badges Bar */}
            <TrustBar />
          </div>
        </div>

        {/* popular products */}
        <div className="bg-background dark:bg-slate-950 lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-2xl lg:text-3xl mb-2 font-sans font-bold tracking-tight text-slate-900 dark:text-white">

                {content["popular-products-title"]}

              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-500 dark:text-slate-400 leading-relaxed">


                {content["popular-products-sub-title"]}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {result.popular.results?.slice(0, 18).map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    attributes={attributes}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* promotional banner card */}
        <div className="block mx-auto max-w-screen-2xl bg-background dark:bg-slate-950">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="bg-transparent">
              <FastDeliveryCard />
            </div>
          </div>
        </div>

        {/* discounted products */}
        <div
          id="discount"
          className="bg-slate-50/50 dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800 lg:py-16 py-10 mt-12 mx-auto max-w-screen-2xl px-3 sm:px-10"
        >
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-2xl lg:text-3xl mb-2 font-sans font-bold tracking-tight text-slate-900 dark:text-white">

                {content["discounted-products-title"]}
              </h2>
              <p className="text-sm sm:text-base font-sans text-slate-500 dark:text-slate-400 leading-relaxed">

                {content["discounted-products-paragraph-text"]}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
                {result.discount.results?.slice(0, 12).map((product) => (
                  <ProductCard
                    key={product._id}
                    product={product}
                    attributes={attributes}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof & Marketing */}
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 pb-8">
          <RecentlyViewed />
          <Testimonials />
          <NewsletterSignup />
        </div>
      </div>

    </Layout>
  );
}


export const getAllRecord = async () => {


  const popular = await ProductServices.getPopularProducts()
  const discount = await ProductServices.getDiscountedProducts()
  const category = await CategoryServices.getShowingCategory()

  return {
    popular, discount,category
  }

}