import { allProduct, attributes } from "@/assets/fakeData/Products";
import CategoryCard from "@/components/elements/category/categoryCard/CategoryCard";
import ProductList from "@/components/elements/product/productList/ProductList";
import Layout from "@/components/global/layout/Layout";

import ProductServices from "@/helper/network/services/ProductServices";


import React from "react";
// var Url = require('url-parse');

// import { serverMethod } from "@/lib/network/http";
// import { convertNumericKeysToObject, convertObject, transformKeysToObject } from "@/lib/helper";

export const metadata = {
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
  creator: "Jiachi Liu",
  publisher: "Sebastian Markbåge",
  title: "Example Domain",
  description:
    "This domain is established to be used for illustrative examples in documents.",

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
    title: "Next.js",
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
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

const Search = async (props) => {
  
  ///console.log(props);
  const data = await  ProductServices.getShowingProducts(props.searchParams)
  
  const currentData = await getAllRecord(props);

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="flex py-10 lg:py-12">
            <div className="flex w-full">
              <div className="w-full">
                <CategoryCard />

                <ProductList data={currentData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

// export const getServerSideProps = async (ctx) => {
// const currParam ={
//   method: "get"
// }
// const categories = await serverMethod("/public/categories", currParam);
// const brands = await serverMethod("/public/brands", currParam);
// const tags = await serverMethod("/public/tags", currParam);
//   var url = new Url(ctx.resolvedUrl);
//   const parsedObject = parseUrlWithQueryParams(`${url.query}`);

//   const nwObject = convertObject(parsedObject)

//   const params = {
//     method: "get", query: {...parsedObject,filter:JSON.stringify(parsedObject.filter)}
//   }
//   const data = await serverMethod("/public/product/search", params);
//   return {
//     props: {
//       categories,
//       brands,data,tags
//     },
//   };
// };

export const getAllRecord = async (query) => {
  // const params = {
  //   method: "get",
  //   header: {},
  //   query: {...query },
  // };
  const result = allProduct.filter((product) =>
    product.title?.data
      ?.toLowerCase()
      .includes(query.searchParams.query.toLowerCase())
  );

  return result;
};
