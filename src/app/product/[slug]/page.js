import {
  getProductByChildrenCategory,
  getProductById,
} from "@/assets/fakeData/Products";
import SingleProduct from "@/components/elements/product/singleProduct";
import Layout from "@/components/global/layout/Layout";

import ProductServices from "@/helper/network/services/ProductServices";
import AttributeServices from "@/helper/network/services/AttributeServices";
import { cache } from "react";

const getProductBySlugCached = cache(async (params) => {
  return ProductServices.getProductBySlug(params);
});

export async function generateMetadata({ params, searchParams }, parent) {
  const product = await getProductBySlugCached(params);
  const results = product?.results;

  if (!results) {
    return {
      title: "Product Not Found | Ecommerce",
    };
  }

  return {
    title: "Ecommerce" + " | " + results.title,
    description: results.descriptions,
    openGraph: {
      title: results.title,
      description: results.descriptions,
      images: results.image,
    },
  };
}

const ProductScreen = async ({ params, searchParams }) => {
  const data = await getRecord(params);

  if (!data || !data.product) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center bg-background">
          <div className="text-center animate-fade-in">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted/30 flex items-center justify-center">
              <span className="text-3xl">🔍</span>
            </div>
            <h1 className="text-2xl font-black font-serif text-foreground mb-2">Product Not Found</h1>
            <p className="text-sm text-muted-foreground mb-6">The product you&apos;re looking for doesn&apos;t exist or has been removed.</p>
            <a href="/" className="btn-primary !no-underline">Back to Shop</a>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <SingleProduct props={data} />
        <div></div>
      </Layout>
    </>
  );
};

// you can use getServerSideProps alternative for getStaticProps and getStaticPaths

// export const getServerSideProps = async (context) => {
//   const { slug } = context.params;

//   const [data, attributes] = await Promise.all([
//     ProductServices.getShowingStoreProducts({
//       category: "",
//       title: slug,
//     }),

//     AttributeServices.getShowingAttributes({}),
//   ]);
//   let product = {};

//   if (slug) {
//     product = data?.products?.find((p) => p.slug === slug);
//   }

//   return {
//     props: {
//       product,
//       relatedProduct: data?.relatedProduct,
//       attributes,
//     },
//   };
// };

export default ProductScreen;

export const getRecord = async (params) => {
  var related;
  var attributes = [];
  const product = await getProductBySlugCached(params);

  if (product && product.results) {
    if (product.results.category && product.results.category._id) {
      related = await ProductServices.getRelatedProducts({
        category: product.results.category._id,
      });
    }
    try {
      const attrsData = await AttributeServices.getShowingAttributes();
      attributes = attrsData?.results || attrsData || [];
    } catch (err) {
      console.error("Failed to fetch attributes:", err);
    }
    return { product: product.results, related, attributes };
  }
  return null;
};

