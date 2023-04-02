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

const CatagoryCard = () => {
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
            <Link  href={'/product/search/547154'}>
              Product Title
            </Link>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
};

export default CatagoryCard;
