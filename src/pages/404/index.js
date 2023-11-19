import { ArrayData, productData } from "@/assets/mock/product";
import Elementlist from "@/components/elements/Elementlist";
import Productcard from "@/components/elements/Productcard";
import Layout from "@/layout";
import {
  Box,
  Grid,
  Pagination,
  Stack,
  Typography,
  colors,
} from "@mui/material";
import Image from "next/image";

const index = () => {
  return (
    <Layout>
      <div className=" text-center h-screen flex items-center justify-center flex-col gap-2 bg-gray-100">
       <p className=" text-6xl font-semibold">404</p>
       <p className=" text-xl"> We&apos;re sorry! This page is currently unavailable.</p>
      </div>
    </Layout>
  );
};

export default index;
