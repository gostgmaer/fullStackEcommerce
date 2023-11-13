import { Fragment } from "react";
import Elementlist from "../elements/Elementlist";
import PCard from "../global/products/Card";
import { Category, FlashOn, Shield, ShieldMoon } from "@mui/icons-material";
import { SwiperSlide } from "swiper/react";
import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { Item } from "../elements/Item";
import CategoryBlock from "../elements/Categorycard";

export const NewArrived = ({ data }) => {
  return (
    <Fragment>
      <Elementlist
        title={"New Arrived"}
        icon={undefined}
        isSlide={undefined}
        slideItem={undefined}
      >
        {data?.map((item) => (
          <PCard key={item._id} size={3} product={item} />
        ))}
      </Elementlist>
    </Fragment>
  );
};

export const FeaturedItem = ({ data }) => {
  return (
    <Fragment>
      <Elementlist
        title={"Featured Items"}
        icon={<ShieldMoon />}
        isSlide={1}
        slideItem={4}
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <PCard key={item._id} product={item} size={12} />
          </SwiperSlide>
        ))}
      </Elementlist>
    </Fragment>
  );
};

export const FlashDeal = ({ data }) => {
  return (
    <Fragment>
      <Elementlist
        title={"Flash Deal"}
        icon={<FlashOn />}
        isSlide={1}
        slideItem={4}
      >
        {data?.map((item) => (
          <SwiperSlide key={item._id}>
            <PCard key={item._id} product={item} size={12} />
          </SwiperSlide>
        ))}
      </Elementlist>
    </Fragment>
  );
};

export const HomeFooter = ({ service }) => {
  // const { data, isLoading, isError } = useFetcher("products");

  return (
    <Box py={1} component={"section"}>
      <Box sx={{ width: "100%", mt: 2 }}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            gap={"10px"}
            justifyContent="space-between"
            p="0"
            width="100%"
            m="0"
            columns={12.6}
          >
            {service.map((item) => (
              <FeatureItemscard data={item} key={item.id} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export const FeatureItemscard = ({ data }) => {
  return (
    <Grid
      item
      xs={3}
      className="border hover:text-white "
      sx={{
        "& .MuiPaper-rounded:hover": {
          boxShadow: "none",
        },
        "& .MuiPaper-rounded": {
          boxShadow: "none",
        },
      }}
    >
      <Item>
        <Card sx={{ maxWidth: 345 }}>
          <CardContent
            sx={{
              position: "relative",
              padding: 0,
              display: "flex",
              alignItems: "center",
              height: "280px",
              justifyContent: "center",
              flexDirection: "column",
              gap: 3,
              textAlign: "center",
              pb: "0 !important",
              cursor: "pointer",
            }}
            className="hover:text-white hover:bg-gray-600"
          >
            <Shield style={{ width: "50px", height: "50px" }} />

            <Typography gutterBottom variant="h5">
              {data?.title ? data.title : " Worldwide Delivery"}
            </Typography>
            <Typography gutterBottom variant="body1">
              We offer competitive prices on our 100 million plus product any
              range.
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};

export const CategoryList = ({ data }) => {

    return (
      <Fragment>
        <Elementlist
          title={"Categories"}
          icon=<Category />
          isSlide={1}
          slideItem={6}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <CategoryBlock category={item} key={item._id} size={12} />
            </SwiperSlide>
          ))}
        </Elementlist>
      </Fragment>
    );
  };