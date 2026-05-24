
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
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* <StickyCart /> */}
        <div className="bg-gradient-to-b from-muted/30 to-background dark:from-muted/10 dark:to-background border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/ahossain/image/upload/v1697204480/pattern_bg_hzt68z.png')] opacity-[0.03] dark:opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
          <div className="mx-auto py-10 lg:py-14 max-w-screen-2xl px-4 sm:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row w-full gap-8">
              <div className="flex-shrink-0 lg:w-3/5 w-full animate-slide-up">
                <MainCarousel />
              </div>
              <div className="lg:w-2/5 w-full flex animate-slide-in-right">
                <OfferCard />
              </div>
            </div>
            <div className="bg-card/50 backdrop-blur-md border border-border/60 px-10 py-8 rounded-3xl mt-8 hidden lg:block shadow-sm">
              <Banner />
            </div>
          </div>
        </div>

        {/* feature category's */}
        <div className="bg-background border-b border-border/40 lg:py-24 py-16">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="mb-14 flex justify-center">
              <div className="text-center w-full max-w-2xl">
                <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Discover Categories</span>
                <h2 className="text-3xl lg:text-4xl mb-4 font-serif font-black tracking-tight text-foreground">
                  {/* {t("common:Featured-title")} */}
                  {content["Featured-title"]}
                </h2>
                <p className="text-base font-sans text-muted-foreground leading-relaxed">
                  {/* {t("common:Featured-sub-title")} */}
                  {content["Featured-sub-title"]}
                </p>
              </div>
            </div>
            <FeatureCategory category={result.category} />

            {/* Trust Badges Bar */}
            <div className="mt-16">
              <TrustBar />
            </div>
          </div>
        </div>

        {/* popular products */}
        <div className="bg-muted/10 dark:bg-muted/5 lg:py-24 py-16 mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="mb-14 flex justify-center">
            <div className="text-center w-full max-w-2xl">
              <span className="text-primary font-bold tracking-widest text-xs uppercase mb-3 block">Top Picks</span>
              <h2 className="text-3xl lg:text-4xl mb-4 font-serif font-black tracking-tight text-foreground">
                {content["popular-products-title"]}
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                {content["popular-products-sub-title"]}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
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
        <div className="block mx-auto max-w-screen-2xl bg-background lg:py-10 py-6">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="bg-transparent overflow-hidden rounded-3xl">
              <FastDeliveryCard />
            </div>
          </div>
        </div>

        {/* discounted products */}
        <div
          id="discount"
          className="bg-background border-t border-border/40 lg:py-24 py-16 mx-auto max-w-screen-2xl px-4 sm:px-10"
        >
          <div className="mb-14 flex justify-center">
            <div className="text-center w-full max-w-2xl">
              <span className="text-red-500 font-bold tracking-widest text-xs uppercase mb-3 block">Limited Time Offers</span>
              <h2 className="text-3xl lg:text-4xl mb-4 font-serif font-black tracking-tight text-foreground">
                {content["discounted-products-title"]}
              </h2>
              <p className="text-base font-sans text-muted-foreground leading-relaxed">
                {content["discounted-products-paragraph-text"]}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-6 lg:gap-8">
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
        <div className="bg-muted/20 dark:bg-muted/5 border-t border-border/40">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 py-16 lg:py-24 space-y-20">
            <RecentlyViewed />
            <Testimonials />
            <NewsletterSignup />
          </div>
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