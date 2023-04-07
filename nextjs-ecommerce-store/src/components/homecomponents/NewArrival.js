import { ArrowRight, NewReleases } from "@mui/icons-material";
import { Box, Button, colors, Grid, Typography } from "@mui/material";
import Smallproductcard from "../elements/Smallproductcard";

const NewArrival = ({data}) => {
  return (
    <Box p={3} py={1} component={"section"}>
      <Box sx={{ width: "100%", mt: 0 }}>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            py: 1,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              display: "flex",
              gap: 1,

              alignItems: "center",
            }}
          >
            <NewReleases /> New Arrival
          </Typography>
          <Button variant="text" endIcon={<ArrowRight />}>
            View all
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            gap={"10px"}
            justifyContent="space-between"
            p="10px"
            borderRadius={5}
            bgcolor={"white"}
            width="100%"
            m="0"
            columns={19}
          >
            {data.map((item) => (
              <Smallproductcard  height={null} issale={false} size={null} key={item.id} product={item} />
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default NewArrival;
