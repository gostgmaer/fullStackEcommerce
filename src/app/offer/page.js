

import { content } from "@/assets/jsonfile/content";
import PageHeading from "@/components/global/layout/heading/pageHeading";
import Layout from "@/components/global/layout/Layout";

const Offer = () => {
  return (
    <Layout >
      <PageHeading title={content["mega-offer"]} />
      <div className="mx-auto max-w-screen-2xl px-4 py-10 lg:py-20 sm:px-10">
        <div className="grid gap-6 grid-cols-1 xl:grid-cols-2">
          {/* <Coupon /> */}
        </div>
      </div>
    </Layout>
  );
};

export default Offer;
