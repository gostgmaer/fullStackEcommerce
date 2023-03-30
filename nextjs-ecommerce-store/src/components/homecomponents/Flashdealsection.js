import {
  ArrowForward,
  ArrowRight,
  FlashAuto,
  FlashOn,
} from "@mui/icons-material";
import { Fragment } from "react";
import Elementlist from "../elements/Elementlist";
import Productcard from "../elements/Productcard";

const FlashDeal = () => {
  return (
    <Fragment>
      <Elementlist title={"Flash Deal"} icon=<FlashOn />>
        {Array.from(Array(12).keys()).map((item) => (
          <Productcard key={item} />
        ))}
      </Elementlist>
    </Fragment>
  );
};

export default FlashDeal;
