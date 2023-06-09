import {
  FavoriteOutlined,
  RemoveRedEyeOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  colors,
  Grid,
  IconButton,
  Paper,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import { Item } from "./Item";
import Link from "next/link";

const Smallproductcard = ({ issale, height, size, product }) => {
  // console.log(product);
  return (
    <Grid item xs={size ? size : 3}>
      <Item sx={{ boxShadow: "none", background: "transparent" }}>
        <CardContent
          sx={{
            position: "relative",
            background: "#fff",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <Box sx={{ background: "#000", borderRadius: 5 }}>
            <CardMedia
              sx={{
                height: `${height ? height : "200px"} !important`,
                borderRadius: "20px 20px 0 0",
                "&.MuiCardMedia-media:hover": {
                  opacity: 0.8,
                },
              }}
              component="img"
              alt="green iguana"
              image="/assets/images/pexels-wendy-wei-14411099.jpg"
            />
          </Box>

          <Box mt={2} px={1}>
            <Link href={`product/${product.slug}`}>
              {product?.title ? product?.title : " This is a product? Title"}
            </Link>
          </Box>
        </CardContent>
        <CardActions
          sx={{ justifyContent: "space-between", background: "#fff" }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Typography color={colors.red[500]} variant="body2">
              $
              {product?.discount
                ? (product?.price - product?.discount).toFixed(2)
                : product?.price
                ? product?.price
                : "275.00"}
            </Typography>
            {issale && (
              <Typography
                sx={{ textDecoration: "line-through" }}
                color={colors.grey[400]}
                variant="body2"
              >
                ${product?.price ? product?.price : "275.00"}
              </Typography>
            )}
          </Box>
        </CardActions>
      </Item>
    </Grid>
  );
};

export default Smallproductcard;
