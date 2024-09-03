import { Drawer, ButtonToolbar, Button, Placeholder } from "rsuite";
//internal import

import React from "react";
import dynamic from "next/dynamic";
import { useDispatch, useSelector } from "react-redux";
import { isOpenAction } from "@/store/reducers/isOpenSlice";

const SideDrawer = ({ open, setOpen, children }) => {
  // const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Drawer open={open} size={400} >
        <Drawer.Body className="p-0">{children}</Drawer.Body>
      </Drawer>
    </div>
  );
};
export default dynamic(() => Promise.resolve(SideDrawer), { ssr: false });
