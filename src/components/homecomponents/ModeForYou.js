import { Fragment } from "react";
import Elementlist from "../elements/Elementlist";
import Productcard from "../elements/Productcard";
import PCard from "../global/products/Card";

const ModeForYou = ({ data }) => {
  return (
    <Fragment>
      <Elementlist
        title={"More For You"}
        icon={undefined}
        isSlide={undefined}
        slideItem={undefined}
      >
        {data.map((item) => (
          <PCard key={item.id} size={3} product={item} />
        ))}
      </Elementlist>
    </Fragment>
  );
};

export default ModeForYou;
