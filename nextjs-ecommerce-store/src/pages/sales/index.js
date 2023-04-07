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
      <Grid
        py={2}
        px={4}
        sx={{ backgroundColor: colors.grey[50] }}
        container
        spacing={0}
        columns={12}
      >
        {productData.bottomCategories.map((item) => (
          <Grid
            item
            xs={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            key={item.id}
          >
            <Image
              width={25}
              height={25}
              src={"/assets/images/nike-black.png"}
              alt="asd"
            ></Image>
            <Typography fontSize={12}>{item.name}</Typography>
          </Grid>
        ))}
      </Grid>
      <Box>
        <Box p={3} py={1} component={"section"}>
          <Grid
            container
            item
            gap={"10px"}
            justifyContent="space-between"
            p="0"
            width="100%"
            m="0"
            columns={12.8}
          >
            {productData.topRatedProducts.map((item) => (
              <Productcard key={item.id} size={undefined} product={item} />
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
          }}
        >
          <Typography>
            Showing: <span>1-28</span> of <span> 289</span> products
          </Typography>
          <Pagination count={10} variant="outlined" color="primary" />
        </Box>
      </Box>
    </Layout>
  );
};

export default index;
