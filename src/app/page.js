
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
import AttributeServices from "@/helper/network/services/AttributeServices";
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
  const attributes = result.attributes || [];

  return (
    <Layout  >
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Hero Section with Carousel */}
        <div className="bg-gradient-to-b from-muted/40 via-muted/10 to-background dark:from-muted/10 dark:via-background dark:to-background border-b border-border/40 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cta-bg.png')] opacity-[0.03] dark:opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="mx-auto py-8 lg:py-12 max-w-screen-2xl px-4 sm:px-10 relative z-10">
            <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-8">
              <div className="flex-shrink-0 lg:w-3/5 w-full animate-slide-up">
                <MainCarousel />
              </div>
              <div className="lg:w-2/5 w-full flex animate-slide-in-right" style={{ animationDelay: '0.15s' }}>
                <OfferCard />
              </div>
            </div>
            <div className="bg-card/60 backdrop-blur-xl border border-border/50 px-8 lg:px-10 py-7 rounded-2xl mt-8 hidden lg:block shadow-premium hover:shadow-premium-hover transition-all duration-400">
              <Banner />
            </div>
          </div>
        </div>

        {/* Featured Categories */}
        <div className="bg-background border-b border-border/30 lg:py-24 py-16">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="mb-14 flex justify-center">
              <div className="section-heading">
                <span className="section-label">Discover Categories</span>
                <h2 className="section-title">
                  {content["Featured-title"]}
                </h2>
                <p className="section-subtitle">
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

        {/* Popular Products */}
        <div className="bg-muted/5 dark:bg-muted/5 lg:py-24 py-16 mx-auto max-w-screen-2xl px-4 sm:px-10">
          <div className="mb-14 flex justify-center">
            <div className="section-heading">
              <span className="section-label">Top Picks</span>
              <h2 className="section-title">
                {content["popular-products-title"]}
              </h2>
              <p className="section-subtitle">
                {content["popular-products-sub-title"]}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
              {result.popular.results
                ?.slice(0, 18)
                .filter((product) => product && typeof product === "object")
                .map((product, idx) => (
                <div key={product?._id || product?.id || product?.slug || `popular-${idx}`} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(idx * 0.05, 0.4)}s` }}>
                  <ProductCard
                    product={product}
                    attributes={attributes}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Promotional Banner */}
        <div className="block mx-auto max-w-screen-2xl bg-background lg:py-10 py-6">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
            <div className="bg-transparent overflow-hidden rounded-2xl">
              <FastDeliveryCard />
            </div>
          </div>
        </div>

        {/* Discounted Products */}
        <div
          id="discount"
          className="bg-background border-t border-border/30 lg:py-24 py-16 mx-auto max-w-screen-2xl px-4 sm:px-10"
        >
          <div className="mb-14 flex justify-center">
            <div className="section-heading">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase mb-3 text-destructive">
                <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-soft"></span>
                Limited Time Offers
              </span>
              <h2 className="section-title">
                {content["discounted-products-title"]}
              </h2>
              <p className="section-subtitle">
                {content["discounted-products-paragraph-text"]}
              </p>
            </div>
          </div>
          <div className="w-full">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 md:gap-5 lg:gap-6">
              {result.discount.results
                ?.slice(0, 12)
                .filter((product) => product && typeof product === "object")
                .map((product, idx) => (
                <div key={product?._id || product?.id || product?.slug || `discount-${idx}`} className="animate-fade-in-up" style={{ animationDelay: `${Math.min(idx * 0.05, 0.3)}s` }}>
                  <ProductCard
                    product={product}
                    attributes={attributes}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Proof & Marketing */}
        <div className="bg-muted/10 dark:bg-muted/5 border-t border-border/30">
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-10 py-16 lg:py-24 space-y-16 lg:space-y-20">
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
  const [popular, discount, category, attributes] = await Promise.all([
    ProductServices.getPopularProducts(),
    ProductServices.getDiscountedProducts(),
    CategoryServices.getShowingCategory(),
    AttributeServices.getShowingAttributes(),
  ]);

  return { popular, discount, category, attributes };
};