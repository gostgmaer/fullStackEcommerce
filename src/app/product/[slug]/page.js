import { getProductByChildrenCategory, getProductById } from "@/assets/fakeData/Products";
import SingleProduct from "@/components/elements/product/singleProduct";

import Layout from "@/components/global/layout/Layout";
import useTranslation from "next-translate/useTranslation";


const ProductScreen = async (props) => {

  const result = await getRecord(props.params.slug)
  console.log(result);
  

  const product = getProductById(props.params.slug);


 


  // useEffect(() => {
  //   if (value) {
  //     const result = product?.variants?.filter((variant) =>
  //       Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
  //     );
  //     // console.log('result',result)
  //     const res = result?.map(
  //       ({
  //         originalPrice,
  //         discount,
  //         quantity,
  //         inUse,
  //         inUseOrder,
  //         barcode,
  //         sku,
  //         productId,
  //         image,
  //         ...rest
  //       }) => ({ ...rest })
  //     );
  //     // console.log("res", res);

  //     const filterKey = Object.keys(Object.assign({}, ...res));
  //     const selectVar = filterKey?.reduce(
  //       (obj, key) => ({ ...obj, [key]: selectVariant[key] }),
  //       {}
  //     );
  //     const newObj = Object.entries(selectVar).reduce(
  //       (a, [k, v]) => (v ? ((a[k] = v), a) : a),
  //       {}
  //     );

  //     const result2 = result?.find((v) =>
  //       Object.keys(newObj).every((k) => newObj[k] === v[k])
  //     );

  //     // console.log("result2", result2);
  //     if (result.length <= 0 || result2 === undefined) return setStock(0);

  //     setVariants(result);
  //     setSelectVariant(result2);
  //     setSelectVa(result2);
  //     setImg(result2?.image);
  //     setPrice(Number(result2?.price));
  //     setOriginalPrice(Number(result2?.originalPrice));
  //     setStock(result2?.quantity);
  //     setDiscount(Number(result2?.discount));
  //   } else if (product?.variants?.length > 0) {
  //     const result = product?.variants?.filter((variant) =>
  //       Object.keys(selectVa).every((k) => selectVa[k] === variant[k])
  //     );

  //     setVariants(result);
  //     setPrice(Number(product.variants[0]?.price));
  //     setOriginalPrice(Number(product.variants[0]?.originalPrice));
  //     setStock(product.variants[0]?.quantity);
  //     setDiscount(Number(product.variants[0]?.discount));
  //     setSelectVariant(product.variants[0]);
  //     setSelectVa(product.variants[0]);
  //     setImg(product.variants[0]?.image);
  //   } else {
  //     setPrice(Number(product?.prices?.price));
  //     setOriginalPrice(Number(product?.prices?.originalPrice));
  //     setStock(product?.stock);
  //     setDiscount(Number(product?.prices?.discount));
  //     setImg(product?.image[0]);
  //   }
  // }, [
  //   product?.prices?.discount,
  //   product?.prices?.originalPrice,
  //   product?.prices?.price,
  //   product?.stock,
  //   product.variants,
  //   selectVa,
  //   selectVariant,
  //   value,
  // ]);

  // useEffect(() => {
  //   const res = Object.keys(Object.assign({}, ...product?.variants));
  //   const varTitle = attributes?.filter((att) => res.includes(att?._id));

  //   setVariantTitle(varTitle?.sort());
  // }, [variants, attributes]);

  // useEffect(() => {
  //   setIsLoading(false);
  // }, [product]);

  // const handleAddToCart = (p) => {
  //   if (p.variants.length === 1 && p.variants[0].quantity < 1)
  //     return notifyError("Insufficient stock");
  //   // if (notAvailable) return notifyError('This Variation Not Available Now!');
  //   if (stock <= 0) return notifyError("Insufficient stock");
  //   // console.log('selectVariant', selectVariant);

  //   if (
  //     product?.variants.map(
  //       (variant) =>
  //         Object.entries(variant).sort().toString() ===
  //         Object.entries(selectVariant).sort().toString()
  //     )
  //   ) {
  //     const newItem = {
  //       ...p,
  //       id: `${
  //         p.variants.length <= 1
  //           ? p._id
  //           : p._id +
  //             variantTitle
  //               ?.map(
  //                 // (att) => selectVariant[att.title.replace(/[^a-zA-Z0-9]/g, '')]
  //                 (att) => selectVariant[att._id]
  //               )
  //               .join("-")
  //       }`,

  //       title: `${
  //         p.variants.length <= 1
  //           ? showingTranslateValue(product?.title, lang)
  //           : showingTranslateValue(product?.title, lang) +
  //             "-" +
  //             variantTitle
  //               ?.map(
  //                 // (att) => selectVariant[att.title.replace(/[^a-zA-Z0-9]/g, '')]
  //                 (att) =>
  //                   att.variants?.find((v) => v._id === selectVariant[att._id])
  //               )
  //               .map((el) =>
  //                 Object.keys(el?.name).includes(lang)
  //                   ? el?.name[lang]
  //                   : el?.name.en
  //               )
  //       }`,
  //       variant: selectVariant,
  //       price: price,
  //       originalPrice: originalPrice,
  //     };
  //     handleAddItem(newItem);
  //   } else {
  //     return notifyError("Please select all variant first!");
  //   }
  // };


  // const { t } = useTranslation();

  // // category name slug
  // const category_name = showingTranslateValue(product?.category?.name)
  //   .toLowerCase()
  //   .replace(/[^A-Z0-9]+/gi, "-");

  return (
    <>
      <Layout>
        <SingleProduct product={product} />

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


export const getRecord = async (slug) => {

  const params = {
    method: "get",
    header: {},
    query: {}
  };
  const product = getProductById(slug);
  const RelatedProduct = getProductByChildrenCategory(product?.children);
  return { product, RelatedProduct }

}