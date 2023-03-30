import { Box, Button, Container, Grid, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const newdata = {
  id: 10,
  title: "Edan",
  category: "Sreenan",
  img: "https://robohash.org/sintreiciendissunt.png?size=50x50&set=set1",
  published: "Non-binary",
  description: "126.79.89.72",
  author: "151.84.153.105",
};
const Carousalelement = () => {
  const { id, title, category, img, published, description, author } = newdata;

  return (
    <Box
      component={"div"}
      display="flex"
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{
        backgroundImage: 'url("/assets/images/pexels-wendy-wei-14411099.jpg")',
        backgroundSize: "100%",
      }}
    >
      <Box
        className="wrapper"
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
        p='0 2.5rem'
        maxHeight={'1280px'}
        width="100%"
      >
        <Stack spacing={2} className="left">
          <Grid item xs={12}>
            Summer Sale Category
          </Grid>
          <Grid item xs={12}>
            get up to 30% Off New Arrivals
          </Grid>
          <Grid item xs={12}>
            <Button>Shop Now</Button>
          </Grid>
        </Stack>
        <Stack spacing={2} className="right">
          <Image
            src={"/assets/images/pexels-wendy-wei-14411099.jpg"}
            width={560}
            height={480}
            alt="hero"
          ></Image>
        </Stack>
      </Box>
    </Box>
  );
};

export default Carousalelement;
