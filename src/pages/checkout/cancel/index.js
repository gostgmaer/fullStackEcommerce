import { baseurl } from "@/config/setting";
import axios from "axios";
import React from "react";

const Index = () => {
  return <div>index</div>;
};

export default Index;

export async function getServerSideProps(ctx) {
  try {
    const { query } = ctx;

    console.log(query);

    const response = await axios.post(baseurl + "/payment/checkout/process/cancel", query);

    return {
      props: {
        data: response.data, // Assuming you want to pass the response data
      },
    };
  } catch (error) {
    console.error("Error:", error);

    return {
      props: {
        data: null, // You might want to handle errors appropriately
      },
    };
  }
}
