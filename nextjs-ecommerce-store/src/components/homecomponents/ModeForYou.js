import { Fragment } from "react";
import Elementlist from "../elements/Elementlist";
import Productcard from "../elements/Productcard";

const ModeForYou = () => {
  return (
    <Fragment>
    <Elementlist title={"More For You"} icon={undefined}>
      {Array.from(Array(8).keys()).map((item) => (
        <Productcard key={item} size={undefined} />
      ))}
    </Elementlist>
  </Fragment>
  )
}

export default ModeForYou