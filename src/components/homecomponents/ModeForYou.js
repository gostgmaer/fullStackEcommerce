import { Fragment } from "react";
import Elementlist from "../elements/Elementlist";
import Productcard from "../elements/Productcard";

const ModeForYou = ({data}) => {
  return (
    <Fragment>
    <Elementlist title={"More For You"} icon={undefined}>
      {data.map((item) => (
        <Productcard  key={item.id} size={undefined} product={item} />
      ))}
    </Elementlist>
  </Fragment>
  )
}

export default ModeForYou