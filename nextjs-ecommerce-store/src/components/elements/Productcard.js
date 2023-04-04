import {
  Favorite,
  FavoriteOutlined,
  RemoveDoneOutlined,
  RemoveRedEye,
  RemoveRedEyeOutlined,
  ShoppingCart,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  colors,
  Grid,
  IconButton,
  Paper,
  Rating,
  styled,
  Typography,
} from "@mui/material";
import Link from "next/link";

const Productcard = ({ product, size }) => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0),

    color: theme.palette.text.secondary,
  }));

  return (
    <Grid
      item
      xs={size ? size : 3}
      sx={{
        "& .MuiPaper-rounded:hover": {
          boxShadow: "0px 6px 10px rgba(3, 0, 71, 0.09)",
        },
      }}
    >
      <Item>
        <Card>
          <CardContent
            className="product?-card-content"
            sx={{
              position: "relative",
              padding: 0,
              cursor: "pointer",
              "&:hover>.actionIcons": {
                display: "flex",
              },
            }}
          >
            <Typography
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                p: "5px 10px",
                bgcolor: colors.red[400],
                borderRadius: 5,
                color: colors.grey[100],
              }}
              gutterBottom
              variant="body2"
            >
              {product?.discount
                ? ((100 / product?.price) * product?.discount).toFixed(2)
                : "18"}{" "}
              %
            </Typography>
            <CardMedia
              sx={{ height: "280px !important" }}
              component="img"
              alt="green iguana"
              image="/assets/images/pexels-wendy-wei-14411099.jpg"
            />

            <Box
              className="actionIcons"
              sx={{
                position: "absolute",

                display: "none",
                flexDirection: "column",
                gap: 1,
                top: 20,
                right: 10,
              }}
            >
              <IconButton>
                <RemoveRedEyeOutlined />
              </IconButton>
              <IconButton>
                <FavoriteOutlined />
              </IconButton>
            </Box>
            <Box mt={2} px={1}>
              <Link href={`product/${product.slug}`}>
                {product?.title ? product?.title : " This is a product? Title"}
              </Link>
              <Rating
                name="half-rating-read"
                defaultValue={4.5}
                precision={0.5}
                readOnly
              />
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
              <Typography color={colors.red[500]} variant="body2">
                ${" "}
                {product?.discount
                  ? product?.price.toFixed(2) - product?.discount.toFixed(2)
                  : product?.price.toFixed(2)
                  ? product?.price.toFixed(2)
                  : "$275.00"}
              </Typography>
              {product?.discount && (
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  color={colors.grey[400]}
                  variant="body2"
                >
                  ${product?.price ? product?.price.toFixed(2) : "$275.00"}
                </Typography>
              )}
            </Box>
            <IconButton>
              <ShoppingCartOutlined />
            </IconButton>
          </CardActions>
        </Card>
      </Item>
    </Grid>
  );
};

export default Productcard;
