import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  styled,
} from "@mui/material";
import Link from "next/link";
import { Item } from "./Item";
import Image from "next/image";

const CatagoryCard = ({ category }) => {
  // console.log(category);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));

  return (
    <Grid
      item
      xs={2}
      sx={{
        "& .MuiPaper-rounded:hover": {
          boxShadow: "0px 6px 10px rgba(3, 0, 71, 0.09)",
        },
      }}
    >
      <Item>
        <Card sx={{ minWidth: 200 }}>
          <CardContent
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              cursor: "pointer",

              padding: "10px !important",
            }}
          >
            <CardMedia
              sx={{
                height: "50px !important",
                width: "50px",
                borderRadius: "50%",
              }}
              component="img"
              alt="green iguana"
              image="/assets/images/pexels-wendy-wei-14411099.jpg"
            />
            <Link href={`/product/search/${category.slug}`}>
              {category?.name ? category.name : "category Title"}
            </Link>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};

const CategoryBlock = ({ size, category }) => {
  return (
    <Grid
      item
      className=" [&_.MuiPaper-rounded]:border p-1"
      xs={size ? size : 12}
      sx={{
        "& .MuiPaper-rounded": {
          boxShadow: "none",
        },
      }}
    >
      <Item>
        <div className="product-category col is-selected">
          <div className="col-inner relative">
            <div className="box-image">
              <Image
                className="lazy-load-active w-40 h-40"
                src={category["images"]?.[0]?.["url"]}
                data-src={category["images"]?.[0]?.["url"]}
                alt={category?.["name"]}
                width={100}
                height={100}
              />
            </div>
            <div className="image-tools bg-white text-gray-900 cursor-pointer justify-center hover:bg-gray-700 opacity-95 hover:text-white  top-[50%]  items-center w-full absolute  text-center grid-tools  hide-for-small bottom hover-slide-in show-on-hover">
              <Link href={`/product/search/${category.slug}`}>
                {category?.name ? category.name : "category Title"}
              </Link>
              <p className="is-xsmall uppercase count"> 18 Products</p>
            </div>
          </div>
        </div>
      </Item>
    </Grid>
  );
};

export default CategoryBlock;
